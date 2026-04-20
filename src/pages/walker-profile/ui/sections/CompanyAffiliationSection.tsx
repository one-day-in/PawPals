import type { WalkerProfile } from '@/entities/walker/model/types';
import { Badge } from '@/shared/ui/Badge';
import { Card } from '@/shared/ui/Card';
import { SectionHeader } from '@/shared/ui/SectionHeader';
import { formatRating } from '@/shared/utils/format';

interface CompanyAffiliationSectionProps {
  walker: WalkerProfile;
}

export const CompanyAffiliationSection = ({ walker }: CompanyAffiliationSectionProps) => {
  const getCompanyCode = (name: string) =>
    name
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((chunk) => chunk[0]?.toUpperCase() ?? '')
      .join('');

  return (
    <Card>
      <SectionHeader title="Company Affiliation" />

      <div className="company-list">
        {walker.companies.map((company) => (
          <article key={company.name} className="company-item">
            <div className="company-item__left">
              <span className="company-item__logo" aria-hidden="true">
                {getCompanyCode(company.name)}
              </span>
              <div>
                <p className="company-item__name">{company.name}</p>
                <p className="company-item__meta">
                  ★ {formatRating(company.rating)} · {company.role}
                </p>
              </div>
            </div>
            <Badge tone="green" className="company-item__badge">
              Partnered
            </Badge>
          </article>
        ))}
      </div>
    </Card>
  );
};
