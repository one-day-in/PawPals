import { useState } from 'react';

import type { WalkerProfile } from '@/entities/walker/model/types';
import { AppIcon } from '@/shared/icons/AppIcon';
import { Badge } from '@/shared/ui/Badge';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { SectionHeader } from '@/shared/ui/SectionHeader';
import { formatCurrency, formatRating } from '@/shared/utils/format';

interface SidebarSectionsProps {
  walker: WalkerProfile;
}

export const SidebarSections = ({ walker }: SidebarSectionsProps) => {
  const [isRecurring, setIsRecurring] = useState(true);

  const ratings = [
    ['Reliability', walker.ratingsBreakdown.reliability],
    ['Punctuality', walker.ratingsBreakdown.punctuality],
    ['Communication', walker.ratingsBreakdown.communication],
    ['Safety', walker.ratingsBreakdown.safety],
    ['Pet Care', walker.ratingsBreakdown.petCare],
  ] as const;

  return (
    <>
      <Card as="article">
        <SectionHeader
          title={`Book ${walker.name.split(' ')[0]}`}
          titleClassName="section-header__title--booking"
          action={
            <div className="booking-price">
              From <b>{formatCurrency(walker.booking.defaultPrice30min, walker.booking.currency)}</b> / 30 min
            </div>
          }
        />
        <div className="selector-grid">
          <div className="selector-chip selector-chip--active">Walking</div>
          <div className="selector-chip">Sitting</div>
          <div className="selector-chip">Visits</div>
        </div>
        <div className="selector-grid">
          <div className="selector-chip selector-chip--active">30 min</div>
          <div className="selector-chip">60 min</div>
          <div className="selector-chip">90 min</div>
        </div>
        <div className="booking-recurring">
          <span>Recurring</span>
          <button
            className={`booking-switch ${isRecurring ? 'is-active' : ''}`}
            type="button"
            role="switch"
            aria-label="Toggle recurring booking"
            aria-checked={isRecurring}
            onClick={() => setIsRecurring((prev) => !prev)}
          />
        </div>
        <p className="booking-next">Next available: {walker.booking.nextAvailable}</p>
        <Button className="booking-cta" fullWidth>
          Request Booking
        </Button>
        <div className="booking-actions">
          <Button variant="secondary" className="booking-actions__message">
            <AppIcon name="message-circle" tone="muted" size={13} />
            Message
          </Button>
          <Button variant="ghost" className="booking-actions__icon" aria-label="Add to favorites">
            <AppIcon name="heart" tone="muted" size={13} />
          </Button>
          <Button variant="ghost" className="booking-actions__icon" aria-label="Share profile">
            <AppIcon name="share-2" tone="muted" size={13} />
          </Button>
        </div>
      </Card>

      <Card as="article">
        <SectionHeader title="Ratings" />
        {ratings.map(([label, value]) => (
          <div className="rating-row" key={label}>
            <span className="rating-row__label">{label}</span>
            <progress className="rating-row__bar" value={value} max={5} />
            <span className="rating-row__value">{formatRating(value)}</span>
          </div>
        ))}
      </Card>

      <Card as="article">
        <SectionHeader title="Service Area" />
        <div className="service-area-map" />
        <div className="service-area-tags">
          {walker.serviceArea.areas.map((area) => (
            <Badge key={area} className="service-area-tag">
              {area}
            </Badge>
          ))}
        </div>
      </Card>

      <Card as="article">
        <SectionHeader
          title="What Clients Say"
          action={
            <a href="#" className="section-header__link">
              {formatRating(walker.rating.average)} avg
            </a>
          }
        />
        {walker.reviews.map((review) => (
          <div className="review-item" key={review.id}>
            <div className="review-item__top">
              {review.author} <span className="review-item__verified">· Verified Booking</span>
            </div>
            <p className="review-item__body">"{review.text}"</p>
            <div className="review-item__meta">
              ★ <b>{formatRating(review.rating)}</b> · {review.helpful} helpful
            </div>
          </div>
        ))}
      </Card>

      <Card as="article">
        <SectionHeader
          title="Media & Report Proof"
          action={
            <a href="#" className="section-header__link">
              Recent
            </a>
          }
        />
        <div className="media-grid">
          <div className="media-grid__item" />
          <div className="media-grid__item" />
          <div className="media-grid__item" />
        </div>
        <div className="media-grid__labels">
          <span>Service Photos</span>
          <span>GPS Snapshot</span>
          <span>Health Report</span>
        </div>
      </Card>
    </>
  );
};
