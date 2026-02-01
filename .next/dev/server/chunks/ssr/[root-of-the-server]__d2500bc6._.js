module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[project]/src/lib/db.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDB",
    ()=>getDB,
    "initDB",
    ()=>initDB
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$sql$2f$dist$2d$js$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tauri-apps/plugin-sql/dist-js/index.js [app-ssr] (ecmascript)");
;
let dbInstance = null;
async function initDB() {
    // Check if running in Tauri environment
    if (("TURBOPACK compile-time value", "undefined") === "undefined" || !("__TAURI_INTERNALS__" in window)) {
        console.warn("⚠️ initDB called outside of Tauri environment");
        return null;
    }
    //TURBOPACK unreachable
    ;
}
function getDB() {
    if (!dbInstance) {
        throw new Error("Database not initialized. Call initDB() first.");
    }
    return dbInstance;
}
}),
"[project]/src/components/DropZone.tsx [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/src/components/DropZone.tsx'\n\nReturn statement is not allowed here");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/src/components/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
;
;
function Header() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "flex items-center justify-between px-6 py-4 bg-gray-50 border-b border-gray-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-gray-900 tracking-tight",
                        children: "Folioli"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 8,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden md:flex items-center gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "text-sm font-semibold text-gray-900 hover:text-black",
                                children: "Dashboard"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 12,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "text-sm font-medium text-gray-500 hover:text-gray-900",
                                children: "Table"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 13,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 11,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 7,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    className: "h-4 w-4 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 21,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 20,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "",
                                className: "block w-64 pl-10 pr-3 py-1.5 bg-[#7CB342] text-white placeholder-white/70 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-[#7CB342]/50 transition-all hover:bg-[#689F38]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 23,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 19,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 pl-4 border-l border-gray-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "p-2 text-gray-600 hover:bg-gray-200 rounded-full transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 32,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 31,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "h-8 w-8 bg-gray-300 rounded-full overflow-hidden hover:ring-2 hover:ring-gray-400 transition-all flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                    className: "h-5 w-5 text-gray-600"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 35,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 34,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 30,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 18,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Header.tsx",
        lineNumber: 5,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/TransactionTable.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TransactionTable",
    ()=>TransactionTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
