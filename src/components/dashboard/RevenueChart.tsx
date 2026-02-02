"use client";

import { useMemo } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { formatCurrency, getMonthlyTotals, MonthlyData } from "@/lib/dashboardUtils";
import { Transaction } from "@/lib/types";
import { RogueCard, RogueCardTitle } from "@malovey/rogue-ui";

interface RevenueChartProps {
    transactions: Transaction[];
}

export function RevenueChart({ transactions }: RevenueChartProps) {
    const data = useMemo(() => {
        // Get last 6 months of data
        return getMonthlyTotals(transactions, 6); // returns chronological order
    }, [transactions]);

    // Calculate max value for domain to add some headroom
    const maxValue = Math.max(
        ...data.map(d => Math.max(d.income, d.expenses)),
        1000 // min fallback
    );

    return (
        <RogueCard className="h-full overflow-hidden">
            <RogueCardTitle className="mb-4">
                Income vs Expenses
            </RogueCardTitle>

            <div className="h-[320px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={data}
                        margin={{
                            top: 10,
                            right: 10,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <defs>
                            <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#10B981" stopOpacity={0.2} />
                                <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#EF4444" stopOpacity={0.2} />
                                <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" strokeOpacity={0.5} />
                        <XAxis
                            dataKey="monthLabel"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: 'var(--muted-foreground)', fontSize: 12 }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: 'var(--muted-foreground)', fontSize: 12 }}
                            tickFormatter={(value) => `$${value / 1000}k`}
                            domain={[0, maxValue * 1.1]}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Area
                            type="monotone"
                            dataKey="income"
                            stroke="#10B981"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#colorIncome)"
                            name="Income"
                            animationDuration={1500}
                        />
                        <Area
                            type="monotone"
                            dataKey="expenses"
                            stroke="#EF4444"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#colorExpense)"
                            name="Expenses"
                            animationDuration={1500}
                            animationBegin={300}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </RogueCard>
    );
}

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-card/90 backdrop-blur-md border border-border p-4 rounded-xl shadow-xl">
                <p className="text-sm font-semibold text-foreground mb-2">{label}</p>
                {payload.map((entry: any, index: number) => (
                    <div key={index} className="flex items-center gap-2 mb-1 last:mb-0">
                        <div
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: entry.color }}
                        />
                        <span className="text-xs text-muted-foreground capitalize">{entry.name}:</span>
                        <span className="text-sm font-bold text-foreground">
                            {formatCurrency(entry.value)}
                        </span>
                    </div>
                ))}
            </div>
        );
    }
    return null;
};
