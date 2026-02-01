"use client";

import { useMemo, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Sector } from "recharts";
import { formatCurrency, getCategoryGroupSpending, GROUP_COLORS } from "@/lib/dashboardUtils";
import { Transaction } from "@/lib/types";

interface ExpenseBreakdownProps {
    transactions: Transaction[];
}

const COLORS = ["#10B981", "#3B82F6", "#F59E0B", "#EF4444", "#8B5CF6", "#EC4899", "#6366F1", "#14B8A6"];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name, value }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius + 25; // Push label out further
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    const textAnchor = x > cx ? 'start' : 'end';

    // Only show label if slice is big enough
    if (percent < 0.02) return null;

    return (
        <g>
            <text x={x} y={y} fill="#374151" textAnchor={textAnchor} dominantBaseline="central" fontSize={12} fontWeight={600}>
                {name}
            </text>
            <text x={x} y={y + 14} fill="#6B7280" textAnchor={textAnchor} dominantBaseline="central" fontSize={11}>
                {formatCurrency(value)} ({`${(percent * 100).toFixed(0)}%`})
            </text>
        </g>
    );
};

export function ExpenseBreakdown({ transactions }: ExpenseBreakdownProps) {
    const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);

    const data = useMemo(() => {
        const rawData = getCategoryGroupSpending(transactions);
        return rawData.filter(d => d.total > 0);
    }, [transactions]);

    const onPieEnter = (_: any, index: number) => {
        setActiveIndex(index);
    };

    if (data.length === 0) {
        return (
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full flex flex-col items-center justify-center text-center">
                <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-6 self-start">
                    Spending Breakdown
                </h3>
                <div className="flex-1 flex flex-col items-center justify-center text-gray-400">
                    <p>No expense data available</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full flex flex-col">
            <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-6">
                Spending by Category
            </h3>

            <div className="flex-1 min-h-[300px] w-full relative">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={55}
                            labelLine={true}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="total"
                            nameKey="group"
                            onMouseEnter={onPieEnter}
                            paddingAngle={2}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color || COLORS[index % COLORS.length]} stroke="none" />
                            ))}
                        </Pie>
                        <Tooltip
                            formatter={(value: any) => formatCurrency(value)}
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
