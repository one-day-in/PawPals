import type { AllowedIconName } from '@/shared/icons/allowedIcons';
import type { IconToneKey } from '@/shared/config/iconTones';

export interface IconSpec {
  icon: AllowedIconName;
  tone: IconToneKey;
}

export const WALKER_FACT_ICON_MAP: Record<
  'experience' | 'specialties' | 'breeds' | 'languages' | 'certifications' | 'maxDogs' | 'transport',
  IconSpec
> = {
  experience: { icon: 'clock-3', tone: 'accent' },
  specialties: { icon: 'heart', tone: 'danger' },
  breeds: { icon: 'paw-print', tone: 'warning' },
  languages: { icon: 'globe', tone: 'success' },
  certifications: { icon: 'award', tone: 'warning' },
  maxDogs: { icon: 'briefcase', tone: 'muted' },
  transport: { icon: 'car', tone: 'accent' },
};

export const WALKER_SERVICE_ICON_MAP: Record<
  'walking30min' | 'walking60min' | 'petSitting' | 'homeVisit' | 'grooming' | 'extraPet',
  IconSpec
> = {
  walking30min: { icon: 'footprints', tone: 'accent' },
  walking60min: { icon: 'footprints', tone: 'accent' },
  petSitting: { icon: 'house', tone: 'success' },
  homeVisit: { icon: 'house', tone: 'success' },
  grooming: { icon: 'scissors', tone: 'warning' },
  extraPet: { icon: 'circle-plus', tone: 'muted' },
};
