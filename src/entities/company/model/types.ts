import type { AllowedIconName } from '@/shared/icons/allowedIcons';
import type { IconToneKey } from '@/shared/config/iconTones';

export interface CompanySummary {
  rating: number;
  reviewsCount: number;
  activeProviders: number;
  servicesCompleted: number;
  areasCount: number;
}

export interface CompanyProvider {
  id: string;
  name: string;
  rating: number;
  status: 'available' | 'limited';
  role: string;
  time: string;
  areas: string[];
  tags: string[];
  avatarColor: 'blue' | 'green' | 'amber' | 'red';
}

export interface CompanyGuarantee {
  id: string;
  title: string;
  text: string;
  icon: AllowedIconName;
}

export interface CompanyMediaItem {
  id: string;
  type: 'video' | 'photo';
  label: string;
  thumbnail: string;
}

export interface CompanyPriceRow {
  label: string;
  price: number;
  isAddon?: boolean;
}

export interface CompanyDistributionRow {
  stars: number;
  percent: number;
}

export interface CompanyProfileData {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  summary: CompanySummary;
  highlights: string[];
  notice: string;
  noticeMeta: string;
  tabs: string[];
  activeTab: string;
  providersSection: {
    title: string;
    updatedAt: string;
    providers: CompanyProvider[];
    footerLinks: string[];
  };
  aboutSection: {
    title: string;
    description: string;
    guarantees: CompanyGuarantee[];
    petsSupportNote: string;
  };
  mediaProof: {
    title: string;
    highlight: string;
    items: CompanyMediaItem[];
  };
  sidebar: {
    pricing: {
      title: string;
      badge: string;
      rows: CompanyPriceRow[];
      discounts: string[];
      note: string;
    };
    booking: {
      title: string;
      service: string;
      date: string;
      preferredProvider: string;
      cta: string;
      helpText: string;
    };
    areas: {
      title: string;
      mapLabel: string;
      tags: string[];
    };
    secondaryReviews: {
      title: string;
      score: number;
      total: number;
      distribution: CompanyDistributionRow[];
      featuredQuote: string;
      author: string;
      authorBadge: string;
      link: string;
    };
  };
  headerActions: {
    primary: string;
    secondary: string;
  };
}

export interface CompanyResponse {
  companyProfile: CompanyProfileData;
}

export interface CompanyTagStyle {
  bgClass: string;
  textClass: string;
}

export const COMPANY_TAG_STYLES: Record<string, CompanyTagStyle> = {
  'Senior Dogs': { bgClass: 'is-blue', textClass: 'is-blue' },
  'Reactive Dogs': { bgClass: 'is-green', textClass: 'is-green' },
  'Group Sessions': { bgClass: 'is-blue', textClass: 'is-blue' },
  Socialization: { bgClass: 'is-amber', textClass: 'is-amber' },
  Puppies: { bgClass: 'is-red', textClass: 'is-red' },
  Kittens: { bgClass: 'is-amber', textClass: 'is-amber' },
  'Senior Pets': { bgClass: 'is-blue', textClass: 'is-blue' },
  'Gentle Care': { bgClass: 'is-green', textClass: 'is-green' },
};

export const COMPANY_STATUS_TONE: Record<CompanyProvider['status'], IconToneKey> = {
  available: 'success',
  limited: 'warning',
};
