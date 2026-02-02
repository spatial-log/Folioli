"use client";

import clsx from "clsx";
import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { Trash2, ChevronLeft, ChevronRight } from "lucide-react";
import Papa from "papaparse";
import { CATEGORIES } from "@/lib/categories";
import { Transaction, SortField, SortDirection } from "@/lib/types";
import { SearchableSelect } from "@/components/ui/SearchableSelect";
import { ConfirmModal } from "@/components/ui/ConfirmModal";
import { parseDate } from "@/lib/dashboardUtils";

// Re-export Transaction for backwards compatibility
export type { Transaction } from "@/lib/types";

// Modern minimal resize cursor (thin vertical bar with subtle arrows)
const RESIZE_CURSOR = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23475569' d='M8 12l-3-3v2H2v2h3v2l3-3zm8 0l3-3v2h3v2h-3v2l-3-3z'/%3E%3Crect x='11' y='4' width='2' height='16' rx='1' fill='%23334155'/%3E%3C/svg%3E") 12 12, col-resize`;

// Column configuration - using flex ratios for proportional sizing
const COLUMNS = [
    { field: "date" as const, label: "Date", flex: 1, minWidth: 80 },
    { field: "name" as const, label: "Name", flex: 2.5, minWidth: 100 },
    { field: "amount" as const, label: "Amount", flex: 1, minWidth: 80, align: "right" as const },
    { field: "category" as const, label: "Category", flex: 1.5, minWidth: 100 },
    { field: "memo" as const, label: "Memo", flex: 1.5, minWidth: 80 },
];

interface TransactionTableProps {
    transactions: Transaction[];
    onUpdate: (index: number, field: keyof Transaction, value: any) => void;
    onDelete: (index: number) => void;
    onPasteImport: (data: any[]) => void;
    onSave?: () => void;
}

