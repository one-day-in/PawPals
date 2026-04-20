import { AppIcon } from '@/shared/icons/AppIcon';
import type { WalkerProfile } from '@/entities/walker/model/types';
import { WALKER_FACT_ICON_MAP } from '@/pages/walker-profile/model/iconMaps';
import { Card } from '@/shared/ui/Card';
import { SectionHeader } from '@/shared/ui/SectionHeader';

interface ProfessionalFactsSectionProps {
  walker: WalkerProfile;
}

export const ProfessionalFactsSection = ({ walker }: ProfessionalFactsSectionProps) => {
  const leftFacts = [
    [WALKER_FACT_ICON_MAP.experience, 'Experience', walker.professional.experience],
    [WALKER_FACT_ICON_MAP.specialties, 'Specialties', walker.professional.specialties.join(', ')],
    [WALKER_FACT_ICON_MAP.breeds, 'Breeds', walker.professional.breeds.join(' · ')],
    [WALKER_FACT_ICON_MAP.languages, 'Languages', walker.professional.languages.join(', ')],
  ] as const;

  const rightFacts = [
    [WALKER_FACT_ICON_MAP.certifications, 'Certifications', walker.professional.certifications.join(' · ')],
    [WALKER_FACT_ICON_MAP.maxDogs, 'Max dogs', `Up to ${walker.professional.maxDogs} per walk`],
    [WALKER_FACT_ICON_MAP.transport, 'Transport', walker.professional.transport],
  ] as const;

  return (
    <Card>
      <SectionHeader title="Professional Facts (CV)" />

      <div className="facts-grid">
        <div>
          {leftFacts.map(([iconSpec, key, value]) => (
            <div className="fact-row" key={key}>
              <AppIcon name={iconSpec.icon} tone={iconSpec.tone} size={12} />
              <span className="fact-row__k">{key}</span>
              <span className="fact-row__v">{value}</span>
            </div>
          ))}
        </div>

        <div>
          {rightFacts.map(([iconSpec, key, value]) => (
            <div className="fact-row" key={key}>
              <AppIcon name={iconSpec.icon} tone={iconSpec.tone} size={12} />
              <span className="fact-row__k">{key}</span>
              <span className="fact-row__v">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};
