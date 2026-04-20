import { AppIcon } from '@/shared/icons/AppIcon';
import { Card } from '@/shared/ui/Card';
import type { WalkerProfile } from '@/entities/walker/model/types';
import { formatNumber, formatRating } from '@/shared/utils/format';

interface WalkerSummarySectionProps {
  walker: WalkerProfile;
}

export const WalkerSummarySection = ({ walker }: WalkerSummarySectionProps) => {
  const stats = [
    [`${walker.stats.repeatClientsPercent}%`, 'Repeat Clients'],
    [`${walker.stats.onTimePercent}%`, 'On-time'],
    [formatNumber(walker.stats.servicesDone), 'Services Done'],
    [`${walker.stats.avgWalkMinutes} min`, 'Avg Walk'],
    [walker.stats.responseTime, 'Response Time'],
    [String(walker.stats.companies), 'Companies'],
  ] as const;

  return (
    <Card>
      <div className="identity">
        <div className="identity__avatar" />
        <div>
          <div className="identity__name-row">
            <h1 className="identity__name">{walker.name}</h1>
            <span className="badge-online">
              <AppIcon name="footprints" tone="success" size={12} /> On a Walk
            </span>
          </div>
          <div className="identity__meta">
            {walker.headline} · {walker.experienceYears}+ years · {walker.location}
          </div>
          <div className="identity__rating-row">
            <AppIcon name="star" tone="warning" size={12} /> <b>{formatRating(walker.rating.average)}</b> ({formatNumber(walker.rating.reviewsCount)} reviews) ·{' '}
            {formatNumber(walker.stats.servicesDone)} services · Background verified
          </div>
        </div>
      </div>

      <div className="activity-banner">
        <AppIcon name="activity" tone="warning" size={12} /> Last active: {walker.lastActivity.timeAgo} · {walker.lastActivity.description}
      </div>

      <div className="kpi-grid">
        {stats.map(([value, label]) => (
          <div key={label} className="kpi">
            <span className="kpi__value">{value}</span>
            <span className="kpi__label">{label}</span>
          </div>
        ))}
      </div>

      <div className="pill-list">
        {walker.badges.map((badge) => (
          <span key={badge} className="pill">
            {badge}
          </span>
        ))}
      </div>
    </Card>
  );
};
