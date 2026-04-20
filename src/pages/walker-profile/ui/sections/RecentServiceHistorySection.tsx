import { AppIcon } from '@/shared/icons/AppIcon';
import type { WalkerProfile } from '@/entities/walker/model/types';
import { Card } from '@/shared/ui/Card';
import { SectionHeader } from '@/shared/ui/SectionHeader';
import { formatNumber, formatRating } from '@/shared/utils/format';

interface RecentServiceHistorySectionProps {
  walker: WalkerProfile;
}

export const RecentServiceHistorySection = ({ walker }: RecentServiceHistorySectionProps) => {
  return (
    <Card>
      <SectionHeader
        title="Recent Service History"
        action={
        <a className="section-header__link" href="#">
          View all {formatNumber(walker.stats.servicesDone)}
        </a>
        }
      />

      {walker.recentServices.map((service) => (
        <div className="walk-item" key={service.id}>
          <div className="walk-item__thumbs">
            <div className="walk-item__thumb" />
            <div className="walk-item__thumb" />
          </div>
          <div>
            <p className="walk-item__title">{service.time}</p>
            <div className="walk-item__meta">
              · {service.pets} {service.pets === 1 ? 'pet' : 'pets'} · {service.type} · {service.location}
            </div>
            <div className="walk-item__desc">{service.description}</div>
          </div>
          <div className="walk-item__side">
            <span className="walk-item__star">
              <AppIcon name="star" tone="warning" size={12} /> {formatRating(service.rating)}
            </span>
            <div className="walk-item__status">Completed</div>
          </div>
        </div>
      ))}
    </Card>
  );
};
