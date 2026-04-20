import { useOwnerProfile } from '@/entities/owner';
import { OwnerMainCardSection } from '@/pages/owner-profile/ui/sections/OwnerMainCardSection';
import { OwnerMonthSection } from '@/pages/owner-profile/ui/sections/OwnerMonthSection';
import { OwnerPreferencesSection } from '@/pages/owner-profile/ui/sections/OwnerPreferencesSection';
import { OwnerProvidersSection } from '@/pages/owner-profile/ui/sections/OwnerProvidersSection';
import { OwnerReputationSection } from '@/pages/owner-profile/ui/sections/OwnerReputationSection';
import { OwnerScheduleSection } from '@/pages/owner-profile/ui/sections/OwnerScheduleSection';
import { AppIcon } from '@/shared/icons/AppIcon';

export const OwnerProfilePage = () => {
  const { data, isLoading } = useOwnerProfile();

  return (
    <div className="body-layout owner-layout">
      <section className="column content-placeholder--left">
        {isLoading && <p className="data-state">Loading profile...</p>}
        <OwnerMainCardSection data={data.owner} />
        <div className="owner-mobile-reputation">
          <OwnerReputationSection data={data.reputation} />
        </div>
        <OwnerScheduleSection data={data.schedule} />
      </section>

      <aside className="column content-placeholder--right">
        <OwnerReputationSection data={data.reputation} />
        <OwnerProvidersSection data={data.providers} />
        <OwnerPreferencesSection data={data.preferences} />
        <OwnerMonthSection data={data.month} />
      </aside>

      <footer className="mobile-bottom-bar mobile-bottom-bar--owner">
        <div className="mobile-bottom-bar__slot">
          <span>Next: {data.schedule.upcoming[0]?.time ?? 'No events scheduled'}</span>
          <strong>{data.schedule.upcoming[0]?.title ?? 'Your schedule'}</strong>
        </div>
        <button className="mobile-bottom-bar__secondary">
          <AppIcon name="pencil" tone="muted" size={14} />
          Edit Profile
        </button>
      </footer>
    </div>
  );
};
