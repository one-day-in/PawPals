import { useWalkerProfile } from '@/entities/walker';
import { CompanyAffiliationSection } from '@/pages/walker-profile/ui/sections/CompanyAffiliationSection';
import { ProfessionalFactsSection } from '@/pages/walker-profile/ui/sections/ProfessionalFactsSection';
import { RecentServiceHistorySection } from '@/pages/walker-profile/ui/sections/RecentServiceHistorySection';
import { ServicesPricingSection } from '@/pages/walker-profile/ui/sections/ServicesPricingSection';
import { SidebarSections } from '@/pages/walker-profile/ui/sections/SidebarSections';
import { WalkerSummarySection } from '@/pages/walker-profile/ui/sections/WalkerSummarySection';
import { Button } from '@/shared/ui/Button';
import { formatCurrency } from '@/shared/utils/format';

export const WalkerProfilePage = () => {
  const { data: walker, isLoading } = useWalkerProfile();

  return (
    <div className="body-layout walker-layout">
      <section className="column content-placeholder--left">
        {isLoading && <p className="data-state">Loading profile...</p>}
        <WalkerSummarySection walker={walker} />
        <RecentServiceHistorySection walker={walker} />
        <ProfessionalFactsSection walker={walker} />
        <ServicesPricingSection walker={walker} />
        <CompanyAffiliationSection walker={walker} />
      </section>

      <aside className="column content-placeholder--right">
        <SidebarSections walker={walker} />
      </aside>

      <footer className="mobile-bottom-bar mobile-bottom-bar--walker">
        <div className="mobile-bottom-bar__slot">
          <span>Next open slot</span>
          <strong>
            {walker.booking.nextAvailable} · {formatCurrency(walker.booking.defaultPrice30min, walker.booking.currency)}
          </strong>
        </div>
        <Button className="mobile-bottom-bar__action">Book Service</Button>
      </footer>
    </div>
  );
};
