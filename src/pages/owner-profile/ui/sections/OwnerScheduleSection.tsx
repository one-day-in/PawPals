import type { OwnerProfileData } from '@/entities/owner';
import { OWNER_PAST_STATUS_ICON, OWNER_SCHEDULE_ICON_MAP } from '@/pages/owner-profile/model/iconMaps';
import { AppIcon } from '@/shared/icons/AppIcon';
import { Card } from '@/shared/ui/Card';
import { SectionHeader } from '@/shared/ui/SectionHeader';

interface OwnerScheduleSectionProps {
  data: OwnerProfileData['schedule'];
}

export const OwnerScheduleSection = ({ data }: OwnerScheduleSectionProps) => {
  return (
    <Card className="owner-schedule-card">
      <SectionHeader
        title={data.title}
        action={
          <a href="#" className="section-header__link">
            {data.action}
          </a>
        }
      />

      <div className="owner-tag owner-tag--upcoming">{data.upcomingLabel}</div>

      {data.upcoming.map((entry) => {
        const iconSpec = OWNER_SCHEDULE_ICON_MAP[entry.kind];

        return (
          <div key={entry.id} className={`owner-event ${entry.highlighted ? 'is-highlighted' : ''}`}>
            <div className={`owner-event__icon-bubble ${iconSpec.bubbleClass}`}>
              <AppIcon name={iconSpec.icon} tone="default" size={16} />
            </div>
            <div className="owner-event__content">
              <div className="owner-event__title">{entry.title}</div>
              <div className={`owner-event__time ${entry.highlighted ? 'is-highlighted' : ''}`}>{entry.time}</div>
              <div className="owner-event__meta">{entry.meta}</div>
            </div>
            {entry.highlighted && <span className="owner-event__dot" />}
          </div>
        );
      })}

      <div className="owner-tag owner-tag--past">{data.pastLabel}</div>

      {data.past.map((entry) => {
        const iconSpec = OWNER_SCHEDULE_ICON_MAP[entry.kind];

        return (
          <div key={entry.id} className="owner-past-event">
            <div className="owner-past-event__icon-bubble">
              <AppIcon name={iconSpec.icon} tone="default" size={12} />
            </div>
            <div className="owner-past-event__content">
              <div className="owner-past-event__top">
                <div className="owner-past-event__title">{entry.title}</div>
                <AppIcon name={OWNER_PAST_STATUS_ICON.icon} tone={OWNER_PAST_STATUS_ICON.tone} size={12} />
              </div>
              <div className="owner-past-event__meta">{entry.meta}</div>
            </div>
          </div>
        );
      })}
    </Card>
  );
};
