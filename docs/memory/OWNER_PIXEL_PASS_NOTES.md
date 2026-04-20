# Owner Desktop Pixel Pass Notes

Reference sources:
- `/Users/oneday_in/Downloads/owner-profile-desktop.full.html`
- `/Users/oneday_in/Downloads/owner-profile-desktop.full.css`
- Screenshot: `Screenshot 2026-04-20 at 15.47.45.png`

Implemented updates:
- Added missing iconized blocks and icon colors for owner sections.
- Added live status strip in `Owner Reputation`.
- Reworked schedule cards with colored icon bubbles and highlighted first event.
- Reworked past services with status check icon.
- Refined owner header card spacing/typography/chips to match template.

Data flow:
- Dedicated source: `mock/owner-profile.json`.
- API source served via `mock/db.json` -> `ownerProfile`.
- Hook/API pattern mirrors walker profile implementation.
