# Reusable UI System

## Goal
Centralize reusable UI blocks to avoid repeated markup and style drift.

## Shared primitives
- `src/shared/ui/Card.tsx`
- `src/shared/ui/SectionHeader.tsx`
- `src/shared/ui/Button.tsx`
- `src/shared/ui/Badge.tsx`
- `src/shared/icons/AppIcon.tsx`

## Shared style layers
- `src/app/styles/components/primitives.css`
- `src/app/styles/components/icon.css`
- Imported via `src/app/styles/components.css`.
- Global tokens source of truth: `src/app/styles/tokens.css`

## Rules for new code
- Use shared primitives first; avoid direct raw `card/btn/badge` markup duplication.
- For icons, pass semantic tone via `AppIcon` instead of section-level color CSS.
- Keep section CSS only for layout/spacing specifics, not design-token decisions.
- No hardcoded colors in section styles (`#hex`, `rgb(...)`) and no inline style objects in TSX for visual styling.
- All colors must come from CSS variables in `tokens.css` (including overlays, gradients, states, and neutral fills).
- Icon name + tone pairs must come from centralized maps in page/domain `model` folders (e.g. `walker-profile/model/iconMaps.ts`).
