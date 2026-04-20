# Owner Profile Desktop Integration

Source mockup imported from:
- `/Users/oneday_in/Downloads/owner-profile-desktop-react`

## Implemented page
- `src/pages/owner-profile/ui/OwnerProfilePage.tsx`
- Sections:
  - OwnerMainCardSection
  - OwnerScheduleSection
  - OwnerReputationSection
  - OwnerProvidersSection
  - OwnerPreferencesSection
  - OwnerMonthSection

## Data source
- `src/entities/owner/model/ownerMock.ts`
- `src/entities/owner/model/useOwnerProfile.ts`
- `src/entities/owner/model/types.ts`

## Styling
- `src/app/styles/sections/owner-profile.css`
- Reuses shared primitives (`Card`, `SectionHeader`, `Badge`).

## Current app connection
- `src/app/App.tsx` currently renders `OwnerProfilePage` for active desktop implementation work.
