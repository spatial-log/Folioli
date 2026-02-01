"use client";

import { Minus, TrendingUp, TrendingDown } from "lucide-react";
import { formatCurrency, formatPercentage, getMoMChange } from "@/lib/dashboardUtils";

interface MetricCardProps {
    title: string;
    value: number;
    previousValue: number;
    type: "income" | "expense" | "net";
    icon: React.ReactNode;
    delay?: number;
}

export function MetricCard({ title, value, previousValue, type, icon, delay = 0 }: MetricCardProps) {
    const change = getMoMChange(value, previousValue);
    const isPositive = change >= 0;
    const isNeutral = Math.abs(change) < 0.1;

    // For expenses, "positive" (spending more) is actually bad
    const isGood = type === "expense" ? !isPositive : isPositive;

    const colorClass = isNeutral
        ? "text-gray-500"
        : isGood
            ? "text-emerald-600"
            : "text-red-500";

    const bgGradient = type === "income"
        ? "from-emerald-50 to-emerald-100/50"
        : type === "expense"
            ? "from-red-50 to-rose-100/50"
            : "from-lime-50 to-lime-100/50";

    const iconBg = type === "income"
        ? "bg-emerald-500"
        : type === "expense"
            ? "bg-red-500"
            : "bg-lime-600";

    return (
        <div
            className={`relative overflow-hidden bg-gradient-to-br ${bgGradient} rounded-2xl p-6 shadow-sm border border-white/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] group`}
            style={{ animationDelay: `${delay}ms` }}
        >
            {/* Background decoration */}
            <div className="absolute -right-4 -top-4 w-24 h-24 rounded-full bg-white/30 blur-2xl group-hover:scale-150 transition-transform duration-500" />

            <div className="relative">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">{title}</span>
                    <div className={`p-2 ${iconBg} rounded-xl text-white shadow-lg`}>
                        {icon}
                    </div>
                </div>

                <div className="mb-2">
                    <span className="text-4xl font-bold text-gray-900 tracking-tight">
                        {formatCurrency(Math.abs(value))}
                    </span>
                </div>

                <div className={`flex items-center gap-1.5 ${colorClass}`}>
                    {isNeutral ? (
                        <Minus className="w-4 h-4" />
                    ) : isPositive ? (
                        <TrendingUp className="w-4 h-4" />
                    ) : (
                        <TrendingDown className="w-4 h-4" />
                    )}
                    <span className="text-sm font-semibold">
                        {formatPercentage(change)}
                    </span>
                    <span className="text-xs text-gray-500 ml-1">vs last month</span>
                </div>
            </div>
        </div>
    );
}
