import { useState } from 'react';

import { AppIcon } from '@/shared/icons/AppIcon';
import type { OwnerProfileData } from '@/entities/owner';
import { Badge } from '@/shared/ui/Badge';
import { Card } from '@/shared/ui/Card';

interface OwnerMainCardSectionProps {
  data: OwnerProfileData['owner'];
}

export const OwnerMainCardSection = ({ data }: OwnerMainCardSectionProps) => {
  const [isProviderMode, setIsProviderMode] = useState(true);

  return (
    <Card className="owner-main-card">
      <div className="owner-head">
        <div className="owner-avatar" />
        <div>
          <div className="owner-name-row">
            <p className="owner-name">{data.name}</p>
            <Badge tone="blue" className="owner-badge">
              <AppIcon name="shield-check" tone="accent" size={10} />
              {data.badge}
            </Badge>
          </div>
          <div className="owner-meta">{data.subtitle}</div>
          <div className="owner-chips">
            {data.statsLine.map((item, index) => {
              const showSeparator = index > 0;
              return (
                <span key={item} className={`owner-chip ${index === 0 ? 'is-primary' : ''}`}>
                  {showSeparator && <span className="owner-chip__sep">·</span>}
                  {item}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      <div className="owner-bio">{data.bio}</div>

      <div className="owner-cta-pro">
        <AppIcon name="briefcase" tone="default" size={16} className="owner-cta-pro__icon" />
        <div className="owner-cta-pro__content">
          <div className="owner-cta-pro__title">{data.ctaTitle}</div>
          <div className="owner-cta-pro__text">{data.ctaText}</div>
        </div>
        <button
          className={`owner-cta-pro__switch ${isProviderMode ? 'is-active' : ''}`}
          type="button"
          role="switch"
          aria-label="Toggle provider mode"
          aria-checked={isProviderMode}
          onClick={() => setIsProviderMode((prev) => !prev)}
        />
      </div>

      <div className="owner-trust">
        {data.trustBadges.map((item) => (
          <Badge key={item.id} tone={item.tone} className="owner-trust-item">
            <AppIcon name={item.icon} tone={item.iconTone} size={10} />
            {item.label}
          </Badge>
        ))}
      </div>

      <div className="owner-pets-list">
        {data.pets.map((pet) => (
          <div key={pet.id} className={`owner-pet-chip ${pet.isAdd ? 'is-add' : ''}`}>
            {!pet.isAdd && <div className="owner-pet-chip__avatar" />}
            {!pet.isAdd ? (
              <span>{pet.label}</span>
            ) : (
              <>
                <AppIcon name="plus" tone="muted" size={12} />
                <span>{pet.label}</span>
              </>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
};
