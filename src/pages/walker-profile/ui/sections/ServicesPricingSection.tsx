import { AppIcon } from '@/shared/icons/AppIcon';
import type { WalkerProfile } from '@/entities/walker/model/types';
import { WALKER_SERVICE_ICON_MAP } from '@/pages/walker-profile/model/iconMaps';
import { Card } from '@/shared/ui/Card';
import { SectionHeader } from '@/shared/ui/SectionHeader';
import { formatCurrency } from '@/shared/utils/format';

interface ServicesPricingSectionProps {
  walker: WalkerProfile;
}

export const ServicesPricingSection = ({ walker }: ServicesPricingSectionProps) => {
  const items = [
    [WALKER_SERVICE_ICON_MAP.walking30min, 'Walking 30m', formatCurrency(walker.pricing.walking30min, walker.pricing.currency)],
    [WALKER_SERVICE_ICON_MAP.walking60min, 'Walking 60m', formatCurrency(walker.pricing.walking60min, walker.pricing.currency)],
    [WALKER_SERVICE_ICON_MAP.petSitting, 'Pet Sitting', formatCurrency(walker.pricing.petSitting, walker.pricing.currency)],
    [WALKER_SERVICE_ICON_MAP.homeVisit, 'Home Visit', formatCurrency(walker.pricing.homeVisit, walker.pricing.currency)],
    [WALKER_SERVICE_ICON_MAP.grooming, 'Grooming', formatCurrency(walker.pricing.grooming, walker.pricing.currency)],
    [WALKER_SERVICE_ICON_MAP.extraPet, 'Extra Pet', `+${formatCurrency(walker.pricing.extraPet, walker.pricing.currency)}`],
  ] as const;

  return (
    <Card>
      <SectionHeader title="Services & Pricing" />

      <div className="service-grid">
        {items.map(([iconSpec, name, price]) => (
          <article key={name} className="service-item">
            <AppIcon name={iconSpec.icon} tone={iconSpec.tone} size={22} className="service-item__icon" />
            <div>
              <p className="service-item__name">{name}</p>
              <p className="service-item__price">{price}</p>
            </div>
          </article>
        ))}
      </div>

      <p className="service-note">Save 15% with recurring bookings</p>
    </Card>
  );
};