;
;
function TransactionTable({ transactions, onUpdate, onSave }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white border border-gray-300 shadow-sm rounded-sm overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center p-4 bg-gray-50 border-b border-gray-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-sm font-bold text-gray-700 uppercase tracking-wide",
                        children: "Transactions"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TransactionTable.tsx",
                        lineNumber: 24,
                        columnNumber: 17
                    }, this),
                    onSave && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onSave,
                        className: "bg-slate-800 text-white text-sm px-4 py-1.5 rounded hover:bg-slate-900 transition font-medium",
                        children: "Save Changes"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TransactionTable.tsx",
                        lineNumber: 26,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TransactionTable.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "min-w-full border-collapse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                className: "bg-[#1e293b] text-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider border-r border-slate-700",
                                            children: "Date"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TransactionTable.tsx",
                                            lineNumber: 39,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider border-r border-slate-700 w-1/4",
                                            children: "Name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TransactionTable.tsx",
                                            lineNumber: 40,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider border-r border-slate-700 text-right",
                                            children: "Amount"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TransactionTable.tsx",
                                            lineNumber: 41,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider border-r border-slate-700",
                                            children: "Category"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TransactionTable.tsx",
                                            lineNumber: 42,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider border-r border-slate-700",
                                            children: "Memo"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TransactionTable.tsx",
                                            lineNumber: 43,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider",
                                            children: "Status"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TransactionTable.tsx",
                                            lineNumber: 44,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/TransactionTable.tsx",
                                    lineNumber: 38,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/TransactionTable.tsx",
                                lineNumber: 37,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                className: "divide-y divide-gray-200",
                                children: transactions.map((tx, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("hover:bg-blue-50/50 transition-colors group", tx.status === "pending" && "bg-yellow-50/30"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-0 py-0 border-r border-gray-200",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: "w-full bg-transparent p-3 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 text-sm border-transparent",
                                                    value: tx.date,
                                                    onChange: (e)=>onUpdate(idx, "date", e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TransactionTable.tsx",
                                                    lineNumber: 51,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TransactionTable.tsx",
                                                lineNumber: 50,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-0 py-0 border-r border-gray-200",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: "w-full bg-transparent p-3 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 font-medium text-gray-900 text-sm border-transparent",
                                                    value: tx.name,
                                                    onChange: (e)=>onUpdate(idx, "name", e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TransactionTable.tsx",
                                                    lineNumber: 58,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TransactionTable.tsx",
                                                lineNumber: 57,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-0 py-0 border-r border-gray-200",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    step: "0.01",
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("w-full bg-transparent p-3 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 text-right font-mono text-sm border-transparent", tx.amount < 0 ? "text-red-600" : "text-emerald-700 font-medium"),
                                                    value: tx.amount,
                                                    onChange: (e)=>onUpdate(idx, "amount", parseFloat(e.target.value))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TransactionTable.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TransactionTable.tsx",
                                                lineNumber: 64,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-0 py-0 border-r border-gray-200",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: "w-full bg-transparent p-3 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 text-sm text-gray-600 border-transparent",
                                                    value: tx.category || "",
                                                    placeholder: "Uncategorized",
                                                    onChange: (e)=>onUpdate(idx, "category", e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TransactionTable.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TransactionTable.tsx",
                                                lineNumber: 76,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-0 py-0 border-r border-gray-200",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: "w-full bg-transparent p-3 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 text-sm text-gray-500 border-transparent",
                                                    value: tx.memo || "",
                                                    onChange: (e)=>onUpdate(idx, "memo", e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TransactionTable.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TransactionTable.tsx",
                                                lineNumber: 84,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-2 text-center",
                                                children: tx.status === "pending" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800",
                                                    children: "Warning"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TransactionTable.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 41
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800",
                                                    children: "OK"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TransactionTable.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TransactionTable.tsx",
                                                lineNumber: 91,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/src/components/TransactionTable.tsx",
                                        lineNumber: 49,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/TransactionTable.tsx",
                                lineNumber: 47,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TransactionTable.tsx",
                        lineNumber: 36,
                        columnNumber: 17
                    }, this),
                    transactions.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center p-12 text-gray-400 bg-gray-50/50",
                        children: "No transactions found. Import a CSV to get started."
                    }, void 0, false, {
                        fileName: "[project]/src/components/TransactionTable.tsx",
                        lineNumber: 107,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TransactionTable.tsx",
                lineNumber: 35,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TransactionTable.tsx",
        lineNumber: 22,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tauri-apps/api/event.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$papaparse$2f$papaparse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/papaparse/papaparse.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DropZone$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DropZone.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransactionTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TransactionTable.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function Home() {
    const [transactions, setTransactions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isDragOver, setIsDragOver] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Initialize database and Tauri file drop listener on component mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let unlistenDragOver;
        let unlistenDragLeave;
        let unlistenDrop;
        async function setup() {
            // Initialize DB
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initDB"])();
            await loadTransactions();
            setIsLoading(false);
            // Tauri file drop listeners
            unlistenDragOver = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["listen"])("tauri://drag-over", ()=>{
                setIsDragOver(true);
            });
            unlistenDragLeave = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["listen"])("tauri://drag-leave", ()=>{
                setIsDragOver(false);
            });
            unlistenDrop = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["listen"])("tauri://drag-drop", async (event)=>{
                setIsDragOver(false);
                const paths = event.payload.paths;
                console.log("Tauri Drop Event - Paths:", paths);
                const csvPath = paths.find((p)=>p.toLowerCase().endsWith(".csv"));
                if (csvPath) {
                    try {
                        // Read file content using Tauri's fs API or fetch
                        const response = await fetch(`file://${csvPath}`);
                        const text = await response.text();
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$papaparse$2f$papaparse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].parse(text, {
                            header: true,
                            skipEmptyLines: true,
                            complete: (results)=>{
                                console.log("Parsed CSV via Tauri:", results);
                                if (results.data.length > 0) {
                                    handleImport(results.data);
                                } else {
                                    alert("CSV file was empty or could not be parsed.");
                                }
                            },
                            error: (err)=>{
                                console.error("CSV Parse Error:", err);
                                alert("Failed to parse the CSV file.");
                            }
                        });
                    } catch (err) {
                        console.error("File read error:", err);
                        alert("Could not read the dropped file. Please try again.");
                    }
                } else {
                    alert("Please drop a .csv file");
                }
            });
        }
        setup();
        return ()=>{
            unlistenDragOver?.();
            unlistenDragLeave?.();
            unlistenDrop?.();
        };
    }, []);
    async function loadTransactions() {
        try {
            const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDB"])();
            const rows = await db.select("SELECT * FROM transactions ORDER BY date DESC");
            setTransactions(rows);
        } catch (e) {
            console.error("Failed to load transactions:", e);
        }
    }
    const handleImport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((rawRows)=>{
        if (rawRows.length === 0) return;
        console.log("Raw Import Keys:", Object.keys(rawRows[0]));
        // Helper to find key case-insensitively
        const findVal = (row, keys)=>{
            const rowKeys = Object.keys(row);
            for (const k of keys){
                const found = rowKeys.find((rk)=>rk.toLowerCase() === k.toLowerCase());
                if (found) return row[found];
            }
            return null;
        };
        const mapped = rawRows.map((row)=>{
            const amountStr = findVal(row, [
                "amount",
                "amt",
                "debit",
                "credit",
                "value"
            ]);
            const amount = parseFloat(amountStr || "0");
            const name = findVal(row, [
                "description",
                "desc",
                "payee",
                "name",
                "transaction",
                "merchant"
            ]) || "Unknown";
            const date = findVal(row, [
                "date",
                "posting date",
                "transaction date",
                "time"
            ]) || new Date().toISOString().split('T')[0];
            const memo = findVal(row, [
                "memo",
                "details",
                "notes"
            ]) || "";
            const category = autoCategorize(name);
            return {
                date: date,
                name: name,
                amount: isNaN(amount) ? 0 : amount,
                category: category,
                memo: memo,
                status: "pending"
            };
        }).filter((t)=>t.amount !== 0 || t.name !== "Unknown");
        if (mapped.length === 0) {
            alert("Could not map any transactions. Check CSV headers. Looked for: Date, Description/Name, Amount.");
        } else {
            setTransactions((prev)=>[
                    ...mapped,
                    ...prev
                ]);
        }
    }, []);
    const autoCategorize = (name)=>{
        const n = name.toLowerCase();
        if (n.includes("grocery") || n.includes("market") || n.includes("whole foods")) return "Groceries";
        if (n.includes("uber") || n.includes("lyft") || n.includes("gas")) return "Transport";
        if (n.includes("restaurant") || n.includes("cafe") || n.includes("starbucks")) return "Dining";
        return "";
    };
    const handleUpdate = (index, field, value)=>{
        setTransactions((prev)=>{
            const copy = [
                ...prev
            ];
            copy[index] = {
                ...copy[index],
                [field]: value
            };
            return copy;
        });
    };
    const handleSave = async ()=>{
        try {
            const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDB"])();
            for (const tx of transactions){
                if (!tx.id) {
                    await db.execute("INSERT INTO transactions (date, name, amount, category, memo, status) VALUES ($1, $2, $3, $4, $5, $6)", [
                        tx.date,
                        tx.name,
                        tx.amount,
                        tx.category,
                        tx.memo,
                        "confirmed"
                    ]);
                } else {
                    await db.execute("UPDATE transactions SET date=$1, name=$2, amount=$3, category=$4, memo=$5, status=$6 WHERE id=$7", [
                        tx.date,
                        tx.name,
                        tx.amount,
                        tx.category,
                        tx.memo,
                        "confirmed",
                        tx.id
                    ]);
                }
            }
            await loadTransactions();
            alert("Saved successfully!");
        } catch (e) {
            console.error("Save failed:", e);
            alert("Failed to save data.");
        }
    };
    if (isLoading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-8 text-center",
        children: "Loading Folioli..."
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 177,
        columnNumber: 27
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `min-h-screen bg-gray-50 flex flex-col font-sans ${isDragOver ? 'ring-4 ring-blue-500 ring-inset' : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 181,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DropZone$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropZone"], {
                            onModelsImported: handleImport,
                            isDragActive: isDragOver
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 185,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 184,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransactionTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransactionTable"], {
                            transactions: transactions,
                            onUpdate: handleUpdate,
                            onSave: handleSave
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 189,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 188,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 183,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 180,
        columnNumber: 9
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
"[project]/node_modules/@tauri-apps/api/external/tslib/tslib.es6.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__classPrivateFieldGet",
    ()=>__classPrivateFieldGet,
    "__classPrivateFieldSet",
    ()=>__classPrivateFieldSet
]);
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
;
}),
"[project]/node_modules/@tauri-apps/api/core.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Channel",
    ()=>Channel,
    "PluginListener",
    ()=>PluginListener,
    "Resource",
    ()=>Resource,
    "SERIALIZE_TO_IPC_FN",
    ()=>SERIALIZE_TO_IPC_FN,
    "addPluginListener",
    ()=>addPluginListener,
    "checkPermissions",
    ()=>checkPermissions,
    "convertFileSrc",
    ()=>convertFileSrc,
    "invoke",
    ()=>invoke,
    "isTauri",
    ()=>isTauri,
    "requestPermissions",
    ()=>requestPermissions,
    "transformCallback",
    ()=>transformCallback
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$external$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tauri-apps/api/external/tslib/tslib.es6.js [app-ssr] (ecmascript)");
;
// Copyright 2019-2024 Tauri Programme within The Commons Conservancy
// SPDX-License-Identifier: Apache-2.0
// SPDX-License-Identifier: MIT
var _Channel_onmessage, _Channel_nextMessageIndex, _Channel_pendingMessages, _Channel_messageEndIndex, _Resource_rid;
/**
 * Invoke your custom commands.
 *
 * This package is also accessible with `window.__TAURI__.core` when [`app.withGlobalTauri`](https://v2.tauri.app/reference/config/#withglobaltauri) in `tauri.conf.json` is set to `true`.
 * @module
 */ /**
 * A key to be used to implement a special function
 * on your types that define how your type should be serialized
 * when passing across the IPC.
 * @example
 * Given a type in Rust that looks like this
 * ```rs
 * #[derive(serde::Serialize, serde::Deserialize)
 * enum UserId {
 *   String(String),
 *   Number(u32),
 * }
 * ```
 * `UserId::String("id")` would be serialized into `{ String: "id" }`
 * and so we need to pass the same structure back to Rust
 * ```ts
 * import { SERIALIZE_TO_IPC_FN } from "@tauri-apps/api/core"
 *
 * class UserIdString {
 *   id
 *   constructor(id) {
 *     this.id = id
 *   }
 *
 *   [SERIALIZE_TO_IPC_FN]() {
 *     return { String: this.id }
 *   }
 * }
 *
 * class UserIdNumber {
 *   id
 *   constructor(id) {
 *     this.id = id
 *   }
 *
 *   [SERIALIZE_TO_IPC_FN]() {
 *     return { Number: this.id }
 *   }
 * }
 *
 * type UserId = UserIdString | UserIdNumber
 * ```
 *
 */ // if this value changes, make sure to update it in:
// 1. ipc.js
// 2. process-ipc-message-fn.js
const SERIALIZE_TO_IPC_FN = '__TAURI_TO_IPC_KEY__';
/**
 * Stores the callback in a known location, and returns an identifier that can be passed to the backend.
 * The backend uses the identifier to `eval()` the callback.
 *
 * @return An unique identifier associated with the callback function.
 *
 * @since 1.0.0
 */ function transformCallback(// TODO: Make this not optional in v3
callback, once = false) {
    return window.__TAURI_INTERNALS__.transformCallback(callback, once);
}
class Channel {
    constructor(onmessage){
        _Channel_onmessage.set(this, void 0);
        // the index is used as a mechanism to preserve message order
        _Channel_nextMessageIndex.set(this, 0);
        _Channel_pendingMessages.set(this, []);
        _Channel_messageEndIndex.set(this, void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$external$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__classPrivateFieldSet"])(this, _Channel_onmessage, onmessage || (()=>{}), "f");
        this.id = transformCallback((rawMessage)=>{
            const index = rawMessage.index;
            if ('end' in rawMessage) {
                if (index == (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$external$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(this, _Channel_nextMessageIndex, "f")) {
                    this.cleanupCallback();
                } else {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$external$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__classPrivateFieldSet"])(this, _Channel_messageEndIndex, index, "f");
                }
                return;
            }
            const message = rawMessage.message;
            // Process the message if we're at the right order
            if (index == (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$external$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(this, _Channel_nextMessageIndex, "f")) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$external$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(this, _Channel_onmessage, "f").call(this, message);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$external$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__classPrivateFieldSet"])(this, _Channel_nextMessageIndex, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$external$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(this, _Channel_nextMessageIndex, "f") + 1, "f");
                // process pending messages
                while((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$external$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(this, _Channel_nextMessageIndex, "f") in (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$external$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(this, _Channel_pendingMessages, "f")){
                    const message = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$external$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(this, _Channel_pendingMessages, "f")[(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$external$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(this, _Channel_nextMessageIndex, "f")];
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$external$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(this, _Channel_onmessage, "f").call(this, message);
                    // eslint-disable-next-line @typescript-eslint/no-array-delete
                    delete (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$external$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(this, _Channel_pendingMessages, "f")[(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$external$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(this, _Channel_nextMessageIndex, "f")];
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$external$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__classPrivateFieldSet"])(this, _Channel_nextMessageIndex, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$external$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(this, _Channel_nextMessageIndex, "f") + 1, "f");
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$external$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(this, _Channel_nextMessageIndex, "f") === (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$external$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(this, _Channel_messageEndIndex, "f")) {
                    this.cleanupCallback();
                }
            } else {
                // eslint-disable-next-line security/detect-object-injection
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$external$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(this, _Channel_pendingMessages, "f")[index] = message;
            }
        });
    }
    cleanupCallback() {
        window.__TAURI_INTERNALS__.unregisterCallback(this.id);
    }
    set onmessage(handler) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$external$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__classPrivateFieldSet"])(this, _Channel_onmessage, handler, "f");
    }
    get onmessage() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$external$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(this, _Channel_onmessage, "f");
    }
    [(_Channel_onmessage = new WeakMap(), _Channel_nextMessageIndex = new WeakMap(), _Channel_pendingMessages = new WeakMap(), _Channel_messageEndIndex = new WeakMap(), SERIALIZE_TO_IPC_FN)]() {
        return `__CHANNEL__:${this.id}`;
    }
    toJSON() {
        // eslint-disable-next-line security/detect-object-injection
        return this[SERIALIZE_TO_IPC_FN]();
    }
}
class PluginListener {
    constructor(plugin, event, channelId){
        this.plugin = plugin;
        this.event = event;
        this.channelId = channelId;
    }
    async unregister() {
        return invoke(`plugin:${this.plugin}|remove_listener`, {
            event: this.event,
            channelId: this.channelId
        });
    }
}
/**
 * Adds a listener to a plugin event.
 *
 * @returns The listener object to stop listening to the events.
 *
 * @since 2.0.0
 */ async function addPluginListener(plugin, event, cb) {
    const handler = new Channel(cb);
    try {
        await invoke(`plugin:${plugin}|register_listener`, {
            event,
            handler
        });
        return new PluginListener(plugin, event, handler.id);
    } catch  {
        // TODO(v3): remove this fallback
        // note: we must try with camelCase here for backwards compatibility
        await invoke(`plugin:${plugin}|registerListener`, {
            event,
            handler
        });
        return new PluginListener(plugin, event, handler.id);
    }
}
/**
 * Get permission state for a plugin.
 *
 * This should be used by plugin authors to wrap their actual implementation.
 */ async function checkPermissions(plugin) {
    return invoke(`plugin:${plugin}|check_permissions`);
}
/**
 * Request permissions.
 *
 * This should be used by plugin authors to wrap their actual implementation.
 */ async function requestPermissions(plugin) {
    return invoke(`plugin:${plugin}|request_permissions`);
}
/**
 * Sends a message to the backend.
 * @example
 * ```typescript
 * import { invoke } from '@tauri-apps/api/core';
 * await invoke('login', { user: 'tauri', password: 'poiwe3h4r5ip3yrhtew9ty' });
 * ```
 *
 * @param cmd The command name.
 * @param args The optional arguments to pass to the command.
 * @param options The request options.
 * @return A promise resolving or rejecting to the backend response.
 *
 * @since 1.0.0
 */ async function invoke(cmd, args = {}, options) {
    return window.__TAURI_INTERNALS__.invoke(cmd, args, options);
}
/**
 * Convert a device file path to an URL that can be loaded by the webview.
 * Note that `asset:` and `http://asset.localhost` must be added to [`app.security.csp`](https://v2.tauri.app/reference/config/#csp-1) in `tauri.conf.json`.
 * Example CSP value: `"csp": "default-src 'self' ipc: http://ipc.localhost; img-src 'self' asset: http://asset.localhost"` to use the asset protocol on image sources.
 *
 * Additionally, `"enable" : "true"` must be added to [`app.security.assetProtocol`](https://v2.tauri.app/reference/config/#assetprotocolconfig)
 * in `tauri.conf.json` and its access scope must be defined on the `scope` array on the same `assetProtocol` object.
 *
 * @param  filePath The file path.
 * @param  protocol The protocol to use. Defaults to `asset`. You only need to set this when using a custom protocol.
 * @example
 * ```typescript
 * import { appDataDir, join } from '@tauri-apps/api/path';
 * import { convertFileSrc } from '@tauri-apps/api/core';
 * const appDataDirPath = await appDataDir();
 * const filePath = await join(appDataDirPath, 'assets/video.mp4');
 * const assetUrl = convertFileSrc(filePath);
 *
 * const video = document.getElementById('my-video');
 * const source = document.createElement('source');
 * source.type = 'video/mp4';
 * source.src = assetUrl;
 * video.appendChild(source);
 * video.load();
 * ```
 *
 * @return the URL that can be used as source on the webview.
 *
 * @since 1.0.0
 */ function convertFileSrc(filePath, protocol = 'asset') {
    return window.__TAURI_INTERNALS__.convertFileSrc(filePath, protocol);
}
/**
 * A rust-backed resource stored through `tauri::Manager::resources_table` API.
 *
 * The resource lives in the main process and does not exist
 * in the Javascript world, and thus will not be cleaned up automatically
 * except on application exit. If you want to clean it up early, call {@linkcode Resource.close}
 *
 * @example
 * ```typescript
 * import { Resource, invoke } from '@tauri-apps/api/core';
 * export class DatabaseHandle extends Resource {
 *   static async open(path: string): Promise<DatabaseHandle> {
 *     const rid: number = await invoke('open_db', { path });
 *     return new DatabaseHandle(rid);
 *   }
 *
 *   async execute(sql: string): Promise<void> {
 *     await invoke('execute_sql', { rid: this.rid, sql });
 *   }
 * }
 * ```
 */ class Resource {
    get rid() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$external$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(this, _Resource_rid, "f");
    }
    constructor(rid){
        _Resource_rid.set(this, void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$external$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__classPrivateFieldSet"])(this, _Resource_rid, rid, "f");
    }
    /**
     * Destroys and cleans up this resource from memory.
     * **You should not call any method on this object anymore and should drop any reference to it.**
     */ async close() {
        return invoke('plugin:resources|close', {
            rid: this.rid
        });
    }
}
_Resource_rid = new WeakMap();
function isTauri() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
    return !!(globalThis || window).isTauri;
}
;
}),
"[project]/node_modules/@tauri-apps/api/event.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TauriEvent",
    ()=>TauriEvent,
    "emit",
    ()=>emit,
    "emitTo",
    ()=>emitTo,
    "listen",
    ()=>listen,
    "once",
    ()=>once
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tauri-apps/api/core.js [app-ssr] (ecmascript)");
;
// Copyright 2019-2024 Tauri Programme within The Commons Conservancy
// SPDX-License-Identifier: Apache-2.0
// SPDX-License-Identifier: MIT
/**
 * The event system allows you to emit events to the backend and listen to events from it.
 *
 * This package is also accessible with `window.__TAURI__.event` when [`app.withGlobalTauri`](https://v2.tauri.app/reference/config/#withglobaltauri) in `tauri.conf.json` is set to `true`.
 * @module
 */ /**
 * @since 1.1.0
 */ var TauriEvent;
