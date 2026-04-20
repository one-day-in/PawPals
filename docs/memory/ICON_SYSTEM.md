# Icon System Memory

Source files provided by user:
- `/Users/oneday_in/Downloads/icon-export/lucide-manifest.json`
- `/Users/oneday_in/Downloads/icon-export/icon-node-mapping.csv`

## Allowed icons
- Use only icons listed in `lucide-manifest.json`.
- Central whitelist lives in `src/shared/icons/allowedIcons.ts`.
- Rendering wrapper lives in `src/shared/icons/AppIcon.tsx`.
- Avoid raw emoji/glyph symbols for icons in UI.

## Centralized icon color rules
- Use `AppIcon` `tone` prop instead of local `svg { color: ... }` CSS.
- Available tones:
  - `default` -> `--icon-default`
  - `accent` -> `--icon-accent`
  - `success` -> `--icon-success`
  - `warning` -> `--icon-warning`
  - `muted` -> `--icon-muted`
  - `danger` -> `--icon-danger`

## Tone usage mapping
- Status positive (online, completed): `success`
- Rating stars and warning markers: `warning`
- Neutral utility icons (search, metadata): `muted`
- Main UI semantic icons: `accent`

## Mandatory enforcement
- Icon semantics for Walker Profile are defined only in `src/pages/walker-profile/model/iconMaps.ts`.
- UI sections must import map entries and cannot hardcode icon name/tone pairs inline.
