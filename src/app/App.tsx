import { useState } from 'react';

import { CompanyProfilePage } from '@/pages/company-profile';
import { OwnerProfilePage } from '@/pages/owner-profile';
import { WalkerProfilePage } from '@/pages/walker-profile';
import { AppHeader } from '@/shared/ui/AppHeader';

type PageKey = 'walker' | 'company' | 'owner';

export const App = () => {
  const [activePage, setActivePage] = useState<PageKey>('owner');

  return (
    <div className="app-root">
      <AppHeader activePage={activePage} onNavigate={setActivePage} />
      <main className="content-shell">
        <div className="content-shell__inner">
          <div className="page-switcher" aria-label="Page switcher">
            <button className={`page-switcher__btn ${activePage === 'walker' ? 'is-active' : ''}`} onClick={() => setActivePage('walker')}>
              Walker
            </button>
            <button className={`page-switcher__btn ${activePage === 'company' ? 'is-active' : ''}`} onClick={() => setActivePage('company')}>
              Company
            </button>
            <button className={`page-switcher__btn ${activePage === 'owner' ? 'is-active' : ''}`} onClick={() => setActivePage('owner')}>
              Owner
            </button>
          </div>

          {activePage === 'walker' && <WalkerProfilePage />}
          {activePage === 'company' && <CompanyProfilePage />}
          {activePage === 'owner' && <OwnerProfilePage />}
        </div>
      </main>
    </div>
  );
};
