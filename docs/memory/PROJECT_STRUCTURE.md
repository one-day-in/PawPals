# Project Structure Standard (React + TypeScript + Vite)

## Root
- `frontend-app/` is the only active frontend application.
- Any source code outside `frontend-app/src` is considered accidental noise.

## Source Layers (`src`)
- `app/` - app entry, global styles, app-level composition.
- `pages/` - route/page-level composition (`walker-profile`, `company-profile`, `owner-profile`).
- `widgets/` - cross-page composite UI blocks.
- `features/` - user actions/use-cases (booking, filters, etc.).
- `entities/` - business domain models (`walker`, `company`, `owner`).
- `shared/` - reusable infrastructure and primitives.

## Current Domain Placement
- `entities/walker/model` - walker types, mock, hooks.
- `entities/walker/api` - walker API calls.
- `pages/walker-profile/ui` - Walker profile page and its visual sections.
- `shared/api/http.ts` - axios instance.
- `shared/ui` - global reusable UI (header, etc.).
- `shared/icons` - icon system.
- `shared/utils` - formatters and helpers.

## Conventions
- Page-specific sections stay under the page folder.
- Domain logic and types stay in `entities/<domain>/model`.
- Network requests stay in `entities/<domain>/api` or `shared/api`.
- Avoid duplicate folders/files outside this structure.
