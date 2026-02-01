/**
 * Categorization Service
 * 
 * Provides intelligent auto-categorization with learning capability.
 * Priority order:
 * 1. Learned mappings (from confirmed transactions)
 * 2. Amount-aware rules (ATM deposits vs withdrawals)
 * 3. Keyword matching (from JSON config)
 * 4. Default to "Uncategorized"
 */

import { Category } from "./categories";
import categoryKeywords from "../config/categoryKeywords.json";

// Type for learned mappings: normalized name -> category
export type LearnedMappings = Map<string, Category>;

/**
 * Normalize a transaction name for consistent matching
 * - Lowercase
 * - Trim whitespace
 * - Remove extra spaces
 * - Remove common prefixes like "Interac - Purchase -"
 */
export function normalizeTransactionName(name: string): string {
    let normalized = name.toLowerCase().trim();

    // Remove common transaction prefixes
    const prefixes = [
        "interac - purchase - ",
        "interac purchase ",
        "pos - ",
        "debit - ",
        "credit - ",
        "eft - ",
    ];

    for (const prefix of prefixes) {
        if (normalized.startsWith(prefix)) {
            normalized = normalized.slice(prefix.length);
            break;
        }
    }

    // Collapse multiple spaces
    normalized = normalized.replace(/\s+/g, " ").trim();

    return normalized;
}

/**
 * Load learned mappings from the database
 * This persists across transaction deletions
 */
export async function loadMappingsFromDB(db: any): Promise<LearnedMappings> {
    const mappings = new Map<string, Category>();

    // Return empty mappings if DB not available
    if (!db) return mappings;

    try {
        const rows = await db.select(
            "SELECT normalized_name, category FROM category_mappings"
        ) as Array<{ normalized_name: string; category: string }>;

        for (const row of rows) {
            mappings.set(row.normalized_name, row.category as Category);
        }

        console.log(`✅ Loaded ${mappings.size} learned category mappings from database`);
    } catch (error) {
        console.error("Failed to load category mappings:", error);
    }

    return mappings;
}

/**
 * Save a category mapping to the database
 * Uses UPSERT to update if exists, insert if not
 */
export async function saveMappingToDB(
    db: any,
    transactionName: string,
    category: Category
): Promise<void> {
    const normalized = normalizeTransactionName(transactionName);

    // Skip if DB not available or uncategorized
    if (!db) return;
    if (category === "Uncategorized") return;

    try {
        await db.execute(
            `INSERT INTO category_mappings (normalized_name, category, updated_at)
             VALUES ($1, $2, CURRENT_TIMESTAMP)
             ON CONFLICT(normalized_name) DO UPDATE SET
                category = $2,
                updated_at = CURRENT_TIMESTAMP`,
            [normalized, category]
        );
        console.log(`💾 Saved mapping: "${normalized}" → ${category}`);
    } catch (error) {
        console.error("Failed to save category mapping:", error);
    }
}

/**
 * Build learned mappings by merging DB mappings with confirmed transactions
 * DB mappings take priority (they persist across deletions)
 */
export function buildLearnedMappings(
    transactions: Array<{ name: string; category?: string; status: string | "pending" | "confirmed" }>,
    dbMappings?: LearnedMappings
): LearnedMappings {
    // Start with DB mappings if provided
    const mappings = new Map<string, Category>(dbMappings || []);

    // Add mappings from confirmed transactions (DB mappings take priority)
    for (const tx of transactions) {
        if (tx.status === "confirmed" && tx.category && tx.category !== "Uncategorized") {
            const normalized = normalizeTransactionName(tx.name);
            if (!mappings.has(normalized)) {
                mappings.set(normalized, tx.category as Category);
            }
        }
    }

    return mappings;
}

/**
 * Categorize a transaction using the smart algorithm
 * 
 * @param name - Transaction description/name
 * @param amount - Transaction amount (positive = income, negative = expense)
 * @param learnedMappings - Pre-built mappings from confirmed transactions
 * @returns The best matching category
 */
export function categorize(
    name: string,
    amount?: number,
    learnedMappings?: LearnedMappings
): Category {
    const normalizedName = normalizeTransactionName(name);
    const lowercaseName = name.toLowerCase();
    const isIncome = amount !== undefined && amount > 0;

    // 1. Check learned mappings first (highest priority)
    if (learnedMappings && learnedMappings.has(normalizedName)) {
        return learnedMappings.get(normalizedName)!;
    }

    // 2. Amount-aware rules for ATM/ABM transactions
    if (lowercaseName.includes("atm") || lowercaseName.includes("abm") ||
        (lowercaseName.includes("cash") && lowercaseName.includes("deposit"))) {
        return isIncome ? "Income" : "ATM Withdrawal";
    }

    // 3. Keyword matching from JSON config
    const keywords = categoryKeywords as Record<string, string[]>;
    for (const [category, keywordList] of Object.entries(keywords)) {
        for (const keyword of keywordList) {
            if (lowercaseName.includes(keyword.toLowerCase())) {
                return category as Category;
            }
        }
    }

    // 4. Default to Uncategorized
    return "Uncategorized";
}

/**
 * Legacy function for backward compatibility
 * Wraps the new categorize function
 */
export function autoCategorize(name: string, amount?: number): Category {
    return categorize(name, amount);
}
