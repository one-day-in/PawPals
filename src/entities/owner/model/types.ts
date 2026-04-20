import type { AllowedIconName } from '@/shared/icons/allowedIcons';
import type { IconToneKey } from '@/shared/config/iconTones';

export interface OwnerNavbar {
  brand: string;
  links: string[];
  searchPlaceholder: string;
  login: string;
  signup: string;
}

export interface OwnerTrustBadge {
  id: string;
  label: string;
  tone: 'blue' | 'green';
  icon: AllowedIconName;
  iconTone: IconToneKey;
}

export interface OwnerPet {
  id: string;
  label: string;
  isAdd?: boolean;
}

export interface OwnerCore {
  name: string;
  badge: string;
  subtitle: string;
  statsLine: string[];
  bio: string;
  ctaTitle: string;
  ctaText: string;
  trustBadges: OwnerTrustBadge[];
  pets: OwnerPet[];
}

export interface OwnerScheduleUpcoming {
  id: string;
  title: string;
  time: string;
  meta: string;
  kind: 'walk' | 'sitting' | 'visit' | 'bird' | 'grooming';
  highlighted?: boolean;
}

export interface OwnerSchedulePast {
  id: string;
  title: string;
  meta: string;
  kind: 'walk' | 'sitting' | 'visit' | 'bird' | 'grooming';
}

export interface OwnerSchedule {
  title: string;
  action: string;
  upcomingLabel: string;
  upcoming: OwnerScheduleUpcoming[];
  pastLabel: string;
  past: OwnerSchedulePast[];
}

export interface OwnerReputationRow {
  label: string;
  value: string;
  good?: boolean;
}

export interface OwnerReputation {
  title: string;
  score: string;
  scoreLabel: string;
  rows: OwnerReputationRow[];
  liveStatus: string;
}

export interface ProviderItem {
  id: string;
  name: string;
  meta: string;
  action: string;
  avatarTone: 'blue' | 'green';
}

export interface OwnerProviders {
  title: string;
  items: ProviderItem[];
}

export interface PreferenceItem {
  id: string;
  key: string;
  value: string;
  icon: AllowedIconName;
  iconTone: IconToneKey;
}

export interface OwnerPreferences {
  title: string;
  items: PreferenceItem[];
}

export interface MonthCard {
  id: string;
  value: string;
  label: string;
  primary: boolean;
}

export interface OwnerMonth {
  title: string;
  cards: MonthCard[];
  nextPayment: string;
}

export interface OwnerProfileData {
  navbar: OwnerNavbar;
  owner: OwnerCore;
  schedule: OwnerSchedule;
  reputation: OwnerReputation;
  providers: OwnerProviders;
  preferences: OwnerPreferences;
  month: OwnerMonth;
}

export interface OwnerResponse {
  ownerProfile: OwnerProfileData;
}
