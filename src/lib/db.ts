import Database from "@tauri-apps/plugin-sql";

let dbInstance: Database | null = null;

const SCHEMA = `
    CREATE TABLE IF NOT EXISTS transactions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        date TEXT NOT NULL,
        transaction_code TEXT,
        name TEXT NOT NULL,
        memo TEXT,
        category TEXT,
        amount REAL NOT NULL,
        status TEXT DEFAULT 'pending',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
    
    CREATE TABLE IF NOT EXISTS category_mappings (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        normalized_name TEXT UNIQUE NOT NULL,
        category TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
`;

/**
 * Initialize the database connection and schema.
 * Returns the database instance.
 */
export async function initDB(): Promise<Database | null> {
    // Check if running in Tauri environment
    if (typeof window === "undefined" || !("__TAURI_INTERNALS__" in window)) {
        console.warn("⚠️ initDB called outside of Tauri environment");
        return null;
    }

    if (dbInstance) {
        return dbInstance;
    }

    try {
        dbInstance = await Database.load("sqlite:folioli.db");
        console.log("✅ Database connected: folioli.db");

        // Create tables one by one to ensure execution
        await dbInstance.execute(`
            CREATE TABLE IF NOT EXISTS transactions (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                date TEXT NOT NULL,
                transaction_code TEXT,
                name TEXT NOT NULL,
                memo TEXT,
                category TEXT,
                amount REAL NOT NULL,
                status TEXT DEFAULT 'pending',
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `);

        await dbInstance.execute(`
            CREATE TABLE IF NOT EXISTS category_mappings (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                normalized_name TEXT UNIQUE NOT NULL,
                category TEXT NOT NULL,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `);

        // Verify schema has required columns
        try {
            await dbInstance.execute("SELECT name FROM transactions LIMIT 1");
        } catch {
            console.log("⚠️ Schema mismatch detected. Recreating transactions table...");
            await dbInstance.execute("DROP TABLE IF EXISTS transactions");
            await dbInstance.execute(`
                CREATE TABLE IF NOT EXISTS transactions (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    date TEXT NOT NULL,
                    transaction_code TEXT,
                    name TEXT NOT NULL,
                    memo TEXT,
                    category TEXT,
                    amount REAL NOT NULL,
                    status TEXT DEFAULT 'pending',
                    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                )
            `);
        }

        console.log("✅ Schema initialized: 'transactions' table ready");
        return dbInstance;
    } catch (error) {
        console.error("❌ Failed to initialize database:", error);
        return null;
    }
}

/**
 * Get the existing database instance.
 * Throws an error if not initialized.
 */
export function getDB(): Database {
    if (!dbInstance) {
        throw new Error("Database not initialized. Call initDB() first.");
    }
    return dbInstance;
}
