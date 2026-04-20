# Owner Profile Data Model

## Source of truth
- `mock/owner-profile.json` is the dedicated owner profile JSON source.
- `mock/db.json` contains `ownerProfile` for json-server API serving.

## Fetch pattern (same as Walker)
- Owner page data is loaded from API via `entities/owner/api/ownerApi.ts`.
- Hook `entities/owner/model/useOwnerProfile.ts` handles async loading + fallback.
- Page sections only render from typed data props.

## Composition rules
- Page: `pages/owner-profile/ui/OwnerProfilePage.tsx`
- Section components are isolated and data-driven.
- Icons and visual variants are defined by data fields/maps, not hardcoded markup.