(function(TauriEvent) {
    TauriEvent["WINDOW_RESIZED"] = "tauri://resize";
    TauriEvent["WINDOW_MOVED"] = "tauri://move";
    TauriEvent["WINDOW_CLOSE_REQUESTED"] = "tauri://close-requested";
    TauriEvent["WINDOW_DESTROYED"] = "tauri://destroyed";
    TauriEvent["WINDOW_FOCUS"] = "tauri://focus";
    TauriEvent["WINDOW_BLUR"] = "tauri://blur";
    TauriEvent["WINDOW_SCALE_FACTOR_CHANGED"] = "tauri://scale-change";
    TauriEvent["WINDOW_THEME_CHANGED"] = "tauri://theme-changed";
    TauriEvent["WINDOW_CREATED"] = "tauri://window-created";
    TauriEvent["WEBVIEW_CREATED"] = "tauri://webview-created";
    TauriEvent["DRAG_ENTER"] = "tauri://drag-enter";
    TauriEvent["DRAG_OVER"] = "tauri://drag-over";
    TauriEvent["DRAG_DROP"] = "tauri://drag-drop";
    TauriEvent["DRAG_LEAVE"] = "tauri://drag-leave";
})(TauriEvent || (TauriEvent = {}));
/**
 * Unregister the event listener associated with the given name and id.
 *
 * @ignore
 * @param event The event name
 * @param eventId Event identifier
 * @returns
 */ async function _unlisten(event, eventId) {
    window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener(event, eventId);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invoke"])('plugin:event|unlisten', {
        event,
        eventId
    });
}
/**
 * Listen to an emitted event to any {@link EventTarget|target}.
 *
 * @example
 * ```typescript
 * import { listen } from '@tauri-apps/api/event';
 * const unlisten = await listen<string>('error', (event) => {
 *   console.log(`Got error, payload: ${event.payload}`);
 * });
 *
 * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
 * unlisten();
 * ```
 *
 * @param event Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`.
 * @param handler Event handler callback.
 * @param options Event listening options.
 * @returns A promise resolving to a function to unlisten to the event.
 * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
 *
 * @since 1.0.0
 */ async function listen(event, handler, options) {
    var _a;
    const target = typeof (options === null || options === void 0 ? void 0 : options.target) === 'string' ? {
        kind: 'AnyLabel',
        label: options.target
    } : (_a = options === null || options === void 0 ? void 0 : options.target) !== null && _a !== void 0 ? _a : {
        kind: 'Any'
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invoke"])('plugin:event|listen', {
        event,
        target,
        handler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformCallback"])(handler)
    }).then((eventId)=>{
        return async ()=>_unlisten(event, eventId);
    });
}
/**
 * Listens once to an emitted event to any {@link EventTarget|target}.
 *
 * @example
 * ```typescript
 * import { once } from '@tauri-apps/api/event';
 * interface LoadedPayload {
 *   loggedIn: boolean,
 *   token: string
 * }
 * const unlisten = await once<LoadedPayload>('loaded', (event) => {
 *   console.log(`App is loaded, loggedIn: ${event.payload.loggedIn}, token: ${event.payload.token}`);
 * });
 *
 * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
 * unlisten();
 * ```
 *
 * @param event Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`.
 * @param handler Event handler callback.
 * @param options Event listening options.
 * @returns A promise resolving to a function to unlisten to the event.
 * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
 *
 * @since 1.0.0
 */ async function once(event, handler, options) {
    return listen(event, (eventData)=>{
        void _unlisten(event, eventData.id);
        handler(eventData);
    }, options);
}
/**
 * Emits an event to all {@link EventTarget|targets}.
 *
 * @example
 * ```typescript
 * import { emit } from '@tauri-apps/api/event';
 * await emit('frontend-loaded', { loggedIn: true, token: 'authToken' });
 * ```
 *
 * @param event Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`.
 * @param payload Event payload.
 *
 * @since 1.0.0
 */ async function emit(event, payload) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invoke"])('plugin:event|emit', {
        event,
        payload
    });
}
/**
 * Emits an event to all {@link EventTarget|targets} matching the given target.
 *
 * @example
 * ```typescript
 * import { emitTo } from '@tauri-apps/api/event';
 * await emitTo('main', 'frontend-loaded', { loggedIn: true, token: 'authToken' });
 * ```
 *
 * @param target Label of the target Window/Webview/WebviewWindow or raw {@link EventTarget} object.
 * @param event Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`.
 * @param payload Event payload.
 *
 * @since 2.0.0
 */ async function emitTo(target, event, payload) {
    const eventTarget = typeof target === 'string' ? {
        kind: 'AnyLabel',
        label: target
    } : target;
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invoke"])('plugin:event|emit_to', {
        target: eventTarget,
        event,
        payload
    });
}
;
}),
"[project]/node_modules/papaparse/papaparse.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/ (function(root, factory) {
    /* globals define */ if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        ((r)=>r !== undefined && __turbopack_context__.v(r))(factory());
    } else if ("TURBOPACK compile-time truthy", 1) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else //TURBOPACK unreachable
    ;
