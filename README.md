# Folioli 🌿

A modern, privacy-focused Personal Finance Tracker built for desktop.

## Overview
Folioli is a desktop application designed to help you track your income and expenses with ease. It features automated category mapping, intuitive data visualization, and keeps your data 100% local on your machine.

## Tech Stack
- **Framework:** [Tauri](https://tauri.app/) (v2)
- **Frontend:** [Next.js](https://nextjs.org/) (React 19)
- **Language:** TypeScript
- **Database:** SQLite (local storage)
- **Styling:** TailwindCSS

## Features
- 📊 **Transaction Tracking:** Easily import and manage your financial transactions.
- 🏷️ **Smart Categorization:** Learns from your edits to automatically map future transactions.
- 📈 **Visualizations:** Insightful charts to track income vs. expenses.
- 🔒 **Privacy First:** All data is stored locally in an SQLite database. No cloud uploads.

## Development

### Prerequisites
- Node.js (v20+)
- Rust (for Tauri backend)

### Setup
1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```
   This will start the Next.js frontend and the Tauri desktop window.

## Recommended IDE Setup
- [VS Code](https://code.visualstudio.com/) 
- [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode)
- [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)
