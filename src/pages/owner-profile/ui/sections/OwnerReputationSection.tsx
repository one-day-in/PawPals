import type { OwnerProfileData } from '@/entities/owner';
import { Card } from '@/shared/ui/Card';
import { SectionHeader } from '@/shared/ui/SectionHeader';

interface OwnerReputationSectionProps {
  data: OwnerProfileData['reputation'];
}

export const OwnerReputationSection = ({ data }: OwnerReputationSectionProps) => {
  return (
    <Card as="article" className="owner-reputation-card">
      <SectionHeader title={data.title} />

      <div className="owner-reputation-summary">
        <div className="owner-reputation-score">
          <div className="owner-reputation-score__value">{data.score}</div>
          <div className="owner-reputation-score__label">{data.scoreLabel}</div>
        </div>

        <div className="owner-reputation-details">
          {data.rows.map((row) => (
            <div key={row.label} className="owner-reputation-details__row">
              <div className="owner-reputation-details__key">{row.label}</div>
              <div className={`owner-reputation-details__value ${row.good ? 'is-good' : ''}`}>{row.value}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="owner-live-status">
        <span className="owner-live-status__dot" />
        <span>{data.liveStatus}</span>
      </div>
    </Card>
  );
};