// in strict mode we cannot access arguments.callee, so we need a named reference to
// stringify the factory method for the blob worker
// eslint-disable-next-line func-name
})(/*TURBOPACK member replacement*/ __turbopack_context__.e, function moduleFactory() {
    'use strict';
    var global = function() {
        // alternative method, similar to `Function('return this')()`
        // but without using `eval` (which is disabled when
        // using Content Security Policy).
        if (typeof self !== 'undefined') {
            return self;
        }
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        if (typeof global !== 'undefined') {
            return global;
        }
        // When running tests none of the above have been defined
        return {};
    }();
    function getWorkerBlob() {
        var URL = global.URL || global.webkitURL || null;
        var code = moduleFactory.toString();
        return Papa.BLOB_URL || (Papa.BLOB_URL = URL.createObjectURL(new Blob([
            "var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ",
            '(',
            code,
            ')();'
        ], {
            type: 'text/javascript'
        })));
    }
    var IS_WORKER = !global.document && !!global.postMessage, IS_PAPA_WORKER = global.IS_PAPA_WORKER || false;
    var workers = {}, workerIdCounter = 0;
    var Papa = {};
    Papa.parse = CsvToJson;
    Papa.unparse = JsonToCsv;
    Papa.RECORD_SEP = String.fromCharCode(30);
    Papa.UNIT_SEP = String.fromCharCode(31);
    Papa.BYTE_ORDER_MARK = '\ufeff';
    Papa.BAD_DELIMITERS = [
        '\r',
        '\n',
        '"',
        Papa.BYTE_ORDER_MARK
    ];
    Papa.WORKERS_SUPPORTED = !IS_WORKER && !!global.Worker;
    Papa.NODE_STREAM_INPUT = 1;
    // Configurable chunk sizes for local and remote files, respectively
    Papa.LocalChunkSize = 1024 * 1024 * 10; // 10 MB
    Papa.RemoteChunkSize = 1024 * 1024 * 5; // 5 MB
    Papa.DefaultDelimiter = ','; // Used if not specified and detection fails
    // Exposed for testing and development only
    Papa.Parser = Parser;
    Papa.ParserHandle = ParserHandle;
    Papa.NetworkStreamer = NetworkStreamer;
    Papa.FileStreamer = FileStreamer;
    Papa.StringStreamer = StringStreamer;
    Papa.ReadableStreamStreamer = ReadableStreamStreamer;
    if (typeof PAPA_BROWSER_CONTEXT === 'undefined') {
        Papa.DuplexStreamStreamer = DuplexStreamStreamer;
    }
    if (global.jQuery) {
        var $ = global.jQuery;
        $.fn.parse = function(options) {
            var config = options.config || {};
            var queue = [];
            this.each(function(idx) {
                var supported = $(this).prop('tagName').toUpperCase() === 'INPUT' && $(this).attr('type').toLowerCase() === 'file' && global.FileReader;
                if (!supported || !this.files || this.files.length === 0) return true; // continue to next input element
                for(var i = 0; i < this.files.length; i++){
                    queue.push({
                        file: this.files[i],
                        inputElem: this,
                        instanceConfig: $.extend({}, config)
                    });
                }
            });
            parseNextFile(); // begin parsing
            return this; // maintains chainability
            //TURBOPACK unreachable
            ;
            function parseNextFile() {
                if (queue.length === 0) {
                    if (isFunction(options.complete)) options.complete();
                    return;
                }
                var f = queue[0];
                if (isFunction(options.before)) {
                    var returned = options.before(f.file, f.inputElem);
                    if (typeof returned === 'object') {
                        if (returned.action === 'abort') {
                            error('AbortError', f.file, f.inputElem, returned.reason);
                            return; // Aborts all queued files immediately
                        } else if (returned.action === 'skip') {
                            fileComplete(); // parse the next file in the queue, if any
                            return;
                        } else if (typeof returned.config === 'object') f.instanceConfig = $.extend(f.instanceConfig, returned.config);
                    } else if (returned === 'skip') {
                        fileComplete(); // parse the next file in the queue, if any
                        return;
                    }
                }
                // Wrap up the user's complete callback, if any, so that ours also gets executed
                var userCompleteFunc = f.instanceConfig.complete;
                f.instanceConfig.complete = function(results) {
                    if (isFunction(userCompleteFunc)) userCompleteFunc(results, f.file, f.inputElem);
                    fileComplete();
                };
                Papa.parse(f.file, f.instanceConfig);
            }
            function error(name, file, elem, reason) {
                if (isFunction(options.error)) options.error({
                    name: name
                }, file, elem, reason);
            }
            function fileComplete() {
                queue.splice(0, 1);
                parseNextFile();
            }
        };
    }
    if (IS_PAPA_WORKER) {
        global.onmessage = workerThreadReceivedMessage;
    }
    function CsvToJson(_input, _config) {
        _config = _config || {};
        var dynamicTyping = _config.dynamicTyping || false;
        if (isFunction(dynamicTyping)) {
            _config.dynamicTypingFunction = dynamicTyping;
            // Will be filled on first row call
            dynamicTyping = {};
        }
        _config.dynamicTyping = dynamicTyping;
        _config.transform = isFunction(_config.transform) ? _config.transform : false;
        if (_config.worker && Papa.WORKERS_SUPPORTED) {
            var w = newWorker();
            w.userStep = _config.step;
            w.userChunk = _config.chunk;
            w.userComplete = _config.complete;
            w.userError = _config.error;
            _config.step = isFunction(_config.step);
            _config.chunk = isFunction(_config.chunk);
            _config.complete = isFunction(_config.complete);
            _config.error = isFunction(_config.error);
            delete _config.worker; // prevent infinite loop
            w.postMessage({
                input: _input,
                config: _config,
                workerId: w.id
            });
            return;
        }
        var streamer = null;
        if (_input === Papa.NODE_STREAM_INPUT && typeof PAPA_BROWSER_CONTEXT === 'undefined') {
            // create a node Duplex stream for use
            // with .pipe
            streamer = new DuplexStreamStreamer(_config);
            return streamer.getStream();
        } else if (typeof _input === 'string') {
            _input = stripBom(_input);
            if (_config.download) streamer = new NetworkStreamer(_config);
            else streamer = new StringStreamer(_config);
        } else if (_input.readable === true && isFunction(_input.read) && isFunction(_input.on)) {
            streamer = new ReadableStreamStreamer(_config);
        } else if (global.File && _input instanceof File || _input instanceof Object) streamer = new FileStreamer(_config);
        return streamer.stream(_input);
        //TURBOPACK unreachable
        ;
        // Strip character from UTF-8 BOM encoded files that cause issue parsing the file
        function stripBom(string) {
            if (string.charCodeAt(0) === 0xfeff) {
                return string.slice(1);
            }
            return string;
        }
    }
    function JsonToCsv(_input, _config) {
        // Default configuration
        /** whether to surround every datum with quotes */ var _quotes = false;
        /** whether to write headers */ var _writeHeader = true;
        /** delimiting character(s) */ var _delimiter = ',';
        /** newline character(s) */ var _newline = '\r\n';
        /** quote character */ var _quoteChar = '"';
        /** escaped quote character, either "" or <config.escapeChar>" */ var _escapedQuote = _quoteChar + _quoteChar;
        /** whether to skip empty lines */ var _skipEmptyLines = false;
        /** the columns (keys) we expect when we unparse objects */ var _columns = null;
        /** whether to prevent outputting cells that can be parsed as formulae by spreadsheet software (Excel and LibreOffice) */ var _escapeFormulae = false;
        unpackConfig();
        var quoteCharRegex = new RegExp(escapeRegExp(_quoteChar), 'g');
        if (typeof _input === 'string') _input = JSON.parse(_input);
        if (Array.isArray(_input)) {
            if (!_input.length || Array.isArray(_input[0])) return serialize(null, _input, _skipEmptyLines);
            else if (typeof _input[0] === 'object') return serialize(_columns || Object.keys(_input[0]), _input, _skipEmptyLines);
        } else if (typeof _input === 'object') {
            if (typeof _input.data === 'string') _input.data = JSON.parse(_input.data);
            if (Array.isArray(_input.data)) {
                if (!_input.fields) _input.fields = _input.meta && _input.meta.fields || _columns;
                if (!_input.fields) _input.fields = Array.isArray(_input.data[0]) ? _input.fields : typeof _input.data[0] === 'object' ? Object.keys(_input.data[0]) : [];
                if (!Array.isArray(_input.data[0]) && typeof _input.data[0] !== 'object') _input.data = [
                    _input.data
                ]; // handles input like [1,2,3] or ['asdf']
            }
            return serialize(_input.fields || [], _input.data || [], _skipEmptyLines);
        }
        // Default (any valid paths should return before this)
        throw new Error('Unable to serialize unrecognized input');
        function unpackConfig() {
            if (typeof _config !== 'object') return;
            if (typeof _config.delimiter === 'string' && !Papa.BAD_DELIMITERS.filter(function(value) {
                return _config.delimiter.indexOf(value) !== -1;
            }).length) {
                _delimiter = _config.delimiter;
            }
            if (typeof _config.quotes === 'boolean' || typeof _config.quotes === 'function' || Array.isArray(_config.quotes)) _quotes = _config.quotes;
            if (typeof _config.skipEmptyLines === 'boolean' || typeof _config.skipEmptyLines === 'string') _skipEmptyLines = _config.skipEmptyLines;
            if (typeof _config.newline === 'string') _newline = _config.newline;
            if (typeof _config.quoteChar === 'string') _quoteChar = _config.quoteChar;
            if (typeof _config.header === 'boolean') _writeHeader = _config.header;
            if (Array.isArray(_config.columns)) {
                if (_config.columns.length === 0) throw new Error('Option columns is empty');
                _columns = _config.columns;
            }
            if (_config.escapeChar !== undefined) {
                _escapedQuote = _config.escapeChar + _quoteChar;
            }
            if (_config.escapeFormulae instanceof RegExp) {
                _escapeFormulae = _config.escapeFormulae;
            } else if (typeof _config.escapeFormulae === 'boolean' && _config.escapeFormulae) {
                _escapeFormulae = /^[=+\-@\t\r].*$/;
            }
        }
        /** The double for loop that iterates the data and writes out a CSV string including header row */ function serialize(fields, data, skipEmptyLines) {
            var csv = '';
            if (typeof fields === 'string') fields = JSON.parse(fields);
            if (typeof data === 'string') data = JSON.parse(data);
            var hasHeader = Array.isArray(fields) && fields.length > 0;
            var dataKeyedByField = !Array.isArray(data[0]);
            // If there a header row, write it first
            if (hasHeader && _writeHeader) {
                for(var i = 0; i < fields.length; i++){
                    if (i > 0) csv += _delimiter;
                    csv += safe(fields[i], i);
                }
                if (data.length > 0) csv += _newline;
            }
            // Then write out the data
            for(var row = 0; row < data.length; row++){
                var maxCol = hasHeader ? fields.length : data[row].length;
                var emptyLine = false;
                var nullLine = hasHeader ? Object.keys(data[row]).length === 0 : data[row].length === 0;
                if (skipEmptyLines && !hasHeader) {
                    emptyLine = skipEmptyLines === 'greedy' ? data[row].join('').trim() === '' : data[row].length === 1 && data[row][0].length === 0;
                }
                if (skipEmptyLines === 'greedy' && hasHeader) {
                    var line = [];
                    for(var c = 0; c < maxCol; c++){
                        var cx = dataKeyedByField ? fields[c] : c;
                        line.push(data[row][cx]);
                    }
                    emptyLine = line.join('').trim() === '';
                }
                if (!emptyLine) {
                    for(var col = 0; col < maxCol; col++){
                        if (col > 0 && !nullLine) csv += _delimiter;
                        var colIdx = hasHeader && dataKeyedByField ? fields[col] : col;
                        csv += safe(data[row][colIdx], col);
                    }
                    if (row < data.length - 1 && (!skipEmptyLines || maxCol > 0 && !nullLine)) {
                        csv += _newline;
                    }
                }
            }
            return csv;
        }
        /** Encloses a value around quotes if needed (makes a value safe for CSV insertion) */ function safe(str, col) {
            if (typeof str === 'undefined' || str === null) return '';
            if (str.constructor === Date) return JSON.stringify(str).slice(1, 25);
            var needsQuotes = false;
            if (_escapeFormulae && typeof str === "string" && _escapeFormulae.test(str)) {
                str = "'" + str;
                needsQuotes = true;
            }
            var escapedQuoteStr = str.toString().replace(quoteCharRegex, _escapedQuote);
            needsQuotes = needsQuotes || _quotes === true || typeof _quotes === 'function' && _quotes(str, col) || Array.isArray(_quotes) && _quotes[col] || hasAny(escapedQuoteStr, Papa.BAD_DELIMITERS) || escapedQuoteStr.indexOf(_delimiter) > -1 || escapedQuoteStr.charAt(0) === ' ' || escapedQuoteStr.charAt(escapedQuoteStr.length - 1) === ' ';
            return needsQuotes ? _quoteChar + escapedQuoteStr + _quoteChar : escapedQuoteStr;
        }
        function hasAny(str, substrings) {
            for(var i = 0; i < substrings.length; i++)if (str.indexOf(substrings[i]) > -1) return true;
            return false;
        }
    }
    /** ChunkStreamer is the base prototype for various streamer implementations. */ function ChunkStreamer(config) {
        this._handle = null;
        this._finished = false;
        this._completed = false;
        this._halted = false;
        this._input = null;
        this._baseIndex = 0;
        this._partialLine = '';
        this._rowCount = 0;
        this._start = 0;
        this._nextChunk = null;
        this.isFirstChunk = true;
        this._completeResults = {
            data: [],
            errors: [],
            meta: {}
        };
        replaceConfig.call(this, config);
        this.parseChunk = function(chunk, isFakeChunk) {
            // First chunk pre-processing
            const skipFirstNLines = parseInt(this._config.skipFirstNLines) || 0;
            if (this.isFirstChunk && skipFirstNLines > 0) {
                let _newline = this._config.newline;
                if (!_newline) {
                    const quoteChar = this._config.quoteChar || '"';
                    _newline = this._handle.guessLineEndings(chunk, quoteChar);
                }
                const splitChunk = chunk.split(_newline);
                chunk = [
                    ...splitChunk.slice(skipFirstNLines)
                ].join(_newline);
            }
            if (this.isFirstChunk && isFunction(this._config.beforeFirstChunk)) {
                var modifiedChunk = this._config.beforeFirstChunk(chunk);
                if (modifiedChunk !== undefined) chunk = modifiedChunk;
            }
            this.isFirstChunk = false;
            this._halted = false;
            // Rejoin the line we likely just split in two by chunking the file
            var aggregate = this._partialLine + chunk;
            this._partialLine = '';
            var results = this._handle.parse(aggregate, this._baseIndex, !this._finished);
            if (this._handle.paused() || this._handle.aborted()) {
                this._halted = true;
                return;
            }
            var lastIndex = results.meta.cursor;
            if (!this._finished) {
                this._partialLine = aggregate.substring(lastIndex - this._baseIndex);
                this._baseIndex = lastIndex;
            }
            if (results && results.data) this._rowCount += results.data.length;
            var finishedIncludingPreview = this._finished || this._config.preview && this._rowCount >= this._config.preview;
            if (IS_PAPA_WORKER) {
                global.postMessage({
                    results: results,
                    workerId: Papa.WORKER_ID,
                    finished: finishedIncludingPreview
                });
            } else if (isFunction(this._config.chunk) && !isFakeChunk) {
                this._config.chunk(results, this._handle);
                if (this._handle.paused() || this._handle.aborted()) {
                    this._halted = true;
                    return;
                }
                results = undefined;
                this._completeResults = undefined;
            }
            if (!this._config.step && !this._config.chunk) {
                this._completeResults.data = this._completeResults.data.concat(results.data);
                this._completeResults.errors = this._completeResults.errors.concat(results.errors);
                this._completeResults.meta = results.meta;
            }
            if (!this._completed && finishedIncludingPreview && isFunction(this._config.complete) && (!results || !results.meta.aborted)) {
                this._config.complete(this._completeResults, this._input);
                this._completed = true;
            }
            if (!finishedIncludingPreview && (!results || !results.meta.paused)) this._nextChunk();
            return results;
        };
        this._sendError = function(error) {
            if (isFunction(this._config.error)) this._config.error(error);
            else if (IS_PAPA_WORKER && this._config.error) {
                global.postMessage({
                    workerId: Papa.WORKER_ID,
                    error: error,
                    finished: false
                });
            }
        };
        function replaceConfig(config) {
            // Deep-copy the config so we can edit it
            var configCopy = copy(config);
            configCopy.chunkSize = parseInt(configCopy.chunkSize); // parseInt VERY important so we don't concatenate strings!
            if (!config.step && !config.chunk) configCopy.chunkSize = null; // disable Range header if not streaming; bad values break IIS - see issue #196
            this._handle = new ParserHandle(configCopy);
            this._handle.streamer = this;
            this._config = configCopy; // persist the copy to the caller
        }
    }
    function NetworkStreamer(config) {
        config = config || {};
        if (!config.chunkSize) config.chunkSize = Papa.RemoteChunkSize;
        ChunkStreamer.call(this, config);
        var xhr;
        if (IS_WORKER) {
            this._nextChunk = function() {
                this._readChunk();
                this._chunkLoaded();
            };
        } else {
            this._nextChunk = function() {
                this._readChunk();
            };
        }
        this.stream = function(url) {
            this._input = url;
            this._nextChunk(); // Starts streaming
        };
        this._readChunk = function() {
            if (this._finished) {
                this._chunkLoaded();
                return;
            }
            xhr = new XMLHttpRequest();
            if (this._config.withCredentials) {
                xhr.withCredentials = this._config.withCredentials;
            }
            if (!IS_WORKER) {
                xhr.onload = bindFunction(this._chunkLoaded, this);
                xhr.onerror = bindFunction(this._chunkError, this);
            }
            xhr.open(this._config.downloadRequestBody ? 'POST' : 'GET', this._input, !IS_WORKER);
            // Headers can only be set when once the request state is OPENED
            if (this._config.downloadRequestHeaders) {
                var headers = this._config.downloadRequestHeaders;
                for(var headerName in headers){
                    xhr.setRequestHeader(headerName, headers[headerName]);
                }
            }
            if (this._config.chunkSize) {
                var end = this._start + this._config.chunkSize - 1; // minus one because byte range is inclusive
                xhr.setRequestHeader('Range', 'bytes=' + this._start + '-' + end);
            }
            try {
                xhr.send(this._config.downloadRequestBody);
            } catch (err) {
                this._chunkError(err.message);
            }
            if (IS_WORKER && xhr.status === 0) this._chunkError();
        };
        this._chunkLoaded = function() {
            if (xhr.readyState !== 4) return;
            if (xhr.status < 200 || xhr.status >= 400) {
                this._chunkError();
                return;
            }
            // Use chunckSize as it may be a diference on reponse lentgh due to characters with more than 1 byte
            this._start += this._config.chunkSize ? this._config.chunkSize : xhr.responseText.length;
            this._finished = !this._config.chunkSize || this._start >= getFileSize(xhr);
            this.parseChunk(xhr.responseText);
        };
        this._chunkError = function(errorMessage) {
            var errorText = xhr.statusText || errorMessage;
            this._sendError(new Error(errorText));
        };
        function getFileSize(xhr) {
            var contentRange = xhr.getResponseHeader('Content-Range');
            if (contentRange === null) {
                return -1;
            }
            return parseInt(contentRange.substring(contentRange.lastIndexOf('/') + 1));
        }
    }
    NetworkStreamer.prototype = Object.create(ChunkStreamer.prototype);
    NetworkStreamer.prototype.constructor = NetworkStreamer;
    function FileStreamer(config) {
        config = config || {};
        if (!config.chunkSize) config.chunkSize = Papa.LocalChunkSize;
        ChunkStreamer.call(this, config);
        var reader, slice;
        // FileReader is better than FileReaderSync (even in worker) - see http://stackoverflow.com/q/24708649/1048862
        // But Firefox is a pill, too - see issue #76: https://github.com/mholt/PapaParse/issues/76
        var usingAsyncReader = typeof FileReader !== 'undefined'; // Safari doesn't consider it a function - see issue #105
        this.stream = function(file) {
            this._input = file;
            slice = file.slice || file.webkitSlice || file.mozSlice;
            if (usingAsyncReader) {
                reader = new FileReader(); // Preferred method of reading files, even in workers
                reader.onload = bindFunction(this._chunkLoaded, this);
                reader.onerror = bindFunction(this._chunkError, this);
            } else reader = new FileReaderSync(); // Hack for running in a web worker in Firefox
            this._nextChunk(); // Starts streaming
        };
        this._nextChunk = function() {
            if (!this._finished && (!this._config.preview || this._rowCount < this._config.preview)) this._readChunk();
        };
        this._readChunk = function() {
            var input = this._input;
            if (this._config.chunkSize) {
                var end = Math.min(this._start + this._config.chunkSize, this._input.size);
                input = slice.call(input, this._start, end);
            }
            var txt = reader.readAsText(input, this._config.encoding);
            if (!usingAsyncReader) this._chunkLoaded({
                target: {
                    result: txt
                }
            }); // mimic the async signature
        };
        this._chunkLoaded = function(event) {
            // Very important to increment start each time before handling results
            this._start += this._config.chunkSize;
            this._finished = !this._config.chunkSize || this._start >= this._input.size;
            this.parseChunk(event.target.result);
        };
        this._chunkError = function() {
            this._sendError(reader.error);
        };
    }
    FileStreamer.prototype = Object.create(ChunkStreamer.prototype);
    FileStreamer.prototype.constructor = FileStreamer;
    function StringStreamer(config) {
        config = config || {};
        ChunkStreamer.call(this, config);
        var remaining;
        this.stream = function(s) {
            remaining = s;
            return this._nextChunk();
        };
        this._nextChunk = function() {
            if (this._finished) return;
            var size = this._config.chunkSize;
            var chunk;
            if (size) {
                chunk = remaining.substring(0, size);
                remaining = remaining.substring(size);
            } else {
                chunk = remaining;
                remaining = '';
            }
            this._finished = !remaining;
            return this.parseChunk(chunk);
        };
    }
    StringStreamer.prototype = Object.create(StringStreamer.prototype);
    StringStreamer.prototype.constructor = StringStreamer;
    function ReadableStreamStreamer(config) {
        config = config || {};
        ChunkStreamer.call(this, config);
        var queue = [];
        var parseOnData = true;
        var streamHasEnded = false;
        this.pause = function() {
            ChunkStreamer.prototype.pause.apply(this, arguments);
            this._input.pause();
        };
        this.resume = function() {
            ChunkStreamer.prototype.resume.apply(this, arguments);
            this._input.resume();
        };
        this.stream = function(stream) {
            this._input = stream;
            this._input.on('data', this._streamData);
            this._input.on('end', this._streamEnd);
            this._input.on('error', this._streamError);
        };
        this._checkIsFinished = function() {
            if (streamHasEnded && queue.length === 1) {
                this._finished = true;
            }
        };
        this._nextChunk = function() {
            this._checkIsFinished();
            if (queue.length) {
                this.parseChunk(queue.shift());
            } else {
                parseOnData = true;
            }
        };
        this._streamData = bindFunction(function(chunk) {
            try {
                queue.push(typeof chunk === 'string' ? chunk : chunk.toString(this._config.encoding));
                if (parseOnData) {
                    parseOnData = false;
                    this._checkIsFinished();
                    this.parseChunk(queue.shift());
                }
            } catch (error) {
                this._streamError(error);
            }
        }, this);
        this._streamError = bindFunction(function(error) {
            this._streamCleanUp();
            this._sendError(error);
        }, this);
        this._streamEnd = bindFunction(function() {
            this._streamCleanUp();
            streamHasEnded = true;
            this._streamData('');
        }, this);
        this._streamCleanUp = bindFunction(function() {
            this._input.removeListener('data', this._streamData);
            this._input.removeListener('end', this._streamEnd);
            this._input.removeListener('error', this._streamError);
        }, this);
    }
    ReadableStreamStreamer.prototype = Object.create(ChunkStreamer.prototype);
    ReadableStreamStreamer.prototype.constructor = ReadableStreamStreamer;
    function DuplexStreamStreamer(_config) {
        var Duplex = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)").Duplex;
        var config = copy(_config);
        var parseOnWrite = true;
        var writeStreamHasFinished = false;
        var parseCallbackQueue = [];
        var stream = null;
        this._onCsvData = function(results) {
            var data = results.data;
            if (!stream.push(data) && !this._handle.paused()) {
                // the writeable consumer buffer has filled up
                // so we need to pause until more items
                // can be processed
                this._handle.pause();
            }
        };
        this._onCsvComplete = function() {
            // node will finish the read stream when
            // null is pushed
            stream.push(null);
        };
        config.step = bindFunction(this._onCsvData, this);
        config.complete = bindFunction(this._onCsvComplete, this);
        ChunkStreamer.call(this, config);
        this._nextChunk = function() {
            if (writeStreamHasFinished && parseCallbackQueue.length === 1) {
                this._finished = true;
            }
            if (parseCallbackQueue.length) {
                parseCallbackQueue.shift()();
            } else {
                parseOnWrite = true;
            }
        };
        this._addToParseQueue = function(chunk, callback) {
            // add to queue so that we can indicate
            // completion via callback
            // node will automatically pause the incoming stream
            // when too many items have been added without their
            // callback being invoked
            parseCallbackQueue.push(bindFunction(function() {
                this.parseChunk(typeof chunk === 'string' ? chunk : chunk.toString(config.encoding));
                if (isFunction(callback)) {
                    return callback();
                }
            }, this));
            if (parseOnWrite) {
                parseOnWrite = false;
                this._nextChunk();
            }
        };
        this._onRead = function() {
            if (this._handle.paused()) {
                // the writeable consumer can handle more data
                // so resume the chunk parsing
                this._handle.resume();
            }
        };
        this._onWrite = function(chunk, encoding, callback) {
            this._addToParseQueue(chunk, callback);
        };
        this._onWriteComplete = function() {
            writeStreamHasFinished = true;
            // have to write empty string
            // so parser knows its done
            this._addToParseQueue('');
        };
        this.getStream = function() {
            return stream;
        };
        stream = new Duplex({
            readableObjectMode: true,
            decodeStrings: false,
            read: bindFunction(this._onRead, this),
            write: bindFunction(this._onWrite, this)
        });
        stream.once('finish', bindFunction(this._onWriteComplete, this));
    }
    if (typeof PAPA_BROWSER_CONTEXT === 'undefined') {
        DuplexStreamStreamer.prototype = Object.create(ChunkStreamer.prototype);
        DuplexStreamStreamer.prototype.constructor = DuplexStreamStreamer;
    }
    // Use one ParserHandle per entire CSV file or string
    function ParserHandle(_config) {
        // One goal is to minimize the use of regular expressions...
        var MAX_FLOAT = Math.pow(2, 53);
        var MIN_FLOAT = -MAX_FLOAT;
        var FLOAT = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/;
        var ISO_DATE = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/;
        var self1 = this;
        var _stepCounter = 0; // Number of times step was called (number of rows parsed)
        var _rowCounter = 0; // Number of rows that have been parsed so far
        var _input; // The input being parsed
        var _parser; // The core parser being used
        var _paused = false; // Whether we are paused or not
        var _aborted = false; // Whether the parser has aborted or not
        var _delimiterError; // Temporary state between delimiter detection and processing results
        var _fields = []; // Fields are from the header row of the input, if there is one
        var _results = {
            data: [],
            errors: [],
            meta: {}
        };
        if (isFunction(_config.step)) {
            var userStep = _config.step;
            _config.step = function(results) {
                _results = results;
                if (needsHeaderRow()) processResults();
                else {
                    processResults();
                    // It's possbile that this line was empty and there's no row here after all
                    if (_results.data.length === 0) return;
                    _stepCounter += results.data.length;
                    if (_config.preview && _stepCounter > _config.preview) _parser.abort();
                    else {
                        _results.data = _results.data[0];
                        userStep(_results, self1);
                    }
                }
            };
        }
        /**
		 * Parses input. Most users won't need, and shouldn't mess with, the baseIndex
		 * and ignoreLastRow parameters. They are used by streamers (wrapper functions)
		 * when an input comes in multiple chunks, like from a file.
		 */ this.parse = function(input, baseIndex, ignoreLastRow) {
            var quoteChar = _config.quoteChar || '"';
            if (!_config.newline) _config.newline = this.guessLineEndings(input, quoteChar);
            _delimiterError = false;
            if (!_config.delimiter) {
                var delimGuess = guessDelimiter(input, _config.newline, _config.skipEmptyLines, _config.comments, _config.delimitersToGuess);
                if (delimGuess.successful) _config.delimiter = delimGuess.bestDelimiter;
                else {
                    _delimiterError = true; // add error after parsing (otherwise it would be overwritten)
                    _config.delimiter = Papa.DefaultDelimiter;
                }
                _results.meta.delimiter = _config.delimiter;
            } else if (isFunction(_config.delimiter)) {
                _config.delimiter = _config.delimiter(input);
                _results.meta.delimiter = _config.delimiter;
            }
            var parserConfig = copy(_config);
            if (_config.preview && _config.header) parserConfig.preview++; // to compensate for header row
            _input = input;
            _parser = new Parser(parserConfig);
            _results = _parser.parse(_input, baseIndex, ignoreLastRow);
            processResults();
            return _paused ? {
                meta: {
                    paused: true
                }
            } : _results || {
                meta: {
                    paused: false
                }
            };
        };
        this.paused = function() {
            return _paused;
        };
        this.pause = function() {
            _paused = true;
            _parser.abort();
            // If it is streaming via "chunking", the reader will start appending correctly already so no need to substring,
            // otherwise we can get duplicate content within a row
            _input = isFunction(_config.chunk) ? "" : _input.substring(_parser.getCharIndex());
        };
        this.resume = function() {
            if (self1.streamer._halted) {
                _paused = false;
                self1.streamer.parseChunk(_input, true);
            } else {
                // Bugfix: #636 In case the processing hasn't halted yet
                // wait for it to halt in order to resume
                setTimeout(self1.resume, 3);
            }
        };
        this.aborted = function() {
            return _aborted;
        };
        this.abort = function() {
            _aborted = true;
            _parser.abort();
            _results.meta.aborted = true;
            if (isFunction(_config.complete)) _config.complete(_results);
            _input = '';
        };
        this.guessLineEndings = function(input, quoteChar) {
            input = input.substring(0, 1024 * 1024); // max length 1 MB
            // Replace all the text inside quotes
            var re = new RegExp(escapeRegExp(quoteChar) + '([^]*?)' + escapeRegExp(quoteChar), 'gm');
            input = input.replace(re, '');
            var r = input.split('\r');
            var n = input.split('\n');
            var nAppearsFirst = n.length > 1 && n[0].length < r[0].length;
            if (r.length === 1 || nAppearsFirst) return '\n';
            var numWithN = 0;
            for(var i = 0; i < r.length; i++){
                if (r[i][0] === '\n') numWithN++;
            }
            return numWithN >= r.length / 2 ? '\r\n' : '\r';
        };
        function testEmptyLine(s) {
            return _config.skipEmptyLines === 'greedy' ? s.join('').trim() === '' : s.length === 1 && s[0].length === 0;
        }
        function testFloat(s) {
            if (FLOAT.test(s)) {
                var floatValue = parseFloat(s);
                if (floatValue > MIN_FLOAT && floatValue < MAX_FLOAT) {
                    return true;
                }
            }
            return false;
        }
        function processResults() {
            if (_results && _delimiterError) {
                addError('Delimiter', 'UndetectableDelimiter', 'Unable to auto-detect delimiting character; defaulted to \'' + Papa.DefaultDelimiter + '\'');
                _delimiterError = false;
            }
            if (_config.skipEmptyLines) {
                _results.data = _results.data.filter(function(d) {
                    return !testEmptyLine(d);
                });
            }
            if (needsHeaderRow()) fillHeaderFields();
            return applyHeaderAndDynamicTypingAndTransformation();
        }
        function needsHeaderRow() {
            return _config.header && _fields.length === 0;
        }
        function fillHeaderFields() {
            if (!_results) return;
            function addHeader(header, i) {
                if (isFunction(_config.transformHeader)) header = _config.transformHeader(header, i);
                _fields.push(header);
            }
            if (Array.isArray(_results.data[0])) {
                for(var i = 0; needsHeaderRow() && i < _results.data.length; i++)_results.data[i].forEach(addHeader);
                _results.data.splice(0, 1);
            } else _results.data.forEach(addHeader);
        }
        function shouldApplyDynamicTyping(field) {
            // Cache function values to avoid calling it for each row
            if (_config.dynamicTypingFunction && _config.dynamicTyping[field] === undefined) {
                _config.dynamicTyping[field] = _config.dynamicTypingFunction(field);
            }
            return (_config.dynamicTyping[field] || _config.dynamicTyping) === true;
        }
        function parseDynamic(field, value) {
            if (shouldApplyDynamicTyping(field)) {
                if (value === 'true' || value === 'TRUE') return true;
                else if (value === 'false' || value === 'FALSE') return false;
                else if (testFloat(value)) return parseFloat(value);
                else if (ISO_DATE.test(value)) return new Date(value);
                else return value === '' ? null : value;
            }
            return value;
        }
        function applyHeaderAndDynamicTypingAndTransformation() {
            if (!_results || !_config.header && !_config.dynamicTyping && !_config.transform) return _results;
            function processRow(rowSource, i) {
                var row = _config.header ? {} : [];
                var j;
                for(j = 0; j < rowSource.length; j++){
                    var field = j;
                    var value = rowSource[j];
                    if (_config.header) field = j >= _fields.length ? '__parsed_extra' : _fields[j];
                    if (_config.transform) value = _config.transform(value, field);
                    value = parseDynamic(field, value);
                    if (field === '__parsed_extra') {
                        row[field] = row[field] || [];
                        row[field].push(value);
                    } else row[field] = value;
                }
                if (_config.header) {
                    if (j > _fields.length) addError('FieldMismatch', 'TooManyFields', 'Too many fields: expected ' + _fields.length + ' fields but parsed ' + j, _rowCounter + i);
                    else if (j < _fields.length) addError('FieldMismatch', 'TooFewFields', 'Too few fields: expected ' + _fields.length + ' fields but parsed ' + j, _rowCounter + i);
                }
                return row;
            }
            var incrementBy = 1;
            if (!_results.data.length || Array.isArray(_results.data[0])) {
                _results.data = _results.data.map(processRow);
                incrementBy = _results.data.length;
            } else _results.data = processRow(_results.data, 0);
            if (_config.header && _results.meta) _results.meta.fields = _fields;
            _rowCounter += incrementBy;
            return _results;
        }
        function guessDelimiter(input, newline, skipEmptyLines, comments, delimitersToGuess) {
            var bestDelim, bestDelta, fieldCountPrevRow, maxFieldCount;
            delimitersToGuess = delimitersToGuess || [
                ',',
                '\t',
                '|',
                ';',
                Papa.RECORD_SEP,
                Papa.UNIT_SEP
            ];
            for(var i = 0; i < delimitersToGuess.length; i++){
                var delim = delimitersToGuess[i];
                var delta = 0, avgFieldCount = 0, emptyLinesCount = 0;
                fieldCountPrevRow = undefined;
                var preview = new Parser({
                    comments: comments,
                    delimiter: delim,
                    newline: newline,
                    preview: 10
                }).parse(input);
                for(var j = 0; j < preview.data.length; j++){
                    if (skipEmptyLines && testEmptyLine(preview.data[j])) {
                        emptyLinesCount++;
                        continue;
                    }
                    var fieldCount = preview.data[j].length;
                    avgFieldCount += fieldCount;
                    if (typeof fieldCountPrevRow === 'undefined') {
                        fieldCountPrevRow = fieldCount;
                        continue;
                    } else if (fieldCount > 0) {
                        delta += Math.abs(fieldCount - fieldCountPrevRow);
                        fieldCountPrevRow = fieldCount;
                    }
                }
                if (preview.data.length > 0) avgFieldCount /= preview.data.length - emptyLinesCount;
                if ((typeof bestDelta === 'undefined' || delta <= bestDelta) && (typeof maxFieldCount === 'undefined' || avgFieldCount > maxFieldCount) && avgFieldCount > 1.99) {
                    bestDelta = delta;
                    bestDelim = delim;
                    maxFieldCount = avgFieldCount;
                }
            }
            _config.delimiter = bestDelim;
            return {
                successful: !!bestDelim,
                bestDelimiter: bestDelim
            };
        }
        function addError(type, code, msg, row) {
            var error = {
                type: type,
                code: code,
                message: msg
            };
            if (row !== undefined) {
                error.row = row;
            }
            _results.errors.push(error);
        }
    }
    /** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions */ function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
    }
    /** The core parser implements speedy and correct CSV parsing */ function Parser(config) {
        // Unpack the config object
        config = config || {};
        var delim = config.delimiter;
        var newline = config.newline;
        var comments = config.comments;
        var step = config.step;
        var preview = config.preview;
        var fastMode = config.fastMode;
        var quoteChar;
        var renamedHeaders = null;
        var headerParsed = false;
        if (config.quoteChar === undefined || config.quoteChar === null) {
            quoteChar = '"';
        } else {
            quoteChar = config.quoteChar;
        }
        var escapeChar = quoteChar;
        if (config.escapeChar !== undefined) {
            escapeChar = config.escapeChar;
        }
        // Delimiter must be valid
        if (typeof delim !== 'string' || Papa.BAD_DELIMITERS.indexOf(delim) > -1) delim = ',';
        // Comment character must be valid
        if (comments === delim) throw new Error('Comment character same as delimiter');
        else if (comments === true) comments = '#';
        else if (typeof comments !== 'string' || Papa.BAD_DELIMITERS.indexOf(comments) > -1) comments = false;
        // Newline must be valid: \r, \n, or \r\n
        if (newline !== '\n' && newline !== '\r' && newline !== '\r\n') newline = '\n';
        // We're gonna need these at the Parser scope
        var cursor = 0;
        var aborted = false;
        this.parse = function(input, baseIndex, ignoreLastRow) {
            // For some reason, in Chrome, this speeds things up (!?)
            if (typeof input !== 'string') throw new Error('Input must be a string');
            // We don't need to compute some of these every time parse() is called,
            // but having them in a more local scope seems to perform better
            var inputLen = input.length, delimLen = delim.length, newlineLen = newline.length, commentsLen = comments.length;
            var stepIsFunction = isFunction(step);
            // Establish starting state
            cursor = 0;
            var data = [], errors = [], row = [], lastCursor = 0;
            if (!input) return returnable();
            if (fastMode || fastMode !== false && input.indexOf(quoteChar) === -1) {
                var rows = input.split(newline);
                for(var i = 0; i < rows.length; i++){
                    row = rows[i];
                    cursor += row.length;
                    if (i !== rows.length - 1) cursor += newline.length;
                    else if (ignoreLastRow) return returnable();
                    if (comments && row.substring(0, commentsLen) === comments) continue;
                    if (stepIsFunction) {
                        data = [];
                        pushRow(row.split(delim));
                        doStep();
                        if (aborted) return returnable();
                    } else pushRow(row.split(delim));
                    if (preview && i >= preview) {
                        data = data.slice(0, preview);
                        return returnable(true);
                    }
                }
                return returnable();
            }
            var nextDelim = input.indexOf(delim, cursor);
            var nextNewline = input.indexOf(newline, cursor);
            var quoteCharRegex = new RegExp(escapeRegExp(escapeChar) + escapeRegExp(quoteChar), 'g');
            var quoteSearch = input.indexOf(quoteChar, cursor);
            // Parser loop
            for(;;){
                // Field has opening quote
                if (input[cursor] === quoteChar) {
                    // Start our search for the closing quote where the cursor is
                    quoteSearch = cursor;
                    // Skip the opening quote
                    cursor++;
                    for(;;){
                        // Find closing quote
                        quoteSearch = input.indexOf(quoteChar, quoteSearch + 1);
                        //No other quotes are found - no other delimiters
                        if (quoteSearch === -1) {
                            if (!ignoreLastRow) {
                                // No closing quote... what a pity
                                errors.push({
                                    type: 'Quotes',
                                    code: 'MissingQuotes',
                                    message: 'Quoted field unterminated',
                                    row: data.length,
                                    index: cursor
                                });
                            }
                            return finish();
                        }
                        // Closing quote at EOF
                        if (quoteSearch === inputLen - 1) {
                            var value = input.substring(cursor, quoteSearch).replace(quoteCharRegex, quoteChar);
                            return finish(value);
                        }
                        // If this quote is escaped, it's part of the data; skip it
                        // If the quote character is the escape character, then check if the next character is the escape character
                        if (quoteChar === escapeChar && input[quoteSearch + 1] === escapeChar) {
                            quoteSearch++;
                            continue;
                        }
                        // If the quote character is not the escape character, then check if the previous character was the escape character
                        if (quoteChar !== escapeChar && quoteSearch !== 0 && input[quoteSearch - 1] === escapeChar) {
                            continue;
                        }
                        if (nextDelim !== -1 && nextDelim < quoteSearch + 1) {
                            nextDelim = input.indexOf(delim, quoteSearch + 1);
                        }
                        if (nextNewline !== -1 && nextNewline < quoteSearch + 1) {
                            nextNewline = input.indexOf(newline, quoteSearch + 1);
                        }
                        // Check up to nextDelim or nextNewline, whichever is closest
                        var checkUpTo = nextNewline === -1 ? nextDelim : Math.min(nextDelim, nextNewline);
                        var spacesBetweenQuoteAndDelimiter = extraSpaces(checkUpTo);
                        // Closing quote followed by delimiter or 'unnecessary spaces + delimiter'
                        if (input.substr(quoteSearch + 1 + spacesBetweenQuoteAndDelimiter, delimLen) === delim) {
                            row.push(input.substring(cursor, quoteSearch).replace(quoteCharRegex, quoteChar));
                            cursor = quoteSearch + 1 + spacesBetweenQuoteAndDelimiter + delimLen;
                            // If char after following delimiter is not quoteChar, we find next quote char position
                            if (input[quoteSearch + 1 + spacesBetweenQuoteAndDelimiter + delimLen] !== quoteChar) {
                                quoteSearch = input.indexOf(quoteChar, cursor);
                            }
                            nextDelim = input.indexOf(delim, cursor);
                            nextNewline = input.indexOf(newline, cursor);
                            break;
                        }
                        var spacesBetweenQuoteAndNewLine = extraSpaces(nextNewline);
                        // Closing quote followed by newline or 'unnecessary spaces + newLine'
                        if (input.substring(quoteSearch + 1 + spacesBetweenQuoteAndNewLine, quoteSearch + 1 + spacesBetweenQuoteAndNewLine + newlineLen) === newline) {
                            row.push(input.substring(cursor, quoteSearch).replace(quoteCharRegex, quoteChar));
                            saveRow(quoteSearch + 1 + spacesBetweenQuoteAndNewLine + newlineLen);
                            nextDelim = input.indexOf(delim, cursor); // because we may have skipped the nextDelim in the quoted field
                            quoteSearch = input.indexOf(quoteChar, cursor); // we search for first quote in next line
                            if (stepIsFunction) {
                                doStep();
                                if (aborted) return returnable();
                            }
                            if (preview && data.length >= preview) return returnable(true);
                            break;
                        }
                        // Checks for valid closing quotes are complete (escaped quotes or quote followed by EOF/delimiter/newline) -- assume these quotes are part of an invalid text string
                        errors.push({
                            type: 'Quotes',
                            code: 'InvalidQuotes',
                            message: 'Trailing quote on quoted field is malformed',
                            row: data.length,
                            index: cursor
                        });
                        quoteSearch++;
                        continue;
                    }
                    continue;
                }
                // Comment found at start of new line
                if (comments && row.length === 0 && input.substring(cursor, cursor + commentsLen) === comments) {
                    if (nextNewline === -1) return returnable();
                    cursor = nextNewline + newlineLen;
                    nextNewline = input.indexOf(newline, cursor);
                    nextDelim = input.indexOf(delim, cursor);
                    continue;
                }
                // Next delimiter comes before next newline, so we've reached end of field
                if (nextDelim !== -1 && (nextDelim < nextNewline || nextNewline === -1)) {
                    row.push(input.substring(cursor, nextDelim));
                    cursor = nextDelim + delimLen;
                    // we look for next delimiter char
                    nextDelim = input.indexOf(delim, cursor);
                    continue;
                }
                // End of row
                if (nextNewline !== -1) {
                    row.push(input.substring(cursor, nextNewline));
                    saveRow(nextNewline + newlineLen);
                    if (stepIsFunction) {
                        doStep();
                        if (aborted) return returnable();
                    }
                    if (preview && data.length >= preview) return returnable(true);
                    continue;
                }
                break;
            }
            return finish();
            //TURBOPACK unreachable
            ;
            function pushRow(row) {
                data.push(row);
                lastCursor = cursor;
            }
            /**
             * checks if there are extra spaces after closing quote and given index without any text
             * if Yes, returns the number of spaces
             */ function extraSpaces(index) {
                var spaceLength = 0;
                if (index !== -1) {
                    var textBetweenClosingQuoteAndIndex = input.substring(quoteSearch + 1, index);
                    if (textBetweenClosingQuoteAndIndex && textBetweenClosingQuoteAndIndex.trim() === '') {
                        spaceLength = textBetweenClosingQuoteAndIndex.length;
                    }
                }
                return spaceLength;
            }
            /**
			 * Appends the remaining input from cursor to the end into
			 * row, saves the row, calls step, and returns the results.
			 */ function finish(value) {
                if (ignoreLastRow) return returnable();
                if (typeof value === 'undefined') value = input.substring(cursor);
                row.push(value);
                cursor = inputLen; // important in case parsing is paused
                pushRow(row);
                if (stepIsFunction) doStep();
                return returnable();
            }
            /**
			 * Appends the current row to the results. It sets the cursor
			 * to newCursor and finds the nextNewline. The caller should
			 * take care to execute user's step function and check for
			 * preview and end parsing if necessary.
			 */ function saveRow(newCursor) {
                cursor = newCursor;
                pushRow(row);
                row = [];
                nextNewline = input.indexOf(newline, cursor);
            }
            /** Returns an object with the results, errors, and meta. */ function returnable(stopped) {
                if (config.header && !baseIndex && data.length && !headerParsed) {
                    const result = data[0];
                    const headerCount = Object.create(null); // To track the count of each base header
                    const usedHeaders = new Set(result); // To track used headers and avoid duplicates
                    let duplicateHeaders = false;
                    for(let i = 0; i < result.length; i++){
                        let header = result[i];
                        if (isFunction(config.transformHeader)) header = config.transformHeader(header, i);
                        if (!headerCount[header]) {
                            headerCount[header] = 1;
                            result[i] = header;
                        } else {
                            let newHeader;
                            let suffixCount = headerCount[header];
                            // Find a unique new header
                            do {
                                newHeader = `${header}_${suffixCount}`;
                                suffixCount++;
                            }while (usedHeaders.has(newHeader))
                            usedHeaders.add(newHeader); // Mark this new Header as used
                            result[i] = newHeader;
                            headerCount[header]++;
                            duplicateHeaders = true;
                            if (renamedHeaders === null) {
                                renamedHeaders = {};
                            }
                            renamedHeaders[newHeader] = header;
                        }
                        usedHeaders.add(header); // Ensure the original header is marked as used
                    }
                    if (duplicateHeaders) {
                        console.warn('Duplicate headers found and renamed.');
                    }
                    headerParsed = true;
                }
                return {
                    data: data,
                    errors: errors,
                    meta: {
                        delimiter: delim,
                        linebreak: newline,
                        aborted: aborted,
                        truncated: !!stopped,
                        cursor: lastCursor + (baseIndex || 0),
                        renamedHeaders: renamedHeaders
                    }
                };
            }
            /** Executes the user's step function and resets data & errors. */ function doStep() {
                step(returnable());
                data = [];
                errors = [];
            }
        };
        /** Sets the abort flag */ this.abort = function() {
            aborted = true;
        };
        /** Gets the cursor position */ this.getCharIndex = function() {
            return cursor;
        };
    }
    function newWorker() {
        if (!Papa.WORKERS_SUPPORTED) return false;
        var workerUrl = getWorkerBlob();
        var w = new global.Worker(workerUrl);
        w.onmessage = mainThreadReceivedMessage;
        w.id = workerIdCounter++;
        workers[w.id] = w;
        return w;
    }
    /** Callback when main thread receives a message */ function mainThreadReceivedMessage(e) {
        var msg = e.data;
        var worker = workers[msg.workerId];
        var aborted = false;
        if (msg.error) worker.userError(msg.error, msg.file);
        else if (msg.results && msg.results.data) {
            var abort = function() {
                aborted = true;
                completeWorker(msg.workerId, {
                    data: [],
                    errors: [],
                    meta: {
                        aborted: true
                    }
                });
            };
            var handle = {
                abort: abort,
                pause: notImplemented,
                resume: notImplemented
            };
            if (isFunction(worker.userStep)) {
                for(var i = 0; i < msg.results.data.length; i++){
                    worker.userStep({
                        data: msg.results.data[i],
                        errors: msg.results.errors,
                        meta: msg.results.meta
                    }, handle);
                    if (aborted) break;
                }
                delete msg.results; // free memory ASAP
            } else if (isFunction(worker.userChunk)) {
                worker.userChunk(msg.results, handle, msg.file);
                delete msg.results;
            }
        }
        if (msg.finished && !aborted) completeWorker(msg.workerId, msg.results);
    }
    function completeWorker(workerId, results) {
        var worker = workers[workerId];
        if (isFunction(worker.userComplete)) worker.userComplete(results);
        worker.terminate();
        delete workers[workerId];
    }
    function notImplemented() {
        throw new Error('Not implemented.');
    }
    /** Callback when worker thread receives a message */ function workerThreadReceivedMessage(e) {
        var msg = e.data;
        if (typeof Papa.WORKER_ID === 'undefined' && msg) Papa.WORKER_ID = msg.workerId;
        if (typeof msg.input === 'string') {
            global.postMessage({
                workerId: Papa.WORKER_ID,
                results: Papa.parse(msg.input, msg.config),
                finished: true
            });
        } else if (global.File && msg.input instanceof File || msg.input instanceof Object) {
            var results = Papa.parse(msg.input, msg.config);
            if (results) global.postMessage({
                workerId: Papa.WORKER_ID,
                results: results,
                finished: true
            });
        }
    }
    /** Makes a deep copy of an array or object (mostly) */ function copy(obj) {
        if (typeof obj !== 'object' || obj === null) return obj;
        var cpy = Array.isArray(obj) ? [] : {};
        for(var key in obj)cpy[key] = copy(obj[key]);
        return cpy;
    }
    function bindFunction(f, self1) {
        return function() {
            f.apply(self1, arguments);
        };
    }
    function isFunction(func) {
        return typeof func === 'function';
    }
    return Papa;
});
}),
"[project]/node_modules/@tauri-apps/plugin-sql/dist-js/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Database
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tauri-apps/api/core.js [app-ssr] (ecmascript)");
;
// Copyright 2019-2023 Tauri Programme within The Commons Conservancy
// SPDX-License-Identifier: Apache-2.0
// SPDX-License-Identifier: MIT
/**
 * **Database**
 *
 * The `Database` class serves as the primary interface for
 * communicating with the rust side of the sql plugin.
 */ class Database {
    constructor(path){
        this.path = path;
    }
    /**
     * **load**
     *
     * A static initializer which connects to the underlying database and
     * returns a `Database` instance once a connection to the database is established.
     *
     * # Sqlite
     *
     * The path is relative to `tauri::path::BaseDirectory::App` and must start with `sqlite:`.
     *
     * @example
     * ```ts
     * const db = await Database.load("sqlite:test.db");
     * ```
     */ static async load(path) {
        const _path = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invoke"])('plugin:sql|load', {
            db: path
        });
        return new Database(_path);
    }
    /**
     * **get**
     *
     * A static initializer which synchronously returns an instance of
     * the Database class while deferring the actual database connection
     * until the first invocation or selection on the database.
     *
     * # Sqlite
     *
     * The path is relative to `tauri::path::BaseDirectory::App` and must start with `sqlite:`.
     *
     * @example
     * ```ts
     * const db = Database.get("sqlite:test.db");
     * ```
     */ static get(path) {
        return new Database(path);
    }
    /**
     * **execute**
     *
     * Passes a SQL expression to the database for execution.
     *
     * @example
     * ```ts
     * // for sqlite & postgres
     * // INSERT example
     * const result = await db.execute(
     *    "INSERT into todos (id, title, status) VALUES ($1, $2, $3)",
     *    [ todos.id, todos.title, todos.status ]
     * );
     * // UPDATE example
     * const result = await db.execute(
     *    "UPDATE todos SET title = $1, completed = $2 WHERE id = $3",
     *    [ todos.title, todos.status, todos.id ]
     * );
     *
     * // for mysql
     * // INSERT example
     * const result = await db.execute(
     *    "INSERT into todos (id, title, status) VALUES (?, ?, ?)",
     *    [ todos.id, todos.title, todos.status ]
     * );
     * // UPDATE example
     * const result = await db.execute(
     *    "UPDATE todos SET title = ?, completed = ? WHERE id = ?",
     *    [ todos.title, todos.status, todos.id ]
     * );
     * ```
     */ async execute(query, bindValues) {
        const [rowsAffected, lastInsertId] = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invoke"])('plugin:sql|execute', {
            db: this.path,
            query,
            values: bindValues ?? []
        });
        return {
            lastInsertId,
            rowsAffected
        };
    }
    /**
     * **select**
     *
     * Passes in a SELECT query to the database for execution.
     *
     * @example
     * ```ts
     * // for sqlite & postgres
     * const result = await db.select(
     *    "SELECT * from todos WHERE id = $1", [ id ]
     * );
     *
     * // for mysql
     * const result = await db.select(
     *    "SELECT * from todos WHERE id = ?", [ id ]
     * );
     * ```
     */ async select(query, bindValues) {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invoke"])('plugin:sql|select', {
            db: this.path,
            query,
            values: bindValues ?? []
        });
        return result;
    }
    /**
     * **close**
     *
     * Closes the database connection pool.
     *
     * @example
     * ```ts
     * const success = await db.close()
     * ```
     * @param db - Optionally state the name of a database if you are managing more than one. Otherwise, all database pools will be in scope.
     */ async close(db) {
        const success = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invoke"])('plugin:sql|close', {
            db
        });
        return success;
    }
}
;
}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mergeClasses",
    ()=>mergeClasses
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
;
 //# sourceMappingURL=mergeClasses.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toKebabCase",
    ()=>toKebabCase
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
;
 //# sourceMappingURL=toKebabCase.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toCamelCase",
    ()=>toCamelCase
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const toCamelCase = (string)=>string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2)=>p2 ? p2.toUpperCase() : p1.toLowerCase());
;
 //# sourceMappingURL=toCamelCase.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toPascalCase",
    ()=>toPascalCase
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toCamelCase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.js [app-ssr] (ecmascript)");
;
const toPascalCase = (string)=>{
    const camelCase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toCamelCase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toCamelCase"])(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
;
 //# sourceMappingURL=toPascalCase.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasA11yProp",
    ()=>hasA11yProp
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hasA11yProp = (props)=>{
    for(const prop in props){
        if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
            return true;
        }
    }
    return false;
};
;
 //# sourceMappingURL=hasA11yProp.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/Icon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Icon
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$hasA11yProp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.js [app-ssr] (ecmascript)");
;
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...!children && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$hasA11yProp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasA11yProp"])(rest) && {
            "aria-hidden": "true"
        },
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]));
;
 //# sourceMappingURL=Icon.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toKebabCase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toPascalCase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/Icon.js [app-ssr] (ecmascript)");
;
;
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toKebabCase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toKebabCase"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toPascalCase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName))}`, `lucide-${iconName}`, className),
            ...props
        }));
    Component.displayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toPascalCase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName);
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Search
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m21 21-4.34-4.34",
            key: "14j7rj"
        }
    ],
    [
        "circle",
        {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }
    ]
];
const Search = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("search", __iconNode);
;
 //# sourceMappingURL=search.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Search",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Settings
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
            key: "1i5ecw"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }
    ]
];
const Settings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("settings", __iconNode);
;
 //# sourceMappingURL=settings.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as Settings>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Settings",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>User
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
            key: "975kel"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "7",
            r: "4",
            key: "17ys0d"
        }
    ]
];
const User = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("user", __iconNode);
;
 //# sourceMappingURL=user.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "User",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clsx",
    ()=>clsx,
    "default",
    ()=>__TURBOPACK__default__export__
]);
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
        var o = e.length;
        for(t = 0; t < o; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for(f in e)e[f] && (n && (n += " "), n += f);
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = "", o = arguments.length; f < o; f++)(e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
const __TURBOPACK__default__export__ = clsx;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d2500bc6._.js.map