import type { OwnerProfileData } from '@/entities/owner';
import { Card } from '@/shared/ui/Card';
import { SectionHeader } from '@/shared/ui/SectionHeader';

interface OwnerProvidersSectionProps {
  data: OwnerProfileData['providers'];
}

export const OwnerProvidersSection = ({ data }: OwnerProvidersSectionProps) => {
  return (
    <Card as="article" className="owner-providers-card">
      <SectionHeader title={data.title} />

      {data.items.map((item) => (
        <div key={item.id} className="owner-provider-row">
          <div className={`owner-provider-row__avatar is-${item.avatarTone}`} />
          <div className="owner-provider-row__content">
            <div className="owner-provider-row__name">{item.name}</div>
            <div className="owner-provider-row__meta">{item.meta}</div>
          </div>
          <div className="owner-provider-row__action">{item.action}</div>
        </div>
      ))}
    </Card>
  );
};
