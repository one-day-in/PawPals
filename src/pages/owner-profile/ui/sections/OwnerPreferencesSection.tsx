import type { OwnerProfileData } from '@/entities/owner';
import { AppIcon } from '@/shared/icons/AppIcon';
import { Card } from '@/shared/ui/Card';
import { SectionHeader } from '@/shared/ui/SectionHeader';

interface OwnerPreferencesSectionProps {
  data: OwnerProfileData['preferences'];
}

export const OwnerPreferencesSection = ({ data }: OwnerPreferencesSectionProps) => {
  return (
    <Card as="article" className="owner-preferences-card">
      <SectionHeader title={data.title} />

      {data.items.map((item) => (
        <div key={item.id} className="owner-pref-row">
          <AppIcon name={item.icon} tone={item.iconTone} size={14} />
          <div className="owner-pref-row__key">{item.key}</div>
          <div className="owner-pref-row__value">{item.value}</div>
        </div>
      ))}
    </Card>
  );
};
