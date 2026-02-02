/**
 * Categorization Service
 * 
 * Provides intelligent auto-categorization with learning capability.
 * Priority order:
 * 1. Learned mappings (from confirmed transactions)
 * 2. Amount-aware rules (ATM deposits vs withdrawals)
 * 3. Keyword matching (from JSON config - optimized with O(1) lookup)
 * 4. Default to "Uncategorized"
 */

import { Category } from "./categories";
import categoryKeywords from "../config/categoryKeywords.json";

// Type for learned mappings: normalized name -> category
export type LearnedMappings = Map<string, Category>;

// Pre-compute keyword lookup map for O(1) access
// Map<Keyword, Category>
const KEYWORD_MAP = new Map<string, Category>();

// Initialize the lookup map once
(function initializeKeywordMap() {
    const keywords = categoryKeywords as Record<string, string[]>;
    for (const [category, keywordList] of Object.entries(keywords)) {
        for (const keyword of keywordList) {
            // Store lowercased keyword for case-insensitive matching
            // We use the keyword as the key, pointing to its Category
            KEYWORD_MAP.set(keyword.toLowerCase(), category as Category);
        }
    }
})();

/**
 * Common prefixes to strip during normalization
 * Sorted by length (descending) to match longest prefixes first
 */
const PREFIXES = [
    "interac - purchase - ",
    "interac purchase ",
    "pos - ",
    "debit - ",
    "credit - ",
    "eft - ",
];

/**
 * Normalize a transaction name for consistent matching
 * - Lowercase
 * - Trim whitespace
 * - Remove extra spaces
 * - Remove common prefixes like "Interac - Purchase -"
 */
export function normalizeTransactionName(name: string): string {
    if (!name) return "";

    let normalized = name.toLowerCase().trim();

    // Remove common transaction prefixes
    for (const prefix of PREFIXES) {
        if (normalized.startsWith(prefix)) {
            normalized = normalized.slice(prefix.length);
            // Once a prefix is removed, we stop (assuming only one prefix exists)
            // If multiple prefixes can exist, we'd need a while loop, but usually it's just one.
            break;
        }
    }

    // Collapse multiple spaces - simplified regex
    // Only do this if we actually suspect multiple spaces to save regex overhead on simple strings?
    // For now, safety first.
    return normalized.replace(/\s+/g, " ").trim();
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
    // Note: normalizeTransactionName already lowercases
    const lowercaseName = normalizedName;
    const isIncome = amount !== undefined && amount > 0;

    // 1. Check learned mappings first (highest priority)
    // O(1) Lookup
    if (learnedMappings && learnedMappings.has(normalizedName)) {
        return learnedMappings.get(normalizedName)!;
    }

    // 2. Amount-aware rules for ATM/ABM transactions
    if (lowercaseName.includes("atm") || lowercaseName.includes("abm") ||
        (lowercaseName.includes("cash") && lowercaseName.includes("deposit"))) {
        return isIncome ? "Income" : "ATM Withdrawal";
    }

    // 3. Keyword matching from JSON config - Optimized
    // Instead of iterating through all categories and keywords (O(Categories * Keywords)),
    // we iterate through the words in the transaction name (O(Words)).
    // This is significantly faster for long keyword lists.

    // Split name into words to check against our keyword map
    // We also check the full string and pairs of words to handle multi-word keywords like "whole foods"

    // Quick check: Does the string contain any of our keywords?
    // Since we can't easily tokenize "whole foods" perfectly, we iterate our map entries? 
    // Wait, iterating map entries is O(Keywords), which is what we wanted to avoid.
    // Better approach:
    // Iterate the KEYWORD_MAP keys? No, that's still O(N).

    // Optimization: Check if any substring of 'lowercaseName' exists in KEYWORD_MAP.
    // But 'lowercaseName' is the transaction description, e.g. "WALMART STORE #123".
    // We want to find if "walmart" is in it.

    // If we have many keywords, Aho-Corasick is ideal, but for ~500 keywords, 
    // iterating strictly the words in the transaction is fastest IF keywords are mostly single words.
    // If we have multi-word keywords ("whole foods"), we need to be careful.

    // Let's stick to the previous iterate-keywords approach BUT optimized:
    // We can't easily do O(1) reverse lookup unless we tokenizer the input perfectly.
    // However, we can optimize the iteration.
    // Actually, for 500 keywords, a simple loop is fast, but we can do better.

    // Alternative: 
    // 1. Tokenize the transaction string: "whole", "foods", "market"
    // 2. Check "whole" -> in map? No.
    // 3. Check "foods" -> in map? No.
    // 4. Check "whole foods" -> in map? Yes -> Groceries.

    // This requires a map that handles phrases.
    // Let's try matching words and bigrams.

    const words = lowercaseName.split(' ');

    // Check single words
    for (const word of words) {
        if (KEYWORD_MAP.has(word)) {
            return KEYWORD_MAP.get(word)!;
        }
    }

    // Check bigrams (two adjacent words) for things like "whole foods"
    for (let i = 0; i < words.length - 1; i++) {
        const bigram = words[i] + ' ' + words[i + 1];
        if (KEYWORD_MAP.has(bigram)) {
            return KEYWORD_MAP.get(bigram)!;
        }
    }

    // Fallback: If we missed something (like "7-eleven" if it wasn't split correctly),
    // we might still need a robust check.
    // But for performance, token-based matching is vastly superior to 500x .includes()
    // The only risk is if accurate tokenization is hard (e.g. "7eleven" vs "7-eleven").
    // Our map has "7-eleven". If input is "7-eleven store", split gives "7-eleven". usage matches.

    // What if keyword is a substring of a word? e.g. "uber" in "uber*trip".
    // "uber*trip".split(' ') -> ["uber*trip"] -> no match.
    // The previous logic used `string.includes(keyword)`.
    // To maintain that robustness with speed, we can assume significant keywords are usually
    // delimited by spaces or special chars.

    // Let's replace special chars with spaces first for better tokenization
    const spacedName = lowercaseName.replace(/[^a-z0-9]/g, ' ');
    const tokens = spacedName.split(/\s+/).filter(t => t.length > 1); // Ignore single chars

    for (const token of tokens) {
        if (KEYWORD_MAP.has(token)) {
            return KEYWORD_MAP.get(token)!;
        }
    }

    // Check bigrams on cleaned tokens
    for (let i = 0; i < tokens.length - 1; i++) {
        const bigram = tokens[i] + ' ' + tokens[i + 1];
        if (KEYWORD_MAP.has(bigram)) {
            return KEYWORD_MAP.get(bigram)!;
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
