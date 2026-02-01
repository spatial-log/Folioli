// Dashboard utility functions for financial analytics

import { Transaction } from "./types";
import { Category } from "./categories";

// Category groupings for cleaner analytics
export const CATEGORY_GROUPS: Record<string, Category[]> = {
    "Food & Dining": ["Groceries", "Dining", "Takeout", "Cafe", "Snacks"],
    "Bills & Utilities": ["Utilities", "Phone & Internet", "Insurance", "Subscriptions", "Bank Fee", "ATM Withdrawal"],
    "Rent & Housing": ["Rent"],
    "Investing": ["Investments"],
    "Hobbies & Home": ["Hobbies", "Home & Garden", "Clothing", "Electronics", "Books & Records", "Entertainment"],
    "Transportation": ["Fuel", "Car Payment", "Car Repairs", "Car Wash", "Parking", "Public Transit", "Rideshare"],
    "Debt": ["Loan Payment"],
    "Other": ["Education", "Gifts", "Charity", "Other", "Uncategorized", "Healthcare", "Pharmacy", "Fitness", "Personal Care", "Travel", "Hotels", "Flights"],
};

/**
 * Parse a date string robustly (handles various formats)
 */
export function parseDate(dateStr: string): Date | null {
    if (!dateStr) return null;

    // Try direct parsing first
    let date = new Date(dateStr);
    if (!isNaN(date.getTime())) return date;

    // Try parsing common formats like "MM/DD/YYYY" or "DD/MM/YYYY"
    const parts = dateStr.split(/[\/\-\.]/);
    if (parts.length === 3) {
        // Assume MM/DD/YYYY or YYYY-MM-DD
        const [a, b, c] = parts.map(p => parseInt(p, 10));
        if (a > 1000) {
            // YYYY-MM-DD
            date = new Date(a, b - 1, c);
        } else if (c > 1000) {
            // MM/DD/YYYY or DD/MM/YYYY
            date = new Date(c, a - 1, b);
        }
        if (!isNaN(date.getTime())) return date;
    }

    return null;
}

/**
 * Get category group for a specific category
 */
export function getCategoryGroup(category: string | undefined): string {
    if (!category) return "Other";

    for (const [group, categories] of Object.entries(CATEGORY_GROUPS)) {
        if (categories.includes(category as Category)) {
            return group;
        }
    }
    return "Other";
}

/**
 * Get year-over-year comparison data (Latest Year vs Prior Year)
 */
export function getYoYComparison(transactions: Transaction[]): {
    currentYear: string;
    previousYear: string;
    currentTotal: number;
    previousTotal: number;
    change: number;
    categoryComparison: Array<{
        group: string;
        current: number;
        previous: number;
        color: string;
    }>;
} {
    // Find the latest transaction year to anchor the comparison
    const dates = transactions
        .map(t => parseDate(t.date))
        .filter((d): d is Date => d !== null);

    let currentYearNum = new Date().getFullYear();

    if (dates.length > 0) {
        const maxDate = new Date(Math.max(...dates.map(d => d.getTime())));
        currentYearNum = maxDate.getFullYear();
    }

    const previousYearNum = currentYearNum - 1;

    const currentYearLabel = `${currentYearNum}`;
    const previousYearLabel = `${previousYearNum}`;

    const currentTx = transactions.filter(tx => {
        const d = parseDate(tx.date);
        return d && d.getFullYear() === currentYearNum && tx.amount < 0;
    });

    const previousTx = transactions.filter(tx => {
        const d = parseDate(tx.date);
        return d && d.getFullYear() === previousYearNum && tx.amount < 0;
    });

    const currentTotal = currentTx.reduce((sum, tx) => sum + Math.abs(tx.amount), 0);
    const previousTotal = previousTx.reduce((sum, tx) => sum + Math.abs(tx.amount), 0);

    // Group by category
    const currentByGroup: Record<string, number> = {};
    const previousByGroup: Record<string, number> = {};

    for (const tx of currentTx) {
        const group = getCategoryGroup(tx.category);
        currentByGroup[group] = (currentByGroup[group] || 0) + Math.abs(tx.amount);
    }

    for (const tx of previousTx) {
        const group = getCategoryGroup(tx.category);
        previousByGroup[group] = (previousByGroup[group] || 0) + Math.abs(tx.amount);
    }

    // Combine and sort
    const allGroups = new Set([...Object.keys(currentByGroup), ...Object.keys(previousByGroup)]);

    const categoryComparison = Array.from(allGroups).map(group => ({
        group,
        current: currentByGroup[group] || 0,
        previous: previousByGroup[group] || 0,
        color: GROUP_COLORS[group] || "#94A3B8"
    })).sort((a, b) => b.current - a.current);

    // Calculate percentage change
    const change = previousTotal > 0
        ? ((currentTotal - previousTotal) / previousTotal)
        : currentTotal > 0 ? 1 : 0;

    return {
        currentYear: currentYearLabel,
        previousYear: previousYearLabel,
        currentTotal,
        previousTotal,
        change,
        categoryComparison
    };
}

// Group colors for charts
export const GROUP_COLORS: Record<string, string> = {
    "Food & Dining": "#F59E0B",      // amber
    "Transportation": "#3B82F6",      // blue
    "Housing": "#8B5CF6",             // violet
    "Shopping": "#EC4899",            // pink
    "Health & Wellness": "#10B981",   // emerald
    "Entertainment": "#F97316",       // orange
    "Travel": "#06B6D4",              // cyan
    "Financial": "#6B7280",           // gray
    "Other": "#94A3B8",               // slate
};

