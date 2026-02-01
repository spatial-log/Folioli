import { Trash2, AlertTriangle, Moon, Sun, Monitor, User, LogOut, Shield, Database, Bell, CreditCard, Bot, Upload } from "lucide-react";
import { useState, useEffect } from "react";

interface SettingsPageProps {
    onDeleteAllTransactions: () => Promise<void>;
}

export function SettingsPage({ onDeleteAllTransactions }: SettingsPageProps) {
    // State for all settings
    const [currency, setCurrency] = useState("USD");
    const [theme, setTheme] = useState("system");
    const [aiSearch, setAiSearch] = useState(true);
    const [notifications, setNotifications] = useState({
        email: true,
        push: true,
        weekly: false
    });
    const [backupFreq, setBackupFreq] = useState("weekly");

    // Danger Zone State
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    // Load settings from localStorage on mount
    useEffect(() => {
        const storedCurrency = localStorage.getItem("folioli_currency");
        if (storedCurrency) setCurrency(storedCurrency);

        const storedTheme = localStorage.getItem("folioli_theme");
        if (storedTheme) setTheme(storedTheme);

        const storedAi = localStorage.getItem("folioli_ai_search");
        if (storedAi) setAiSearch(storedAi === "true");

        const storedBackup = localStorage.getItem("folioli_backup");
        if (storedBackup) setBackupFreq(storedBackup);

        const storedNotifs = localStorage.getItem("folioli_notifications");
        if (storedNotifs) {
            try {
                setNotifications(JSON.parse(storedNotifs));
            } catch (e) { console.error("Failed to parse notifications", e); }
        }
    }, []);

    // Persist changes
    const updateCurrency = (val: string) => {
        setCurrency(val);
        localStorage.setItem("folioli_currency", val);
    };

    const updateTheme = (val: string) => {
        setTheme(val);
        localStorage.setItem("folioli_theme", val);
        // In a real app, this would also apply the theme class to body/html
    };

    const updateAiSearch = (val: boolean) => {
        setAiSearch(val);
        localStorage.setItem("folioli_ai_search", String(val));
    };

    const updateBackup = (val: string) => {
        setBackupFreq(val);
        localStorage.setItem("folioli_backup", val);
    };

    const toggleNotification = (key: keyof typeof notifications) => {
        const newNotifs = { ...notifications, [key]: !notifications[key] };
        setNotifications(newNotifs);
        localStorage.setItem("folioli_notifications", JSON.stringify(newNotifs));
    };

    const handleDeleteAll = async () => {
        setIsDeleting(true);
        try {
            await onDeleteAllTransactions();
            setShowDeleteConfirm(false);
        } catch (e) {
            console.error("Failed to delete transactions:", e);
            alert("Failed to delete transactions.");
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto pb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Settings</h2>

            <div className="space-y-8">
                {/* General Settings */}
                <section>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 pl-1">General</h3>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 divide-y divide-gray-100 overflow-hidden">

                        {/* Currency */}
                        <div className="p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                                    <CreditCard className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">Default Currency</p>
                                    <p className="text-sm text-gray-500">Select your primary currency for reports</p>
                                </div>
                            </div>
                            <select
                                value={currency}
                                onChange={(e) => updateCurrency(e.target.value)}
                                className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-2.5 min-w-[100px]"
                            >
                                <option value="USD">USD ($)</option>
                                <option value="EUR">EUR (€)</option>
                                <option value="GBP">GBP (£)</option>
                                <option value="JPY">JPY (¥)</option>
                                <option value="CAD">CAD ($)</option>
                            </select>
                        </div>

                        {/* Theme */}
                        <div className="p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                                    {theme === 'light' ? <Sun className="w-5 h-5" /> : theme === 'dark' ? <Moon className="w-5 h-5" /> : <Monitor className="w-5 h-5" />}
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">Appearance</p>
                                    <p className="text-sm text-gray-500">Customize how Folioli looks on your device</p>
                                </div>
                            </div>
                            <div className="flex bg-gray-100 p-1 rounded-lg">
                                <button
                                    onClick={() => updateTheme('light')}
                                    className={`p-2 rounded-md transition-all ${theme === 'light' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
                                    title="Light Mode"
                                >
                                    <Sun className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => updateTheme('dark')}
                                    className={`p-2 rounded-md transition-all ${theme === 'dark' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
                                    title="Dark Mode"
                                >
                                    <Moon className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => updateTheme('system')}
                                    className={`p-2 rounded-md transition-all ${theme === 'system' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
                                    title="System Preference"
                                >
                                    <Monitor className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Notification Settings */}
                        <div className="p-4">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg mt-1">
                                    <Bell className="w-5 h-5" />
                                </div>
                                <div className="flex-1">
                                    <p className="font-medium text-gray-900 mb-1">Notifications</p>
                                    <div className="space-y-3">
                                        <label className="flex items-center justify-between cursor-pointer">
                                            <span className="text-sm text-gray-600">Email Notifications</span>
                                            <input
                                                type="checkbox"
                                                className="toggle toggle-success toggle-sm"
                                                checked={notifications.email}
                                                onChange={() => toggleNotification('email')}
                                            />
                                        </label>
                                        <label className="flex items-center justify-between cursor-pointer">
                                            <span className="text-sm text-gray-600">Push Notifications</span>
                                            <input
                                                type="checkbox"
                                                className="toggle toggle-success toggle-sm"
                                                checked={notifications.push}
                                                onChange={() => toggleNotification('push')}
                                            />
                                        </label>
                                        <label className="flex items-center justify-between cursor-pointer">
                                            <span className="text-sm text-gray-600">Weekly Reports</span>
                                            <input
                                                type="checkbox"
                                                className="toggle toggle-success toggle-sm"
                                                checked={notifications.weekly}
                                                onChange={() => toggleNotification('weekly')}
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* AI Search */}
                        <div className="p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                                    <Bot className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">AI Enhanced Search</p>
                                    <p className="text-sm text-gray-500">Allow AI to index transactions for natural language search</p>
                                </div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" checked={aiSearch} onChange={(e) => updateAiSearch(e.target.checked)} className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                            </label>
                        </div>

                    </div>
                </section>

                {/* Account Settings */}
                <section>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 pl-1">Account</h3>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 divide-y divide-gray-100 overflow-hidden">

                        {/* Profile Picture */}
                        <div className="p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-gray-100 text-gray-600 rounded-full">
                                    <User className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">Profile Picture</p>
                                    <p className="text-sm text-gray-500">Update your profile avatar</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold overflow-hidden border border-gray-300">
                                    tr
                                </div>
                                <button className="text-sm font-medium text-indigo-600 hover:text-indigo-800 flex items-center gap-1">
                                    <Upload className="w-3.5 h-3.5" /> Change
                                </button>
                            </div>
                        </div>

                        {/* Password */}
                        <div className="p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-gray-50 text-gray-600 rounded-lg">
                                    <Shield className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">Password</p>
                                    <p className="text-sm text-gray-500">Manage your password and security</p>
                                </div>
                            </div>
                            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                                Change Password
                            </button>
                        </div>

                        {/* Logout */}
                        <div className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-gray-50 text-gray-600 rounded-lg">
                                    <LogOut className="w-5 h-5" />
                                </div>
                                <p className="font-medium text-gray-900">Log Out</p>
                            </div>
                            <div className="text-gray-400">→</div>
                        </div>

                    </div>
                </section>

                {/* Data & Privacy */}
                <section>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 pl-1">Data & Privacy</h3>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 divide-y divide-gray-100 overflow-hidden">

                        {/* Backup Frequency */}
                        <div className="p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
                                    <Database className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">Backup Frequency</p>
                                    <p className="text-sm text-gray-500">How often should we backup your data?</p>
                                </div>
                            </div>
                            <select
                                value={backupFreq}
                                onChange={(e) => updateBackup(e.target.value)}
                                className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block p-2.5"
                            >
                                <option value="daily">Daily</option>
                                <option value="weekly">Weekly</option>
                                <option value="monthly">Monthly</option>
                                <option value="off">Off</option>
                            </select>
                        </div>

                        {/* Delete Account */}
                        <div className="p-4 flex items-center justify-between opacity-60 hover:opacity-100 transition-opacity">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-red-50 text-red-600 rounded-lg">
                                    <User className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">Delete Account</p>
                                    <p className="text-sm text-gray-500">Permanently delete your account</p>
                                </div>
                            </div>
                            <button className="text-red-600 text-sm font-medium hover:underline">
                                Delete Account
                            </button>
                        </div>
                    </div>
                </section>

                {/* Danger Zone */}
                <section>
                    <h3 className="text-sm font-semibold text-red-600 uppercase tracking-wide mb-4 pl-1 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4" />
                        Danger Zone
                    </h3>
                    <div className="bg-red-50 border border-red-200 rounded-2xl overflow-hidden p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <h4 className="text-sm font-semibold text-red-900">Delete All Transactions</h4>
                                <p className="text-sm text-red-700 mt-1 opacity-80">
                                    Permanently remove all transaction data. This cannot be undone.
                                </p>
                            </div>
                            <button
                                onClick={() => setShowDeleteConfirm(true)}
                                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition shadow-sm"
                            >
                                <Trash2 className="w-4 h-4" />
                                Delete All
                            </button>
                        </div>
                    </div>
                </section>

                <div className="text-center text-xs text-gray-400 pt-8">
                    Folioli v1.0.2 • Build 2024.1
                </div>
            </div>

            {/* Delete Confirmation Modal */}
            {showDeleteConfirm && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 animate-in fade-in duration-200" onClick={() => setShowDeleteConfirm(false)}>
                    <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-md mx-4 transform transition-all scale-100" onClick={e => e.stopPropagation()}>
                        <div className="flex items-center gap-4 mb-5">
                            <div className="p-3 bg-red-100 rounded-full flex-shrink-0">
                                <AlertTriangle className="w-6 h-6 text-red-600" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 leading-tight">Delete All Transactions?</h3>
                                <p className="text-sm text-gray-500 mt-1">This action is permanent.</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                            You are about to permanently delete <strong>all transaction data</strong> from your local database.
                            This action cannot be undone and no backups will be available unless you've exported your data.
                        </p>
                        <div className="flex gap-3 justify-end">
                            <button
                                onClick={() => setShowDeleteConfirm(false)}
                                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-gray-200 transition-all"
                                disabled={isDeleting}
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleDeleteAll}
                                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:ring-red-100 transition-all disabled:opacity-70 flex items-center gap-2"
                                disabled={isDeleting}
                            >
                                {isDeleting ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Deleting...
                                    </>
                                ) : (
                                    "Yes, Delete Everything"
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
