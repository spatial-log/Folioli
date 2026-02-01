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
    const containerRef = useRef<HTMLDivElement>(null);

    const filteredOptions = options.filter(opt =>
        opt.toLowerCase().includes(search.toLowerCase())
    );

    const handleOpen = () => {
        if (!isOpen && containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const spaceBelow = window.innerHeight - rect.bottom;
            setPosition(spaceBelow >= 240 ? "below" : "above");
            setSearch("");
            setIsOpen(true);
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

    return (
        <div ref={containerRef} className="relative w-full">
            <div
                className={clsx(
                    "w-full flex items-center justify-between cursor-pointer hover:bg-gray-50 transition rounded-lg",
                    isOpen && "bg-lime-50 ring-2 ring-lime-600"
                )}
                onClick={handleOpen}
            >
                {isOpen ? (
                    <div className="flex items-center flex-1 px-3 py-2">
                        <Search className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
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
                            value && value !== "Uncategorized" ? "text-gray-900" : "text-gray-400",
                            className
                        )}>
                            {value || "Uncategorized"}
                        </span>
                        <ChevronDown className="w-4 h-4 ml-1 flex-shrink-0 text-gray-400" />
                    </div>
                )}
            </div>

            {isOpen && (
                <>
                    <div className="fixed inset-0 z-40" onClick={handleClose} />
                    <div className={clsx(
                        "absolute left-0 right-0 z-50 bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-y-auto p-1",
                        position === "below" ? "top-full mt-1" : "bottom-full mb-1"
                    )}>
                        {filteredOptions.map(option => (
                            <button
                                key={option}
                                type="button"
                                onClick={() => handleSelect(option)}
                                className={clsx(
                                    "w-full px-3 py-2 text-left text-sm hover:bg-lime-50 transition rounded-lg",
                                    value === option ? "bg-lime-100 text-lime-800 font-medium" : "text-gray-700"
                                )}
                            >
                                {option}
                            </button>
                        ))}
                        {filteredOptions.length === 0 && (
                            <div className="px-3 py-2 text-sm text-gray-400 italic">{emptyMessage}</div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}
