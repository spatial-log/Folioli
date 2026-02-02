"use client";

import { Minus, TrendingUp, TrendingDown } from "lucide-react";
import { formatCurrency, formatPercentage, getMoMChange } from "@/lib/dashboardUtils";
import { RogueCard, RogueBadge } from "@malovey/rogue-ui";

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

    const trendColor = isNeutral
        ? "default"
        : isGood
            ? "success"
            : "error";

    const borderColor = type === "income"
        ? "border-emerald-200 dark:border-emerald-800"
        : type === "expense"
            ? "border-red-200 dark:border-red-800"
            : "border-lime-200 dark:border-lime-800";

    return (
        <RogueCard
            className={`transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${borderColor}`}
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">{title}</span>
                    <div className="text-muted-foreground/60">
                        {icon}
                    </div>
                </div>

                <div className="mb-4">
                    <span className="text-4xl font-bold text-foreground tracking-tight">
                        {formatCurrency(Math.abs(value))}
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    <RogueBadge variant={trendColor} className="flex items-center gap-1">
                        {isNeutral ? (
                            <Minus className="w-3 h-3" />
                        ) : isPositive ? (
                            <TrendingUp className="w-3 h-3" />
                        ) : (
                            <TrendingDown className="w-3 h-3" />
                        )}
                        <span>{formatPercentage(change)}</span>
                    </RogueBadge>
                    <span className="text-xs text-muted-foreground">vs last month</span>
                </div>
            </div>
        </RogueCard>
    );
}
