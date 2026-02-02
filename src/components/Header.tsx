import { Search, Settings, User } from "lucide-react";
import { Tab } from "@/lib/types";

interface HeaderProps {
    activeTab: Tab;
    onTabChange: (tab: Tab) => void;
}

export function Header({ activeTab, onTabChange }: HeaderProps) {
    return (
        <header className="flex items-center justify-between px-6 py-4 bg-background border-b border-border">
            {/* Logo */}
            <div className="flex items-center gap-8">
                <h1 className="text-2xl font-bold text-foreground tracking-tight">Folioli</h1>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    <button
                        onClick={() => onTabChange("dashboard")}
                        className={`text-sm font-medium transition ${activeTab === "dashboard"
                            ? "text-foreground font-semibold"
                            : "text-muted-foreground hover:text-foreground"
                            }`}
                    >
                        Dashboard
                    </button>
                    <button
                        onClick={() => onTabChange("table")}
                        className={`text-sm font-medium transition ${activeTab === "table"
                            ? "text-foreground font-semibold"
                            : "text-muted-foreground hover:text-foreground"
                            }`}
                    >
                        Transactions
                    </button>
                </nav>
            </div>

            {/* Right Section: Search & Actions */}
            <div className="flex items-center gap-4">
                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-white" />
                    </div>
                    <input
                        type="text"
                        placeholder=""
                        className="block w-64 pl-10 pr-3 py-1.5 bg-[#7CB342] text-white placeholder-white/70 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-[#7CB342]/50 transition-all hover:bg-[#689F38]"
                    />
                </div>

                <div className="flex items-center gap-3 pl-4 border-l border-border">
                    <button
                        onClick={() => onTabChange("settings")}
                        className={`p-2 rounded-full transition-colors ${activeTab === "settings"
                            ? "bg-muted text-foreground"
                            : "text-muted-foreground hover:bg-muted"
                            }`}
                    >
                        <Settings className="h-5 w-5" />
                    </button>
                    <button className="h-8 w-8 bg-muted rounded-full overflow-hidden hover:ring-2 hover:ring-ring transition-all flex items-center justify-center">
                        <User className="h-5 w-5 text-muted-foreground" />
                    </button>
                </div>
            </div>
        </header>
    );
}
