# Multi-Page Entry (No Router)

Current mode uses separate HTML entry points (Vite multi-page) instead of local state switching.

Available pages:
- `/walker.html`
- `/company.html`
- `/owner.html`

Entry files:
- `src/main.tsx` -> walker
- `src/main-company.tsx` -> company
- `src/main-owner.tsx` -> owner

Navigation:
- Header buttons navigate by URL to dedicated page entries.
