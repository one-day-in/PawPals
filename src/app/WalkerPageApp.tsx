import { WalkerProfilePage } from '@/pages/walker-profile';
import { AppHeader } from '@/shared/ui/AppHeader';

export const WalkerPageApp = () => {
  return (
    <div className="app-root">
      <AppHeader activePage="walker" />
      <main className="content-shell">
        <div className="content-shell__inner">
          <WalkerProfilePage />
        </div>
      </main>
    </div>
  );
};

