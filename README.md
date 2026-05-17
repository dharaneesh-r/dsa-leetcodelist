# DSA with Java — Interactive Roadmap

> 300+ curated LeetCode problems organized by pattern. Multi-language code templates, progress tracking, spaced repetition, and offline support — all in a single HTML file.

🔗 **Live site:** [https://dharaneesh-r.github.io/dsa-roadmap/](https://dharaneesh-r.github.io/dsa-roadmap/)

---

## ✨ Features

### 📚 Curated content
- **300+ LeetCode problems** organized into 18 patterns (Arrays, Two Pointers, Sliding Window, BFS, DFS, DP, Backtracking, Tries, and more)
- **Pattern-specific Java code templates** that you can copy and adapt
- **Language toggle**: switch templates and cheat sheets between **Java**, **Python**, and **C++**
- **Big-O complexity reference** and **Collections / STL cheat sheets**
- **Direct LeetCode links** on every problem
- **NeetCode video search** links for instant help when stuck
- **Company tags** so you can filter by Amazon, Google, Meta, Microsoft, Apple, Flipkart, and more

### 🎯 Progress tracking
- **Checkbox-based progress** stored in your browser (no account, no sync risk)
- **Star/bookmark** important problems for revisit
- **Notes per problem** — a private scratchpad for your approach and gotchas
- **Per-problem timer** to track how long you spent
- **Difficulty progress bars** for each pattern (easy / medium / hard breakdown)
- **Day streak counter** and **14-day activity heatmap**
- **Confetti celebrations** at milestones (10, 25, 50, 75, 100, 125, 150, 175, 200 problems)

### 🔁 Spaced repetition
- Solved problems automatically resurface for review after 7 days
- Click the **🔁 Review** badge after reviewing to push the next review out (7 → 14 → 28 → 56 → 90 days)
- Dedicated **🔁 To Review** filter and dashboard stat to focus your study sessions

### 🎲 Smart filters
- **Search** by problem name or LeetCode number
- **Filter by difficulty** (Easy / Medium / Hard)
- **Filter by status** (To do / Done / ⭐ Starred / 🔁 To Review)
- **Filter by company** (Amazon, Google, Meta, etc.)
- **🎲 Random** button picks a random unsolved problem
- **Problem of the Day** banner gives you a deterministic daily pick

### 💾 Data control
- **Export to JSON** to back up all your progress, stars, notes, and timer data
- **Import from JSON** to restore on another device or browser
- **Reset** wipes everything (with confirmation)
- All data stored in `localStorage` — completely private, never leaves your browser

### 🎨 UX & accessibility
- **Light / dark theme** toggle
- **Compact layout** mode for power users
- **Keyboard shortcuts**: `/` to focus search, `j` / `k` to navigate problems, `x` to toggle done
- **Sticky table of contents** sidebar for jumping between patterns
- **Mobile responsive** — works great on phone, tablet, desktop
- **Semantic HTML** with ARIA labels for screen readers

### 📱 PWA (Progressive Web App)
- **Install as an app** on desktop, iOS, and Android
- **Works offline** after first load (service worker caches the shell)
- No app store, no install fees — just open the site and install

---

## 🚀 Getting started

### Online (recommended)
Just visit the [live site](https://yourusername.github.io/dsa-roadmap/) and start solving. Your progress is automatically saved to your browser.

### Local
```bash
git clone https://github.com/yourusername/dsa-roadmap.git
cd dsa-roadmap
python3 -m http.server 8000
# Open http://localhost:8000 in your browser
```

> **Note:** The service worker won't register on `file://` URLs. You need to serve the files over HTTP (the `python3 -m http.server` command above, or any other local server).

### Install as a PWA
1. Open the live site in Chrome, Edge, or Safari
2. Look for the install prompt in the address bar (Chrome / Edge) or "Add to Home Screen" (iOS Safari)
3. The app will appear in your applications / home screen and work offline

---

## 📖 How to use it effectively

### For beginners
1. Start with **Pattern 1: Arrays & Hashing** — solve all easy problems first
2. Open the **Show Java Template** for each pattern to learn the canonical approach
3. Mark problems as done with the checkbox
4. After solving, click **📝** to write a one-line summary of your approach (you'll thank yourself in 2 weeks)

### For interview prep
1. Filter by your target company (e.g., "Amazon") to see what they actually ask
2. Solve the **medium** problems first — that's the bulk of real interviews
3. **Star** problems you found tricky for revisit
4. Use the **🔁 To Review** filter daily — spaced repetition is the single highest-leverage habit
5. Track your time per problem; aim for the ~25-minute interview benchmark

### Recommended schedule
A 12-week plan with roughly 1–2 hours per day:

| Week | Topics | Problems |
|------|--------|----------|
| 1 | Java foundations + Complexity analysis | 5 |
| 2 | Arrays + Two pointers + Sliding window | 15 |
| 3 | Strings + Hash maps + Hash sets | 15 |
| 4 | Linked lists + Stacks + Queues + Binary search | 15 |
| 5 | Trees: traversals + basic problems | 12 |
| 6 | BSTs + Heaps + Priority queues | 13 |
| 7 | Recursion fundamentals + Subsets/permutations | 10 |
| 8 | Backtracking: N-Queens, Sudoku, word search | 10 |
| 9 | Graphs: BFS, DFS, topological sort | 10 |
| 10 | Graphs: Dijkstra, Union-Find, advanced | 10 |
| 11 | DP basics: 1D + 2D (Fibonacci-style, grids) | 15 |
| 12 | DP advanced: knapsack, LCS, edit distance | 15 |

---

## 🛠 Tech stack

- **Pure HTML, CSS, and vanilla JavaScript** — no frameworks, no build step
- **localStorage** for persistence — no backend required
- **Service worker** for offline support and PWA installability
- **canvas-confetti** for milestone celebrations (loaded from CDN)

That's it. The whole thing is one HTML file you can read end-to-end.

---

## 📁 File structure

```
dsa-roadmap/
├── index.html        (or index.html — the main app)
├── manifest.json     (PWA configuration)
├── sw.js             (service worker for offline support)
└── README.md         (this file)
```

All three files must live in the same directory for the PWA to work correctly.

---

## ⌨️ Keyboard shortcuts

| Key | Action |
|-----|--------|
| `/` | Focus the search box |
| `j` | Move focus to next problem |
| `k` | Move focus to previous problem |
| `x` | Toggle done on the focused problem |
| `Esc` | Close any open modal |

---

## 🤝 Contributing

This is a personal study tracker, but feedback and contributions are welcome:

- **Found a wrong slug or broken LeetCode link?** Open an issue or PR with the fix
- **Want to add a pattern or problem?** PRs welcome — keep the data format consistent with the existing `PATTERNS` array in the HTML
- **Translation requests?** I'm open to a Hindi / Spanish / Chinese version if there's interest

---

## 📜 License

MIT — use it, fork it, modify it, ship it. Attribution appreciated but not required.

---

## 🙏 Credits

- **NeetCode** for the seminal Blind 75 / NeetCode 150 problem curation
- **Striver (takeUforward)** for the SDE Sheet inspiration
- **LeetCode** for the problem platform
- **canvas-confetti** by Kiril Vatev for the celebration effects

---

## 💡 Why I built this

Existing DSA trackers are either expensive subscriptions, locked behind accounts, or paywall the basic features. I wanted something that:

1. **Just works** in a single HTML file — no install, no account, no friction
2. Respects your **privacy** — all data stays in your browser
3. Has a **modern, polished UI** that doesn't feel like a 2015 spreadsheet
4. Supports **multiple languages** (Java, Python, C++) without bloat
5. Encourages **long-term retention** with spaced repetition, not just one-time solving

If it helps even one person crack their interview, the project is worth it.

---

**Good luck with your interview prep!** 🚀 Star the repo if you found it useful.