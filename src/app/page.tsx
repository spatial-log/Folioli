"use client";

import { useState, useEffect, useCallback } from "react";
import { listen } from "@tauri-apps/api/event";
import Papa from "papaparse";
import { initDB, getDB } from "@/lib/db";
import { categorize, buildLearnedMappings, loadMappingsFromDB, saveMappingToDB, LearnedMappings } from "@/lib/categories";
import { Tab, Transaction } from "@/lib/types";
import { Dashboard } from "@/components/Dashboard";
import { DropZone } from "@/components/DropZone";
import { Header } from "@/components/Header";
import { SettingsPage } from "@/components/SettingsPage";
import { TransactionTable } from "@/components/TransactionTable";
import { Toast, ToastType } from "@/components/ui/Toast";


export default function Home() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    // Toast state
    const [toast, setToast] = useState<{ message: string; type: ToastType; visible: boolean }>({
        message: "",
        type: "success",
        visible: false
    });

    const [isDragOver, setIsDragOver] = useState(false);
    const [activeTab, setActiveTab] = useState<Tab>("table");
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [learnedMappings, setLearnedMappings] = useState<LearnedMappings>(new Map());

    // Track if detailed changes have been made to avoid saving on initial load
    const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

    // Initialize database and Tauri file drop listener on component mount
    useEffect(() => {
        let unlistenDragOver: (() => void) | undefined;
        let unlistenDragLeave: (() => void) | undefined;
        let unlistenDrop: (() => void) | undefined;

        async function setup() {
            // Initialize DB
            await initDB();
            await loadTransactions();
            setIsLoading(false);

            // Tauri file drop listeners
            unlistenDragOver = await listen<{ paths: string[] }>("tauri://drag-over", () => {
                setIsDragOver(true);
            });

            unlistenDragLeave = await listen("tauri://drag-leave", () => {
                setIsDragOver(false);
            });

            unlistenDrop = await listen<{ paths: string[] }>("tauri://drag-drop", async (event) => {
                setIsDragOver(false);
                const paths = event.payload.paths;
                console.log("Tauri Drop Event - Paths:", paths);

                // Check for valid file types (CSV or Excel)
                const validExtensions = [".csv", ".xls", ".xlsx"];
                const validPath = paths.find(p =>
                    validExtensions.some(ext => p.toLowerCase().endsWith(ext))
                );

                if (!validPath) {
                    const droppedExt = paths[0]?.split('.').pop()?.toUpperCase() || 'unknown';
                    const msg = `Unsupported file type (.${droppedExt}). Please drop a CSV or Excel file.`;
                    console.log("Setting error message:", msg);
                    setErrorMessage(msg);
                    setTimeout(() => setErrorMessage(null), 5000);
                    return;
                }

                // Currently only CSV is fully supported
                if (!validPath.toLowerCase().endsWith(".csv")) {
                    setErrorMessage("Excel support coming soon. Please export as CSV for now.");
                    setTimeout(() => setErrorMessage(null), 5000);
                    return;
                }

                try {
                    const { readTextFile } = await import("@tauri-apps/plugin-fs");
                    const text = await readTextFile(validPath);

                    Papa.parse(text, {
                        header: true,
                        skipEmptyLines: true,
                        complete: (results) => {
                            console.log("Parsed CSV via Tauri:", results);
                            if (results.data.length > 0) {
                                handleImport(results.data as any[]);
                            } else {
                                setErrorMessage("CSV file was empty or could not be parsed.");
                                setTimeout(() => setErrorMessage(null), 5000);
                            }
                        },
                        error: (err: Error) => {
                            console.error("CSV Parse Error:", err);
                            setErrorMessage("Failed to parse the CSV file.");
                            setTimeout(() => setErrorMessage(null), 5000);
                        }
                    });
                } catch (err) {
                    console.error("File read error:", err);
                    setErrorMessage("Could not read the dropped file. Please try again.");
                    setTimeout(() => setErrorMessage(null), 5000);
                }
            });
        }

        setup();

        return () => {
            unlistenDragOver?.();
            unlistenDragLeave?.();
            unlistenDrop?.();
        };
    }, []);

    async function loadTransactions() {
        try {
            const db = getDB();

            // Load persisted mappings from DB first (survives transaction deletion)
            const dbMappings = await loadMappingsFromDB(db);

            // Load transactions
            const rows = await db.select<Transaction[]>("SELECT * FROM transactions ORDER BY date DESC");
            setTransactions(rows);

            // Build learned mappings by merging DB mappings with confirmed transactions
            const mappings = buildLearnedMappings(rows, dbMappings);
            setLearnedMappings(mappings);
            console.log(`Built learned mappings from ${mappings.size} unique transaction names`);
        } catch (e) {
            console.error("Failed to load transactions:", e);
        }
    }

    const handleImport = useCallback((rawRows: any[]) => {
        if (rawRows.length === 0) return;

        console.log("Raw Import Keys:", Object.keys(rawRows[0]));

        // Helper to find key case-insensitively
        const findVal = (row: any, keys: string[]) => {
            const rowKeys = Object.keys(row);
            for (const k of keys) {
                const found = rowKeys.find(rk => rk.toLowerCase() === k.toLowerCase());
                if (found) return row[found];
            }
            return null;
        };

        const mapped: Transaction[] = rawRows.map(row => {
            const amountStr = findVal(row, ["amount", "amt", "debit", "credit", "value"]);
            const amount = parseFloat(amountStr || "0");
            const name = findVal(row, ["description", "desc", "payee", "name", "transaction", "merchant"]) || "Unknown";
            const date = findVal(row, ["date", "posting date", "transaction date", "time"]) || new Date().toISOString().split('T')[0];
            const memo = findVal(row, ["memo", "details", "notes"]) || "";

            const category = categorize(name, amount, learnedMappings);

            return {
                date: date,
                name: name,
                amount: isNaN(amount) ? 0 : amount,
                category: category,
                memo: memo,
                status: "pending" as const
            };
        }).filter(t => t.amount !== 0 || t.name !== "Unknown");

        if (mapped.length === 0) {
            alert("Could not map any transactions. Check CSV headers. Looked for: Date, Description/Name, Amount.");
        } else {
            setTransactions(prev => [...mapped, ...prev]);
            setHasUnsavedChanges(true); // Flag import as needing save
        }
    }, [learnedMappings]);

    const handleUpdate = (index: number, field: keyof Transaction, value: any) => {
        setTransactions(prev => {
            const copy = [...prev];
            copy[index] = { ...copy[index], [field]: value };
            return copy;
        });
        setHasUnsavedChanges(true);
    };

    const handleSave = async () => {
        try {
            const db = getDB();

            for (const tx of transactions) {
                if (!tx.id) {
                    await db.execute(
                        "INSERT INTO transactions (date, name, amount, category, memo, status) VALUES ($1, $2, $3, $4, $5, $6)",
                        [tx.date, tx.name, tx.amount, tx.category, tx.memo, "confirmed"]
                    );
                } else {
                    await db.execute(
                        "UPDATE transactions SET date=$1, name=$2, amount=$3, category=$4, memo=$5, status=$6 WHERE id=$7",
                        [tx.date, tx.name, tx.amount, tx.category, tx.memo, "confirmed", tx.id]
                    );
                }

                // Save the category mapping for future auto-categorization
                if (tx.category && tx.category !== "Uncategorized") {
                    await saveMappingToDB(db, tx.name, tx.category as any);
                }
            }

            await loadTransactions();
            alert("Saved successfully!");
        } catch (e) {
            console.error("Save failed:", e);
            alert("Failed to save data.");
        }
    };

    const handleDelete = useCallback((index: number) => {
        setTransactions(prev => prev.filter((_, i) => i !== index));
        setHasUnsavedChanges(true);
    }, []);

    const handleDeleteAllTransactions = async () => {
        try {
            const db = getDB();
            await db.execute("DELETE FROM transactions");
            // Also clear mappings? Or keep them? User wanted persistence, so keep them.
            setTransactions([]);
            // But if they want to truly reset, maybe we should offer option?
            // For now, just delete transactions as requested.
        } catch (e) {
            console.error("Failed to delete transactions:", e);
            setErrorMessage("Failed to delete transactions. Is the database initialized?");
            setTimeout(() => setErrorMessage(null), 3000);
        }
    };

    if (isLoading) return <div className="p-8 text-center text-muted-foreground">Loading Folioli...</div>;

    return (
        <div className={`h-screen bg-background flex flex-col font-sans overflow-hidden ${isDragOver ? 'ring-4 ring-lime-600 ring-inset' : ''}`}>
            <Header activeTab={activeTab} onTabChange={setActiveTab} />

            <Toast
                message={toast.message}
                type={toast.type}
                isVisible={toast.visible}
                onClose={() => setToast(prev => ({ ...prev, visible: false }))}
            />

            {/* Error Banner */}
            {errorMessage && (
                <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
                    <div className="flex items-center gap-3 px-5 py-3 bg-card border border-red-200 dark:border-red-900/30 rounded-2xl shadow-lg">
                        <div className="p-2 bg-red-100 dark:bg-red-900/20 rounded-full">
                            <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>
                        <span className="text-sm font-medium text-foreground">{errorMessage}</span>
                        <button
                            onClick={() => setErrorMessage(null)}
                            className="ml-2 p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}

            <main className="flex-1 p-8 flex flex-col overflow-hidden">
                {activeTab === "dashboard" && (
                    <div className="flex-1 min-h-0 overflow-hidden">
                        <Dashboard transactions={transactions} />
                    </div>
                )}
                {activeTab === "table" && (
                    <>
                        <section className="mb-6 flex-shrink-0">
                            <DropZone isDragActive={isDragOver} />
                        </section>

                        <section className="flex-1 min-h-0 overflow-hidden">
                            <TransactionTable
                                transactions={transactions}
                                onUpdate={handleUpdate}
                                onDelete={handleDelete}
                                onPasteImport={handleImport}
                                onSave={handleSave}
                            />
                        </section>
                    </>
                )}
                {activeTab === "settings" && (
                    <div className="flex-1 overflow-y-auto min-h-0">
                        <SettingsPage onDeleteAllTransactions={handleDeleteAllTransactions} />
                    </div>
                )}
            </main >
        </div >
    );
}
