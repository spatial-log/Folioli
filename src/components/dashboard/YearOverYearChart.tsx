"use client";

import { useMemo, useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { formatCurrency, parseDate } from "@/lib/dashboardUtils";
import { Transaction } from "@/lib/types";

interface YearOverYearChartProps {
    transactions: Transaction[];
}

/**
 * Get monthly expense totals for a 12-month period ending at the specified year/month
 */
function getMonthlyExpenses(
    transactions: Transaction[],
    endYear: number,
    endMonth: number
): { month: string; label: string; expenses: number }[] {
    const result: { month: string; label: string; expenses: number }[] = [];

    for (let i = 11; i >= 0; i--) {
        const date = new Date(endYear, endMonth - i, 1);
        const year = date.getFullYear();
        const month = date.getMonth();
        const monthLabel = date.toLocaleString("default", { month: "short" });
        const monthKey = `${year}-${String(month + 1).padStart(2, "0")}`;

        // Filter transactions for this month (expenses only, exclude Account Transfer)
        const monthExpenses = transactions
            .filter((tx) => {
                const txDate = parseDate(tx.date);
                if (!txDate) return false;
                if (tx.amount >= 0) return false; // Only expenses
                if (tx.category === "Account Transfer") return false; // Exclude transfers
                return txDate.getFullYear() === year && txDate.getMonth() === month;
            })
            .reduce((sum, tx) => sum + Math.abs(tx.amount), 0);

        result.push({
            month: monthKey,
            label: monthLabel,
            expenses: monthExpenses,
        });
    }

    return result;
}

export function YearOverYearChart({ transactions }: YearOverYearChartProps) {
    // Find the date range of available data
    const { minYear, maxYear, maxMonth } = useMemo(() => {
        let minYear = new Date().getFullYear();
        let maxYear = new Date().getFullYear();
        let maxMonth = new Date().getMonth();

        for (const tx of transactions) {
            const date = parseDate(tx.date);
            if (date) {
                const year = date.getFullYear();
                const month = date.getMonth();
                if (year < minYear) minYear = year;
                if (year > maxYear || (year === maxYear && month > maxMonth)) {
                    maxYear = year;
                    maxMonth = month;
                }
            }
        }

        return { minYear, maxYear, maxMonth };
    }, [transactions]);

    // Current period state (navigable)
    const [currentEndYear, setCurrentEndYear] = useState(maxYear);
    const [currentEndMonth, setCurrentEndMonth] = useState(maxMonth);

    // CRITICAL: Sync state when computed values change (e.g., when transactions load async)
    useEffect(() => {
        setCurrentEndYear(maxYear);
        setCurrentEndMonth(maxMonth);
    }, [maxYear, maxMonth]);

    // Get monthly data for both periods
    const chartData = useMemo(() => {
        // Current 12-month period
        const currentPeriod = getMonthlyExpenses(transactions, currentEndYear, currentEndMonth);

        // Previous 12-month period (same months, one year earlier)
        const previousPeriod = getMonthlyExpenses(transactions, currentEndYear - 1, currentEndMonth);

        // Combine into chart data
        return currentPeriod.map((current, index) => ({
            label: current.label,
            current: current.expenses,
            previous: previousPeriod[index]?.expenses || 0,
        }));
    }, [transactions, currentEndYear, currentEndMonth]);

    // Period labels for display
    const currentPeriodLabel = useMemo(() => {
        const startDate = new Date(currentEndYear, currentEndMonth - 11, 1);
        const endDate = new Date(currentEndYear, currentEndMonth, 1);
        return `${startDate.toLocaleString("default", { month: "short", year: "numeric" })} - ${endDate.toLocaleString("default", { month: "short", year: "numeric" })}`;
    }, [currentEndYear, currentEndMonth]);

    const previousPeriodLabel = useMemo(() => {
        const startDate = new Date(currentEndYear - 1, currentEndMonth - 11, 1);
        const endDate = new Date(currentEndYear - 1, currentEndMonth, 1);
        return `${startDate.toLocaleString("default", { month: "short", year: "numeric" })} - ${endDate.toLocaleString("default", { month: "short", year: "numeric" })}`;
    }, [currentEndYear, currentEndMonth]);

    // Navigation handlers
    const canGoBack = currentEndYear > minYear + 1;
    const canGoForward = currentEndYear < maxYear || currentEndMonth < maxMonth;

    const goBack = () => {
        setCurrentEndYear((y) => y - 1);
    };

    const goForward = () => {
        if (currentEndYear < maxYear) {
            setCurrentEndYear((y) => y + 1);
        }
    };

    // Check if there's any data
    const hasData = chartData.some((d) => d.current > 0 || d.previous > 0);

    if (!hasData) {
        return (
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 min-h-[400px] flex flex-col">
                <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-6">
                    Year-Over-Year Comparison
                </h3>
                <div className="flex-1 flex flex-col items-center justify-center text-gray-400">
                    <p className="text-sm">No expense data found</p>
                    <p className="text-xs mt-2">
                        Data range: {minYear} - {maxYear}
                    </p>
                    <p className="text-xs">Transactions: {transactions.length}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 min-h-[400px] flex flex-col">
            {/* Header with navigation */}
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide">
                    Year-Over-Year Comparison
                </h3>
                <div className="flex items-center gap-2">
                    <button
                        onClick={goBack}
                        disabled={!canGoBack}
                        className="p-1.5 rounded-lg hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                        title="Previous period"
                    >
                        <ChevronLeft className="w-5 h-5 text-gray-600" />
                    </button>
                    <span className="text-xs text-gray-500 font-medium min-w-[100px] text-center">
                        {currentEndYear}
                    </span>
                    <button
                        onClick={goForward}
                        disabled={!canGoForward}
                        className="p-1.5 rounded-lg hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                        title="Next period"
                    >
                        <ChevronRight className="w-5 h-5 text-gray-600" />
                    </button>
                </div>
            </div>

            {/* Chart */}
            <div className="flex-1 w-full min-h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={chartData}
                        margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                        <XAxis
                            dataKey="label"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#6B7280", fontSize: 12 }}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#6B7280", fontSize: 12 }}
                            tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
                        />
                        <Tooltip
                            cursor={{ fill: "#F3F4F6" }}
                            contentStyle={{
                                borderRadius: "12px",
                                border: "none",
                                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                            }}
                            formatter={(value: any) => formatCurrency(value)}
                        />
                        <Legend
                            wrapperStyle={{ paddingTop: "10px" }}
                            formatter={(value) =>
                                value === "previous" ? `${currentEndYear - 1}` : `${currentEndYear}`
                            }
                        />
                        <Bar
                            dataKey="previous"
                            name="previous"
                            fill="#D1D5DB"
                            radius={[4, 4, 0, 0]}
                            barSize={16}
                        />
                        <Bar
                            dataKey="current"
                            name="current"
                            fill="#10B981"
                            radius={[4, 4, 0, 0]}
                            barSize={16}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Period labels */}
            <div className="flex justify-center gap-8 mt-4 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-gray-300"></div>
                    <span>{previousPeriodLabel}</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-emerald-500"></div>
                    <span>{currentPeriodLabel}</span>
                </div>
            </div>
        </div>
    );
}
