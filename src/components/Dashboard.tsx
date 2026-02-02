"use client";

import { useMemo } from "react";
import { DollarSign, CreditCard, PiggyBank } from "lucide-react";
import { Transaction } from "@/lib/types";
import { getCurrentMonthTotals, getPreviousMonthTotals } from "@/lib/dashboardUtils";

// New Components
import { MetricCard } from "./dashboard/MetricCard";
import { RevenueChart } from "./dashboard/RevenueChart";
import { ExpenseBreakdown } from "./dashboard/ExpenseBreakdown";
import { MonthlyComparisonChart } from "./dashboard/MonthlyComparisonChart";
import { CategoryPies } from "./dashboard/CategoryPies";
import { CashFlowTrend } from "./dashboard/CashFlowTrend";

interface DashboardProps {
    transactions: Transaction[];
}

export function Dashboard({ transactions }: DashboardProps) {
    // 1. Filter out internal transfers from all dashboard calculations
    // This is the base dataset for all charts
    const filteredTransactions = useMemo(() => {
        return transactions.filter(tx => tx.category !== "Account Transfer");
    }, [transactions]);

    // 2. Pre-calculate totals (Memoized)
    const currentTotals = useMemo(() => getCurrentMonthTotals(filteredTransactions), [filteredTransactions]);
    const previousTotals = useMemo(() => getPreviousMonthTotals(filteredTransactions), [filteredTransactions]);

    // 3. Current Date Info
    const { currentMonth } = useMemo(() => {
        const now = new Date();
        return {
            currentMonth: now.toLocaleString('default', { month: 'long', year: 'numeric' })
        };
    }, []);

    // 4. Memoize empty state check to avoid flicker
    const isEmpty = filteredTransactions.length === 0;

    return (
        <div className="h-full overflow-y-auto">
            <div className="max-w-7xl mx-auto space-y-6 pb-8">
                {/* Header */}
                <div className="mb-2">
                    <h1 className="text-2xl font-bold text-foreground">Financial Overview</h1>
                    <p className="text-sm text-muted-foreground">{currentMonth}</p>
                </div>

                {/* Hero Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <MetricCard
                        title="Income"
                        value={currentTotals.income}
                        previousValue={previousTotals.income}
                        type="income"
                        icon={<DollarSign className="w-5 h-5" />}
                        delay={0}
                    />
                    <MetricCard
                        title="Expenses"
                        value={currentTotals.expenses}
                        previousValue={previousTotals.expenses}
                        type="expense"
                        icon={<CreditCard className="w-5 h-5" />}
                        delay={100}
                    />
                    <MetricCard
                        title="Net Balance"
                        value={currentTotals.net}
                        previousValue={previousTotals.net}
                        type="net"
                        icon={<PiggyBank className="w-5 h-5" />}
                        delay={200}
                    />
                </div>

                {/* Charts Row 1: Revenue & Expenses */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-[400px]">
                    <RevenueChart transactions={filteredTransactions} />
                    <ExpenseBreakdown transactions={filteredTransactions} />
                </div>

                {/* Charts Row 2: Pies & Trends */}
                <div className="space-y-4">
                    <CategoryPies transactions={filteredTransactions} />
                    <div className="h-[350px]">
                        <CashFlowTrend transactions={filteredTransactions} />
                    </div>
                </div>

                {/* Income vs Expenses Monthly Chart */}
                <div className="h-[450px]">
                    <MonthlyComparisonChart transactions={filteredTransactions} />
                </div>

                {/* Empty state message */}
                {isEmpty && (
                    <div className="bg-card rounded-2xl p-12 shadow-sm border border-border text-center mt-8">
                        <div className="w-16 h-16 bg-lime-100 dark:bg-lime-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <PiggyBank className="w-8 h-8 text-lime-600 dark:text-lime-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">No transactions yet</h3>
                        <p className="text-muted-foreground max-w-md mx-auto">
                            Import your transactions from the Transactions tab to see your financial overview,
                            spending trends, and category breakdowns.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
