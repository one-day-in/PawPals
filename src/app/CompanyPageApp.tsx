import { CompanyProfilePage } from '@/pages/company-profile';
import { AppHeader } from '@/shared/ui/AppHeader';

export const CompanyPageApp = () => {
  return (
    <div className="app-root">
      <AppHeader activePage="company" />
      <main className="content-shell">
        <div className="content-shell__inner">
          <CompanyProfilePage />
        </div>
      </main>
    </div>
  );
};

