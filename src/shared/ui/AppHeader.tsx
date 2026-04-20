import { AppIcon } from '@/shared/icons/AppIcon';

interface AppHeaderProps {
  activePage?: 'walker' | 'company' | 'owner';
  onNavigate?: (page: 'walker' | 'company' | 'owner') => void;
}

export const AppHeader = ({ activePage = 'walker', onNavigate }: AppHeaderProps) => {
  const navigateTo = (page: 'walker' | 'company' | 'owner') => {
    if (onNavigate) {
      onNavigate(page);
      return;
    }

    window.location.href = `${import.meta.env.BASE_URL}${page}.html`;
  };

  const mobileTitle = activePage === 'walker' ? 'Profile' : activePage === 'company' ? 'Brooklyn Paws Co' : 'My Profile';

  return (
    <header className="app-header">
      <div className="layout-shell app-header__inner">
        <div className={`app-header__mobile app-header__mobile--${activePage}`}>
          <button className="app-header__mobile-btn" aria-label="Back">
            <AppIcon name="arrow-left" tone="default" size={18} />
          </button>
          <span className="app-header__mobile-title">{mobileTitle}</span>
          <div className="app-header__mobile-actions">
            {activePage === 'walker' && (
              <>
                <button className="app-header__mobile-btn" aria-label="Share">
                  <AppIcon name="share-2" tone="muted" size={16} />
                </button>
                <button className="app-header__mobile-btn" aria-label="Save">
                  <AppIcon name="heart" tone="muted" size={16} />
                </button>
              </>
            )}
            {activePage === 'company' && <button className="app-header__mobile-link">Share</button>}
            {activePage === 'owner' && (
              <button className="app-header__mobile-btn" aria-label="Settings">
                <AppIcon name="settings" tone="muted" size={16} />
              </button>
            )}
          </div>
        </div>

        <div className="app-header__brand">
          <span className="app-header__logo">PawPals</span>
        </div>

        <nav className="app-header__nav" aria-label="Primary">
          <button className={`app-header__nav-item ${activePage === 'walker' ? 'is-active' : ''}`} onClick={() => navigateTo('walker')}>
            Find Providers
          </button>
          <button className={`app-header__nav-item ${activePage === 'company' ? 'is-active' : ''}`} onClick={() => navigateTo('company')}>
            Companies
          </button>
          <button className="app-header__nav-item">How It Works</button>
          <button className="app-header__nav-item">Safety</button>
        </nav>

        <div className="app-header__spacer" />

        <div className="app-header__actions">
          <label className="app-header__search-wrap" aria-label="Search">
            <AppIcon name="search" tone="muted" size={14} strokeWidth={2} className="app-header__search-icon" />
            <input className="app-header__search" placeholder="Search..." aria-label="Search" />
          </label>
          <button className="app-header__auth">Log In</button>
          <button className="app-header__signup">Sign Up</button>
        </div>
      </div>
    </header>
  );
};
