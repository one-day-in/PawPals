# Icon Style Guide (Mandatory)

## Mandatory rule
All icon visual semantics (icon name + color tone) MUST be defined in centralized maps.
Direct hardcoded icon names/tones inside page sections are forbidden.

## Source of truth
- `src/pages/walker-profile/model/iconMaps.ts`
  - `WALKER_FACT_ICON_MAP`
  - `WALKER_SERVICE_ICON_MAP`

## Rendering contract
- Use `AppIcon` only.
- Pass `name` and `tone` from centralized map entries.
- Do not set icon color with section-level CSS selectors like `svg { color: ... }`.

## Tone palette
- `accent` -> blue (`--icon-accent`)
- `success` -> green (`--icon-success`)
- `warning` -> amber (`--icon-warning`)
- `muted` -> gray (`--icon-muted`)
- `danger` -> red (`--icon-danger`)
- Icon tones are resolved from `src/app/styles/tokens.css`; do not assign custom hex/rgb in section CSS.

## Extension rule
When adding any new block with icons:
1. Add/extend mapping in `iconMaps.ts`.
2. Reuse existing tones, avoid new ad-hoc colors.
3. Render via `AppIcon` using mapped values.
