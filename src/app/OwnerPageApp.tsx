import { OwnerProfilePage } from '@/pages/owner-profile';
import { AppHeader } from '@/shared/ui/AppHeader';

export const OwnerPageApp = () => {
  return (
    <div className="app-root">
      <AppHeader activePage="owner" />
      <main className="content-shell">
        <div className="content-shell__inner">
          <OwnerProfilePage />
        </div>
      </main>
    </div>
  );
};

