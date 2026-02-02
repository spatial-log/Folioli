"use client";

import { useMemo } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { formatCurrency } from "@/lib/dashboardUtils";
import { RogueCard, RogueCardTitle } from "@malovey/rogue-ui";
import { Transaction } from "@/lib/types";

interface CashFlowTrendProps {
    transactions: Transaction[];
}

export function CashFlowTrend({ transactions }: CashFlowTrendProps) {
    const data = useMemo(() => {
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth();

        // Get days in current month
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        // Initialize daily buckets
        const dailyData = Array.from({ length: daysInMonth }, (_, i) => ({
            day: i + 1,
            income: 0,
            expenses: 0,
            cumulativeIncome: 0,
            cumulativeExpenses: 0
        }));

        // Fill buckets
        transactions.forEach(tx => {
            const date = new Date(tx.date);
            if (date.getFullYear() === currentYear && date.getMonth() === currentMonth && tx.category !== "Account Transfer") {
                const dayIndex = date.getDate() - 1;
                if (dayIndex >= 0 && dayIndex < daysInMonth) {
                    if (tx.amount > 0) {
                        dailyData[dayIndex].income += tx.amount;
                    } else {
                        dailyData[dayIndex].expenses += Math.abs(tx.amount);
                    }
                }
            }
        });

        // Calculate cumulatives
        let runIncome = 0;
        let runExpenses = 0;
        return dailyData.map(d => {
            runIncome += d.income;
            runExpenses += d.expenses;
            return {
                ...d,
                cumulativeIncome: runIncome,
                cumulativeExpenses: runExpenses
            };
        });

    }, [transactions]);

    return (
        <RogueCard className="h-full overflow-hidden">
            <RogueCardTitle className="mb-4">Monthly Cash Flow Trend</RogueCardTitle>
            <div className="h-[280px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                        <XAxis
                            dataKey="day"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "var(--muted-foreground)", fontSize: 11 }}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "var(--muted-foreground)", fontSize: 11 }}
                            tickFormatter={(v) => `$${v}`}
                        />
                        <Tooltip
                            formatter={(val: any) => formatCurrency(Number(val) || 0)}
                            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        />
                        <Line
                            type="monotone"
                            dataKey="cumulativeIncome"
                            name="Cumulative Income"
                            stroke="#10B981"
                            strokeWidth={2}
                            dot={false}
                        />
                        <Line
                            type="monotone"
                            dataKey="cumulativeExpenses"
                            name="Cumulative Expenses"
                            stroke="#EF4444"
                            strokeWidth={2}
                            dot={false}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </RogueCard>
    );
}
