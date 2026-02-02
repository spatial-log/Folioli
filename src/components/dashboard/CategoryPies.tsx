"use client";

import { useMemo } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { formatCurrency, getCategoryGroupSpending, GROUP_COLORS } from "@/lib/dashboardUtils";
import { RogueCard, RogueCardTitle } from "@malovey/rogue-ui";
import { Transaction } from "@/lib/types";

interface CategoryPiesProps {
    transactions: Transaction[];
}

const COLORS = ["#10B981", "#3B82F6", "#F59E0B", "#EF4444", "#8B5CF6", "#EC4899", "#6366F1", "#14B8A6"];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: any) => {
    if (percent < 0.05) return null;
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" fontSize={11} fontWeight="bold">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

export function CategoryPies({ transactions }: CategoryPiesProps) {
    const { incomeData, expenseData } = useMemo(() => {
        const incomeMap = new Map<string, number>();
        const expenseMap = new Map<string, number>();

        transactions.forEach(tx => {
            if (tx.category === "Account Transfer") return;

            const targetMap = tx.amount > 0 ? incomeMap : expenseMap;
            const amount = Math.abs(tx.amount);
            const cat = tx.category || "Uncategorized";

            targetMap.set(cat, (targetMap.get(cat) || 0) + amount);
        });

        const toArray = (map: Map<string, number>) => Array.from(map.entries())
            .map(([name, value]) => ({ name, value }))
            .sort((a, b) => b.value - a.value);

        return {
            incomeData: toArray(incomeMap),
            expenseData: toArray(expenseMap)
        };
    }, [transactions]);

    const ChartSection = ({ title, data }: { title: string, data: any[] }) => (
        <RogueCard className="h-full overflow-hidden">
            <RogueCardTitle className="mb-4">{title}</RogueCardTitle>
            {data.length === 0 ? (
                <div className="h-[260px] flex items-center justify-center text-gray-400 text-sm">
                    No data available
                </div>
            ) : (
                <div className="h-[260px] w-full relative">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />
                                ))}
                            </Pie>
                            <Tooltip formatter={(val: any) => formatCurrency(Number(val) || 0)} />
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="absolute top-0 right-0 max-h-[200px] overflow-y-auto text-xs space-y-1">
                        {data.slice(0, 5).map((d, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full" style={{ background: COLORS[i % COLORS.length] }} />
                                <span className="text-gray-600 truncate max-w-[80px]">{d.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </RogueCard>
    );

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[350px]">
            <ChartSection title="Income Source" data={incomeData} />
            <ChartSection title="Expense Breakdown" data={expenseData} />
        </div>
    );
}
