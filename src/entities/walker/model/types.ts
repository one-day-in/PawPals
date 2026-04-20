export type WalkerStatus = 'on_walk' | 'available' | 'offline';

export interface WalkerRating {
  average: number;
  reviewsCount: number;
}

export interface WalkerStats {
  servicesDone: number;
  repeatClientsPercent: number;
  onTimePercent: number;
  avgWalkMinutes: number;
  responseTime: string;
  companies: number;
}

export interface WalkerLastActivity {
  timeAgo: string;
  description: string;
}

export interface WalkerPricing {
  walking30min: number;
  walking60min: number;
  petSitting: number;
  homeVisit: number;
  grooming: number;
  extraPet: number;
  currency: string;
}

export interface WalkerRatingsBreakdown {
  reliability: number;
  punctuality: number;
  communication: number;
  safety: number;
  petCare: number;
}

export interface WalkerServiceArea {
  radiusMiles: number;
  areas: string[];
}

export interface WalkerProfessional {
  experience: string;
  specialties: string[];
  breeds: string[];
  languages: string[];
  certifications: string[];
  maxDogs: number;
  transport: string;
}

export interface WalkerRecentService {
  id: string;
  time: string;
  pets: number;
  type: string;
  location: string;
  description: string;
  rating: number;
  status: 'completed' | 'in_progress' | 'cancelled';
}

export interface WalkerReview {
  id: string;
  author: string;
  text: string;
  rating: number;
  helpful: number;
}

export interface WalkerCompany {
  name: string;
  rating: number;
  role: string;
}

export interface WalkerMedia {
  photos: string[];
  gpsSnapshots: string[];
  healthReports: string[];
}

export interface WalkerBooking {
  nextAvailable: string;
  defaultPrice30min: number;
  currency: string;
}

export interface WalkerProfile {
  id: string;
  name: string;
  avatar: string;
  status: WalkerStatus;
  headline: string;
  experienceYears: number;
  location: string;
  rating: WalkerRating;
  stats: WalkerStats;
  badges: string[];
  lastActivity: WalkerLastActivity;
  pricing: WalkerPricing;
  ratingsBreakdown: WalkerRatingsBreakdown;
  serviceArea: WalkerServiceArea;
  professional: WalkerProfessional;
  recentServices: WalkerRecentService[];
  reviews: WalkerReview[];
  companies: WalkerCompany[];
  media: WalkerMedia;
  booking: WalkerBooking;
}

export interface WalkerResponse {
  walkerProfile: WalkerProfile;
}
