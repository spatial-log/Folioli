"use client";

import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { RogueCard, RogueCardTitle } from "@malovey/rogue-ui";
import { Transaction } from "@/lib/types";

interface MonthlyComparisonChartProps {
    transactions: Transaction[];
}

// Simple date parser - handles common formats
function parseDateSimple(dateStr: string): Date | null {
    if (!dateStr) return null;
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? null : d;
}

// Format currency
function formatMoney(amount: number): string {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);
}

export function MonthlyComparisonChart({ transactions }: MonthlyComparisonChartProps) {
    // Start with current year, allow navigation
    const [year, setYear] = useState(() => new Date().getFullYear());

    // Build chart data directly - no complex memos
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const chartData = months.map((monthLabel, monthIndex) => {
        let income = 0;
        let expenses = 0;

        for (const tx of transactions) {
            const date = parseDateSimple(tx.date);
            if (!date) continue;
            if (date.getFullYear() !== year) continue;
            if (date.getMonth() !== monthIndex) continue;

            // Skip account transfers
            if (tx.category === "Account Transfer") continue;

            if (tx.amount > 0) {
                income += tx.amount;
            } else {
                expenses += Math.abs(tx.amount);
            }
        }

        return {
            month: monthLabel,
            income,
            expenses,
        };
    });

    // Check if there's any data for this year
    const hasData = chartData.some(d => d.income > 0 || d.expenses > 0);

    // Find year range for navigation
    let minYear = year;
    let maxYear = year;
    for (const tx of transactions) {
        const date = parseDateSimple(tx.date);
        if (date) {
            const y = date.getFullYear();
            if (y < minYear) minYear = y;
            if (y > maxYear) maxYear = y;
        }
    }

    return (
        <RogueCard className="h-full overflow-hidden">
            {/* Header with year navigation */}
            <div className="flex items-center justify-between mb-4">
                <RogueCardTitle>
                    Income vs Expenses
                </RogueCardTitle>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setYear(y => y - 1)}
                        disabled={year <= minYear}
                        className="p-1.5 rounded-lg hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    >
                        <ChevronLeft className="w-5 h-5 text-gray-600" />
                    </button>
                    <span className="text-sm font-semibold text-gray-700 min-w-[50px] text-center">
                        {year}
                    </span>
                    <button
                        onClick={() => setYear(y => y + 1)}
                        disabled={year >= maxYear}
                        className="p-1.5 rounded-lg hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    >
                        <ChevronRight className="w-5 h-5 text-gray-600" />
                    </button>
                </div>
            </div>

            {/* Chart or Empty State */}
            {!hasData ? (
                <div className="h-[340px] flex items-center justify-center text-gray-400 text-sm">
                    No data for {year}. Try navigating to a different year.
                </div>
            ) : (
                <div className="h-[340px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" strokeOpacity={0.5} />
                            <XAxis
                                dataKey="month"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: "var(--muted-foreground)", fontSize: 11 }}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: "var(--muted-foreground)", fontSize: 11 }}
                                tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
                                width={45}
                            />
                            <Tooltip
                                cursor={{ fill: "var(--accent-subtle)" }}
                                contentStyle={{
                                    borderRadius: "12px",
                                    border: "none",
                                    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                                }}
                                formatter={(value: any) => formatMoney(value)}
                            />
                            <Legend wrapperStyle={{ paddingTop: "10px" }} />
                            <Bar
                                dataKey="income"
                                name="Income"
                                fill="#10B981"
                                radius={[4, 4, 0, 0]}
                                barSize={14}
                            />
                            <Bar
                                dataKey="expenses"
                                name="Expenses"
                                fill="#EF4444"
                                radius={[4, 4, 0, 0]}
                                barSize={14}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            )}
        </RogueCard>
    );
}
