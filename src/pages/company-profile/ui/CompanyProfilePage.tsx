import { useCompanyProfile } from '@/entities/company';
import { COMPANY_TAG_STYLES } from '@/entities/company/model/types';
import { AppIcon } from '@/shared/icons/AppIcon';
import { Badge } from '@/shared/ui/Badge';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { SectionHeader } from '@/shared/ui/SectionHeader';

export const CompanyProfilePage = () => {
  const { data, isLoading } = useCompanyProfile();

  return (
    <div className="company-page">
      {isLoading && <p className="data-state">Loading profile...</p>}

      <Card className="company-identity-card">
        <div className="company-logo" />

        <div className="company-info">
          <div className="company-name-row">
            <h1>{data.name}</h1>
            <Badge tone="blue" className="company-verified-badge">
              <AppIcon name="check-circle" tone="accent" size={12} />
              {data.badge}
            </Badge>
          </div>
          <p className="company-subtitle">{data.tagline}</p>

          <div className="company-stats-row">
            <AppIcon name="star" tone="warning" size={12} />
            <strong>{data.summary.rating.toFixed(1)}</strong>
            <span>({data.summary.reviewsCount} reviews)</span>
            <span className="sep">·</span>
            <span>{data.summary.activeProviders} active providers</span>
            <span className="sep">·</span>
            <span>{data.summary.servicesCompleted.toLocaleString('en-US')} services completed</span>
            <span className="sep">·</span>
            <span>{data.summary.areasCount} areas</span>
          </div>

          <div className="company-highlights-row">
            {data.highlights.map((item) => (
              <span key={item} className="company-pill">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="company-cta-group">
          <Button>{data.headerActions.primary}</Button>
          <Button variant="ghost">{data.headerActions.secondary}</Button>
        </div>
      </Card>

      <section className="company-note-card">
        <AppIcon name="info" tone="accent" size={14} />
        <p className="note-main">{data.notice}</p>
        <p className="note-side">{data.noticeMeta}</p>
      </section>

      <Card className="company-tabs-card">
        <div className="company-tabs-row">
          {data.tabs.map((tab) => (
            <button key={tab} className={`company-tab ${tab === data.activeTab ? 'is-active' : ''}`}>
              {tab}
            </button>
          ))}
        </div>
      </Card>

      <section className="company-columns">
        <div className="company-left-col">
          <Card>
            <SectionHeader
              title={data.providersSection.title}
              action={<span className="muted">{data.providersSection.updatedAt}</span>}
            />

            <div className="company-provider-list">
              {data.providersSection.providers.map((provider) => (
                <article key={provider.id} className="company-provider-row">
                  <span className={`avatar is-${provider.avatarColor}`} />

                  <div className="company-provider-info">
                    <div className="name-row">
                      <span className={`status-dot is-${provider.status === 'limited' ? 'amber' : 'green'}`} />
                      <strong>{provider.name}</strong>
                      <span className="muted">· {provider.time}</span>
                    </div>
                    <p>
                      {provider.role} · {provider.areas.join(', ')}
                    </p>
                    <div className="tags">
                      {provider.tags.map((tag) => {
                        const style = COMPANY_TAG_STYLES[tag] ?? { bgClass: 'is-blue', textClass: 'is-blue' };
                        return (
                          <span key={tag} className={`tag ${style.bgClass} ${style.textClass}`}>
                            {tag}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  <div className="company-provider-right">
                    <AppIcon name="star" tone="warning" size={11} />
                    <strong>{provider.rating.toFixed(1)}</strong>
                    <span className={`avail is-${provider.status}`}>
                      <span />
                      {provider.status === 'limited' ? 'Limited' : 'Available'}
                    </span>
                  </div>
                </article>
              ))}
            </div>

            <a href="#" className="company-link">
              {data.providersSection.footerLinks[0]} {data.providersSection.footerLinks[1]} →
            </a>
          </Card>

          <Card>
            <SectionHeader title={data.aboutSection.title} />
            <p className="company-body-text">{data.aboutSection.description}</p>

            <div className="guarantees">
              {data.aboutSection.guarantees.map((item) => (
                <div key={item.id} className="g-card">
                  <span className="icon-bg">
                    <AppIcon name={item.icon} tone="accent" size={16} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>

            <p className="muted company-muted-note">{data.aboutSection.petsSupportNote}</p>
          </Card>

          <Card>
            <SectionHeader title={data.mediaProof.title} action={<a className="company-link" href="#">{data.mediaProof.highlight}</a>} />

            <div className="media-grid">
              {data.mediaProof.items.map((item) => (
                <div key={item.id} className="media">
                  <img src={item.thumbnail} alt={item.label} className="media__img" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <aside className="company-right-col">
          <Card className="pricing-card is-accented">
            <SectionHeader title={data.sidebar.pricing.title} action={<span className="company-chip">{data.sidebar.pricing.badge}</span>} />

            {data.sidebar.pricing.rows.map((row, index) => (
              <div key={row.label} className={`price-row ${index === data.sidebar.pricing.rows.length - 1 ? 'last' : ''}`}>
                <span>{row.label}</span>
                <strong className={row.isAddon ? 'small' : ''}>
                  {row.isAddon ? '+' : ''}${row.price}
                </strong>
              </div>
            ))}

            <div className="note-blue">
              <AppIcon name="repeat" tone="accent" size={12} />
              <span>{data.sidebar.pricing.discounts.join(' · ')}</span>
            </div>

            <p className="muted company-muted-note">{data.sidebar.pricing.note}</p>
          </Card>

          <Card>
            <SectionHeader title={data.sidebar.booking.title} />
            <div className="field">Service: {data.sidebar.booking.service}</div>
            <div className="field">Date: {data.sidebar.booking.date}</div>
            <div className="field split">
              <span>{data.sidebar.booking.preferredProvider}</span>
              <AppIcon name="chevron-down" tone="muted" size={14} />
            </div>
            <Button className="full">{data.sidebar.booking.cta}</Button>
            <p className="muted company-muted-note">{data.sidebar.booking.helpText}</p>
          </Card>

          <Card>
            <SectionHeader title={data.sidebar.areas.title} />
            <div className="area-map">{data.sidebar.areas.mapLabel}</div>
            <div className="area-tags">
              {data.sidebar.areas.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </Card>

          <Card>
            <SectionHeader
              title={data.sidebar.secondaryReviews.title}
              action={
                <span className="rating-label">
                  <AppIcon name="star" tone="warning" size={12} />
                  {data.sidebar.secondaryReviews.score.toFixed(1)} / {data.sidebar.secondaryReviews.total}
                </span>
              }
            />

            <div className="dist">
              {data.sidebar.secondaryReviews.distribution.map((item) => (
                <div key={item.stars} className="dist-row">
                  <span>{item.stars}★</span>
                  <progress className="bar" value={item.percent} max={100} />
                  <b>{item.percent}%</b>
                </div>
              ))}
            </div>

            <p className="quote">“{data.sidebar.secondaryReviews.featuredQuote}”</p>
            <p className="meta">
              — {data.sidebar.secondaryReviews.author} <span>· {data.sidebar.secondaryReviews.authorBadge}</span>
            </p>
            <a href="#" className="company-link">
              {data.sidebar.secondaryReviews.link} →
            </a>
          </Card>
        </aside>
      </section>
    </div>
  );
};