export interface MonthlyData {
    month: string;        // YYYY-MM format
    monthLabel: string;   // "Jan", "Feb", etc.
    income: number;
    expenses: number;
    net: number;
}

export interface CategoryGroupData {
    group: string;
    total: number;
    color: string;
    percentage: number;
}

/**
 * Get transactions for a specific month
 */
export function getTransactionsForMonth(transactions: Transaction[], year: number, month: number): Transaction[] {
    return transactions.filter(tx => {
        const date = parseDate(tx.date);
        if (!date) return false;
        return date.getFullYear() === year && date.getMonth() === month;
    });
}

/**
 * Get all unique months from transactions (sorted chronologically)
 */
export function getUniqueMonths(transactions: Transaction[]): Array<{ year: number; month: number; label: string }> {
    const monthsSet = new Map<string, { year: number; month: number; label: string }>();

    for (const tx of transactions) {
        const date = parseDate(tx.date);
        if (!date) continue;

        const year = date.getFullYear();
        const month = date.getMonth();
        const key = `${year}-${month}`;

        if (!monthsSet.has(key)) {
            const label = date.toLocaleString('default', { month: 'short' });
            monthsSet.set(key, { year, month, label });
        }
    }

    return Array.from(monthsSet.values()).sort((a, b) => {
        if (a.year !== b.year) return a.year - b.year;
        return a.month - b.month;
    });
}

/**
 * Calculate monthly totals for income, expenses, and net
 */
export function getMonthlyTotals(transactions: Transaction[], monthsBack: number = 6): MonthlyData[] {
    const result: MonthlyData[] = [];
    const now = new Date();

    for (let i = monthsBack - 1; i >= 0; i--) {
        const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
        const year = date.getFullYear();
        const month = date.getMonth();
        const monthLabel = date.toLocaleString('default', { month: 'short' });
        const monthKey = `${year}-${String(month + 1).padStart(2, '0')}`;

        const monthTransactions = getTransactionsForMonth(transactions, year, month);

        const income = monthTransactions
            .filter(tx => tx.amount > 0)
            .reduce((sum, tx) => sum + tx.amount, 0);

        const expenses = monthTransactions
            .filter(tx => tx.amount < 0)
            .reduce((sum, tx) => sum + Math.abs(tx.amount), 0);

        result.push({
            month: monthKey,
            monthLabel,
            income,
            expenses,
            net: income - expenses,
        });
    }

    return result;
}

/**
 * Get current month's totals
 */
export function getCurrentMonthTotals(transactions: Transaction[]): { income: number; expenses: number; net: number } {
    const now = new Date();
    const monthTransactions = getTransactionsForMonth(transactions, now.getFullYear(), now.getMonth());

    const income = monthTransactions
        .filter(tx => tx.amount > 0)
        .reduce((sum, tx) => sum + tx.amount, 0);

    const expenses = monthTransactions
        .filter(tx => tx.amount < 0)
        .reduce((sum, tx) => sum + Math.abs(tx.amount), 0);

    return { income, expenses, net: income - expenses };
}

/**
 * Get previous month's totals for comparison
 */
export function getPreviousMonthTotals(transactions: Transaction[]): { income: number; expenses: number; net: number } {
    const now = new Date();
    const prevMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const monthTransactions = getTransactionsForMonth(transactions, prevMonth.getFullYear(), prevMonth.getMonth());

    const income = monthTransactions
        .filter(tx => tx.amount > 0)
        .reduce((sum, tx) => sum + tx.amount, 0);

    const expenses = monthTransactions
        .filter(tx => tx.amount < 0)
        .reduce((sum, tx) => sum + Math.abs(tx.amount), 0);

    return { income, expenses, net: income - expenses };
}

/**
 * Calculate month-over-month percentage change
 */
export function getMoMChange(current: number, previous: number): number {
    if (previous === 0) return current > 0 ? 100 : 0;
    return ((current - previous) / previous) * 100;
}

/**
 * Get spending grouped by category groups for current month
 */
export function getCategoryGroupSpending(transactions: Transaction[], year?: number, month?: number): CategoryGroupData[] {
    const now = new Date();
    const targetYear = year ?? now.getFullYear();
    const targetMonth = month ?? now.getMonth();

    const monthTransactions = getTransactionsForMonth(transactions, targetYear, targetMonth)
        .filter(tx => tx.amount < 0); // Only expenses

    const groupTotals: Record<string, number> = {};

    for (const tx of monthTransactions) {
        const group = getCategoryGroup(tx.category);
        groupTotals[group] = (groupTotals[group] || 0) + Math.abs(tx.amount);
    }

    const totalExpenses = Object.values(groupTotals).reduce((sum, val) => sum + val, 0);

    const result: CategoryGroupData[] = Object.entries(groupTotals)
        .map(([group, total]) => ({
            group,
            total,
            color: GROUP_COLORS[group] || "#94A3B8",
            percentage: totalExpenses > 0 ? (total / totalExpenses) * 100 : 0,
        }))
        .sort((a, b) => b.total - a.total);

    return result;
}



/**
 * Format currency for display
 */
export function formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);
}

/**
 * Format percentage for display
 */
export function formatPercentage(value: number): string {
    const sign = value >= 0 ? '+' : '';
    return `${sign}${value.toFixed(1)}%`;
}
