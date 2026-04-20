# Company Profile Implementation Notes

Reference source:
- `/Users/oneday_in/Downloads/company-profile-desktop.html`
- `/Users/oneday_in/Downloads/company-profile-desktop.css`

## Data flow
- Dedicated mock source: `mock/company-profile.json`
- API served via `mock/db.json` field: `companyProfile`
- Hook/API pattern mirrors walker and owner:
  - `entities/company/api/companyApi.ts`
  - `entities/company/model/useCompanyProfile.ts`

## Rendering
- Page: `pages/company-profile/ui/CompanyProfilePage.tsx`
- Uses shared primitives: `Card`, `SectionHeader`, `Button`, `Badge`, `AppIcon`.
- Sections and classes aligned to desktop reference structure.

## Styling
- `src/app/styles/sections/company-profile.css`
- Keeps centralized design tokens and shared UI primitives.
