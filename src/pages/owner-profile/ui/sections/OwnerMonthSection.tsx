import type { OwnerProfileData } from '@/entities/owner';
import { AppIcon } from '@/shared/icons/AppIcon';
import { Card } from '@/shared/ui/Card';
import { SectionHeader } from '@/shared/ui/SectionHeader';

interface OwnerMonthSectionProps {
  data: OwnerProfileData['month'];
}

export const OwnerMonthSection = ({ data }: OwnerMonthSectionProps) => {
  return (
    <Card as="article" className="owner-month-card">
      <SectionHeader title={data.title} />

      <div className="owner-month-grid">
        {data.cards.map((card) => (
          <div key={card.id} className="owner-month-grid__item">
            <div className={`owner-month-grid__value ${card.primary ? 'is-primary' : ''}`}>{card.value}</div>
            <div className="owner-month-grid__label">{card.label}</div>
          </div>
        ))}
      </div>

      <div className="owner-month-next">
        <AppIcon name="calendar" tone="accent" size={12} />
        <span>{data.nextPayment}</span>
      </div>
    </Card>
  );
};
