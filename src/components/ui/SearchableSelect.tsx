"use client";

import { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import { Search, ChevronDown } from "lucide-react";

interface SearchableSelectProps {
    options: readonly string[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    emptyMessage?: string;
    className?: string;
}

export function SearchableSelect({
    options,
    value,
    onChange,
    placeholder = "Search...",
    emptyMessage = "No matches found",
    className
}: SearchableSelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [position, setPosition] = useState<"below" | "above">("below");
    const [focusedIndex, setFocusedIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLDivElement>(null);

    // Sort options alphabetically and filter
    const filteredOptions = options
        .slice()
        .sort((a, b) => a.localeCompare(b))
        .filter(opt => opt.toLowerCase().includes(search.toLowerCase()));

    const handleOpen = () => {
        if (!isOpen && containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const spaceBelow = window.innerHeight - rect.bottom;
            setPosition(spaceBelow >= 240 ? "below" : "above");
            setSearch("");
            setIsOpen(true);
            setFocusedIndex(0);
        }
    };

    const handleSelect = (option: string) => {
        onChange(option);
        setIsOpen(false);
        setSearch("");
    };

    const handleClose = () => {
        setIsOpen(false);
        setSearch("");
    };

    // Keyboard navigation
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (!isOpen) {
            if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
                e.preventDefault();
                handleOpen();
            }
            return;
        }

        switch (e.key) {
            case "ArrowDown":
                e.preventDefault();
                setFocusedIndex(prev => (prev + 1) % filteredOptions.length);
                scrollIntoView((focusedIndex + 1) % filteredOptions.length);
                break;
            case "ArrowUp":
                e.preventDefault();
                setFocusedIndex(prev => (prev - 1 + filteredOptions.length) % filteredOptions.length);
                scrollIntoView((focusedIndex - 1 + filteredOptions.length) % filteredOptions.length);
                break;
            case "Enter":
                e.preventDefault();
                if (filteredOptions.length > 0) {
                    handleSelect(filteredOptions[focusedIndex]);
                }
                break;
            case "Escape":
                e.preventDefault();
                handleClose();
                break;
            case "Tab":
                handleClose();
                break;
        }
    };

    const scrollIntoView = (index: number) => {
        if (listRef.current) {
            const el = listRef.current.children[index] as HTMLElement;
            if (el) {
                el.scrollIntoView({ block: "nearest" });
            }
        }
    };

    // Reset focus when search changes
    useEffect(() => {
        setFocusedIndex(0);
    }, [search]);

    return (
        <div ref={containerRef} className="relative w-full" onKeyDown={handleKeyDown}>
            <div
                className={clsx(
                    "w-full flex items-center justify-between cursor-pointer hover:bg-muted transition rounded-lg",
                    isOpen && "bg-lime-50 dark:bg-lime-900/10 ring-2 ring-lime-600"
                )}
                onClick={handleOpen}
                tabIndex={0}
            >
                {isOpen ? (
                    <div className="flex items-center flex-1 px-3 py-2">
                        <Search className="w-4 h-4 text-muted-foreground mr-2 flex-shrink-0" />
                        <input
                            type="text"
                            autoFocus
                            placeholder={placeholder}
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                            className="w-full bg-transparent text-sm focus:outline-none"
                        />
                    </div>
                ) : (
                    <div className="flex items-center justify-between w-full p-3">
                        <span className={clsx(
                            "truncate text-sm",
                            value && value !== "Uncategorized" ? "text-foreground" : "text-muted-foreground",
                            className
                        )}>
                            {value || "Uncategorized"}
                        </span>
                        <ChevronDown className="w-4 h-4 ml-1 flex-shrink-0 text-muted-foreground" />
                    </div>
                )}
            </div>

            {isOpen && (
                <>
                    <div className="fixed inset-0 z-40" onClick={handleClose} />
                    <div
                        ref={listRef}
                        className={clsx(
                            "absolute left-0 right-0 z-50 bg-card border border-border rounded-xl shadow-lg max-h-60 overflow-y-auto p-1",
                            position === "below" ? "top-full mt-1" : "bottom-full mb-1"
                        )}
                    >
                        {filteredOptions.map((option, index) => (
                            <button
                                key={option}
                                type="button"
                                onClick={() => handleSelect(option)}
                                className={clsx(
                                    "w-full px-3 py-2 text-left text-sm transition rounded-lg",
                                    index === focusedIndex ? "bg-lime-100 dark:bg-lime-900/20 text-lime-900 dark:text-lime-300" : "text-foreground hover:bg-lime-50 dark:hover:bg-lime-900/10",
                                    value === option && index !== focusedIndex && "font-medium text-lime-700 dark:text-lime-400"
                                )}
                            >
                                {option}
                            </button>
                        ))}
                        {filteredOptions.length === 0 && (
                            <div className="px-3 py-2 text-sm text-muted-foreground italic">{emptyMessage}</div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}