export function TransactionTable({ transactions, onUpdate, onDelete, onPasteImport, onSave }: TransactionTableProps) {
    const [sortField, setSortField] = useState<SortField>("date");
    const [sortDirection, setSortDirection] = useState<SortDirection>("desc");
    const [deleteConfirmIndex, setDeleteConfirmIndex] = useState<number | null>(null);
    const [visibleCount, setVisibleCount] = useState<number | 'all'>(50);
    const [currentPage, setCurrentPage] = useState(1);

    // Total flex for percentage calculation
    const totalFlex = COLUMNS.reduce((sum, c) => sum + c.flex, 0);

    // Column widths state (as percentages)
    const [columnWidths, setColumnWidths] = useState<Record<string, number>>(() =>
        Object.fromEntries(COLUMNS.map(col => [col.field, (col.flex / totalFlex) * 100]))
    );

    // Resize state
    const [resizingColumn, setResizingColumn] = useState<string | null>(null);
    const resizeStartX = useRef(0);
    const resizeStartWidth = useRef(0);
    const justResized = useRef(false);
    const tableRef = useRef<HTMLTableElement>(null);

    // Memoized sorted transactions
    const sortedTransactions = useMemo(() => {
        return [...transactions].sort((a, b) => {
            if (sortField === "amount") {
                return sortDirection === "asc" ? a.amount - b.amount : b.amount - a.amount;
            }
            if (sortField === "date") {
                const dateA = parseDate(a.date)?.getTime() ?? 0;
                const dateB = parseDate(b.date)?.getTime() ?? 0;
                return sortDirection === "asc" ? dateA - dateB : dateB - dateA;
            }
            const aVal = a[sortField] ?? "";
            const bVal = b[sortField] ?? "";
            const comparison = String(aVal).localeCompare(String(bVal));
            return sortDirection === "asc" ? comparison : -comparison;
        });
    }, [transactions, sortField, sortDirection]);

    const displayedTransactions = useMemo(() => {
        if (visibleCount === 'all') return sortedTransactions;
        const startIndex = (currentPage - 1) * visibleCount;
        return sortedTransactions.slice(startIndex, startIndex + visibleCount);
    }, [sortedTransactions, visibleCount, currentPage]);

    const totalPages = visibleCount === 'all'
        ? 1
        : Math.ceil(sortedTransactions.length / visibleCount);

    // Reset to page 1 when filter/sort changes
    useEffect(() => {
        setCurrentPage(1);
    }, [visibleCount, sortField, sortDirection, transactions.length]);

    // Memoized index lookup (for updates/deletes)
    const getOriginalIndex = useCallback((displayIndex: number): number => {
        // Adjust display index to account for pagination
        const paginationOffset = visibleCount === 'all' ? 0 : (currentPage - 1) * visibleCount;
        const actualSortedIndex = displayIndex + paginationOffset;
        const tx = sortedTransactions[actualSortedIndex];
        return transactions.findIndex(t => t === tx);
    }, [sortedTransactions, transactions, currentPage, visibleCount]);

    // Handle column header click for sorting
    const handleSort = useCallback((field: SortField) => {
        // Don't sort if we just finished resizing
        if (justResized.current) return;

        if (sortField === field) {
            setSortDirection(prev => prev === "asc" ? "desc" : "asc");
        } else {
            setSortField(field);
            setSortDirection("asc");
        }
    }, [sortField]);

    // Sort indicator
    const SortIndicator = ({ field }: { field: SortField }) => {
        if (sortField !== field) return null;
        return (
            <span className="ml-1.5 inline-block">
                <svg width="8" height="6" viewBox="0 0 8 6" fill="currentColor"
                    className={clsx("transition-transform", sortDirection === "desc" && "rotate-180")}>
                    <path d="M4 0L8 6H0L4 0Z" />
                </svg>
            </span>
        );
    };

    // Start column resize
    const handleResizeStart = (field: string, e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setResizingColumn(field);
        resizeStartX.current = e.clientX;
        resizeStartWidth.current = columnWidths[field];
    };

    // Handle resize mouse move
    useEffect(() => {
        if (!resizingColumn) return;

        const handleMouseMove = (e: MouseEvent) => {
            if (!tableRef.current) return;
            const tableWidth = tableRef.current.offsetWidth;
            const deltaPixels = e.clientX - resizeStartX.current;
            // Convert pixel delta to percentage
            const deltaPercent = (deltaPixels / tableWidth) * 100;
            const col = COLUMNS.find(c => c.field === resizingColumn);
            // Ensure minimum width in percentage (approximate)
            const minPercent = ((col?.minWidth || 60) / tableWidth) * 100;
            const newWidth = Math.max(minPercent, resizeStartWidth.current + deltaPercent);
            setColumnWidths(prev => ({ ...prev, [resizingColumn]: newWidth }));
        };

        const handleMouseUp = () => {
            setResizingColumn(null);
            // Set flag to prevent sort from triggering
            justResized.current = true;
            setTimeout(() => { justResized.current = false; }, 100);
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
        document.body.style.cursor = RESIZE_CURSOR;
        document.body.style.userSelect = "none";

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
            document.body.style.cursor = "";
            document.body.style.userSelect = "";
        };
    }, [resizingColumn, columnWidths]);

    // Double-click to auto-fit column width
    const handleDoubleClick = (field: string) => {
        if (!tableRef.current) return;

        const colIndex = COLUMNS.findIndex(c => c.field === field);
        const cells = tableRef.current.querySelectorAll(`td:nth-child(${colIndex + 1}), th:nth-child(${colIndex + 1})`);
        const tableWidth = tableRef.current.offsetWidth;

        // Create a temporary hidden element to measure text width
        const measureEl = document.createElement('span');
        measureEl.style.cssText = 'position:absolute;visibility:hidden;white-space:nowrap;font-size:inherit;font-family:inherit;font-weight:inherit;';
        document.body.appendChild(measureEl);

        let maxWidth = COLUMNS[colIndex].minWidth;
        cells.forEach(cell => {
            const htmlCell = cell as HTMLElement;
            // Get the actual text content
            const textContent = htmlCell.textContent || '';
            // Copy font styles from the cell
            const styles = window.getComputedStyle(htmlCell);
            measureEl.style.fontSize = styles.fontSize;
            measureEl.style.fontFamily = styles.fontFamily;
            measureEl.style.fontWeight = styles.fontWeight;
            measureEl.textContent = textContent;

            // Measure and add padding (16px on each side = 32px total)
            const width = measureEl.offsetWidth + 32;
            maxWidth = Math.max(maxWidth, width);
        });

        document.body.removeChild(measureEl);

        // Convert to percentage, cap at 50% of table width
        const maxPercent = (Math.min(maxWidth, tableWidth * 0.5) / tableWidth) * 100;
        setColumnWidths(prev => ({ ...prev, [field]: maxPercent }));
    };

    // Global paste listener for CSV data
    useEffect(() => {
        const handlePaste = (e: ClipboardEvent) => {
            const target = e.target as HTMLElement;
            if (target?.tagName === "INPUT" || target?.tagName === "TEXTAREA") return;

            const clipboardData = e.clipboardData?.getData("text");
            if (!clipboardData) return;

            const hasTabsOrCommas = clipboardData.includes("\t") || clipboardData.includes(",");
            const hasNewlines = clipboardData.includes("\n");

            if (hasTabsOrCommas && hasNewlines) {
                e.preventDefault();
                Papa.parse(clipboardData, {
                    header: true,
                    skipEmptyLines: true,
                    complete: (results) => {
                        if (results.data.length > 0) {
                            onPasteImport(results.data as any[]);
                        }
                    }
                });
            }
        };

        document.addEventListener("paste", handlePaste);
        return () => document.removeEventListener("paste", handlePaste);
    }, [onPasteImport]);

    const confirmDelete = () => {
        if (deleteConfirmIndex !== null) {
            onDelete(getOriginalIndex(deleteConfirmIndex));
            setDeleteConfirmIndex(null);
        }
    };

    const deleteTransaction = deleteConfirmIndex !== null ? sortedTransactions[deleteConfirmIndex] : null;

    const hasPendingTransactions = transactions.some(t => t.status === "pending");

    return (
        <div className="h-full bg-card border border-border shadow-sm rounded-2xl overflow-hidden flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center p-4 bg-muted border-b border-border gap-4">
                <div className="flex items-center gap-4">
                    <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-wide">Transactions</h2>
                    <span className="text-xs text-muted-foreground/60 font-medium">{sortedTransactions.length} total</span>
                </div>

                <div className="flex items-center gap-4">
                    {/* Rows per page selector */}
                    <div className="flex items-center gap-2 bg-card rounded-lg border border-border p-1 shadow-sm">
                        <span className="text-xs font-medium text-muted-foreground px-2 uppercase tracking-wide">Show</span>
                        <div className="flex gap-1">
                            {[50, 100, 200].map(count => (
                                <button
                                    key={count}
                                    onClick={() => setVisibleCount(count)}
                                    className={clsx(
                                        "px-2.5 py-1 text-xs font-medium rounded-md transition-all",
                                        visibleCount === count
                                            ? "bg-lime-100 dark:bg-lime-900/20 text-lime-700 dark:text-lime-400 shadow-sm"
                                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                    )}
                                >
                                    {count}
                                </button>
                            ))}
                            <button
                                onClick={() => setVisibleCount('all')}
                                className={clsx(
                                    "px-2.5 py-1 text-xs font-medium rounded-md transition-all",
                                    visibleCount === 'all'
                                        ? "bg-lime-100 dark:bg-lime-900/20 text-lime-700 dark:text-lime-400 shadow-sm"
                                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                )}
                            >
                                All
                            </button>
                        </div>
                    </div>

                    {onSave && hasPendingTransactions && (
                        <button
                            onClick={onSave}
                            className="bg-lime-600 text-white text-sm px-4 py-1.5 rounded-lg hover:bg-lime-700 transition font-medium shadow-sm flex items-center gap-2"
                        >
                            Save Changes
                        </button>
                    )}
                </div>
            </div>

            {/* Delete Confirmation Modal */}
            <ConfirmModal
                isOpen={deleteConfirmIndex !== null}
                title="Delete Transaction?"
                message={`Are you sure you want to delete "${deleteTransaction?.name}"? This action cannot be undone.`}
                confirmLabel="Delete"
                onConfirm={confirmDelete}
                onCancel={() => setDeleteConfirmIndex(null)}
                variant="danger"
            />

            {/* Table */}
            <div className="flex-1 overflow-auto">
                <table ref={tableRef} className="w-full border-collapse" style={{ tableLayout: 'fixed' }}>
                    <thead className="bg-[#1e293b] text-white sticky top-0 z-10 shadow-sm">
                        <tr>
                            {COLUMNS.map(({ field, label, align }) => (
                                <th
                                    key={field}
                                    className={clsx(
                                        "relative px-4 py-3 text-xs font-semibold uppercase tracking-wider border-r border-slate-700 cursor-pointer hover:bg-slate-700 transition select-none",
                                        align === "right" && "text-right"
                                    )}
                                    style={{ width: `${columnWidths[field]}%` }}
                                    onClick={() => handleSort(field)}
                                >
                                    <span className={clsx("flex items-center", align === "right" && "justify-end")}>
                                        {label} <SortIndicator field={field} />
                                    </span>
                                    {/* Resize handle */}
                                    <div
                                        className="absolute top-0 right-0 w-2 h-full hover:bg-lime-400/50 z-10"
                                        style={{ cursor: RESIZE_CURSOR }}
                                        onClick={(e) => e.stopPropagation()}
                                        onMouseDown={(e) => handleResizeStart(field, e)}
                                        onDoubleClick={(e) => { e.stopPropagation(); handleDoubleClick(field); }}
                                    />
                                </th>
                            ))}
                            <th className="w-12"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                        {displayedTransactions.map((tx, sortedIdx) => {
                            const originalIdx = getOriginalIndex(sortedIdx);
                            return (
                                <tr key={originalIdx} className={clsx("hover:bg-muted/50 transition-colors group", tx.status === "pending" && "bg-orange-50 dark:bg-orange-900/10")}>
                                    <td className="px-4 py-3 text-sm text-foreground border-r border-border truncate">{tx.date}</td>
                                    <td className="px-4 py-3 text-sm font-medium text-foreground border-r border-border truncate">{tx.name}</td>
                                    <td className={clsx(
                                        "px-4 py-3 text-sm text-right font-mono border-r border-border truncate",
                                        tx.amount < 0 ? "text-red-600 dark:text-red-400" : "text-emerald-700 dark:text-emerald-400 font-medium"
                                    )}>
                                        {tx.amount < 0 ? "-" : ""}${Math.abs(tx.amount).toFixed(2)}
                                    </td>
                                    <td className="px-0 py-0 border-r border-border relative">
                                        <SearchableSelect
                                            options={CATEGORIES}
                                            value={tx.category || "Uncategorized"}
                                            onChange={(value) => onUpdate(originalIdx, "category", value)}
                                            placeholder="Search categories..."
                                            emptyMessage="No matching categories"
                                            className={tx.status === "pending" ? "text-orange-600 dark:text-orange-400 font-medium" : undefined}
                                        />
                                    </td>
                                    <td className="px-4 py-3 text-sm text-muted-foreground truncate">
                                        {tx.memo || "—"}
                                    </td>

                                    <td className="p-0 w-12">
                                        <button
                                            onClick={() => setDeleteConfirmIndex(sortedIdx)}
                                            className="w-9 h-9 m-auto flex items-center justify-center opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                                            title="Delete transaction"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                {transactions.length === 0 && (
                    <div className="text-center p-12 text-gray-400 bg-gray-50/50">
                        No transactions found. Import a CSV to get started.
                    </div>
                )}
            </div>
            {/* Pagination Controls - Minimal */}
            {visibleCount !== 'all' && sortedTransactions.length > 0 && (
                <div className="flex items-center justify-between px-3 py-2 border-t border-border bg-card">
                    <div className="text-xs text-muted-foreground">
                        <span className="font-medium text-foreground">{(currentPage - 1) * visibleCount + 1}-{(Math.min(currentPage * visibleCount, sortedTransactions.length))}</span> of {sortedTransactions.length}
                    </div>
                    <div className="flex items-center gap-1">
                        <button
                            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                            disabled={currentPage === 1}
                            className="p-1 text-muted-foreground hover:text-foreground hover:bg-muted rounded disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                            title="Previous Page"
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <span className="text-xs text-gray-500 font-medium px-1 min-w-[3rem] text-center select-none">
                            {currentPage} / {totalPages}
                        </span>
                        <button
                            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                            disabled={currentPage === totalPages}
                            className="p-1 text-muted-foreground hover:text-foreground hover:bg-muted rounded disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                            title="Next Page"
                        >
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
