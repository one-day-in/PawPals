import type { OwnerProfileData } from '@/entities/owner/model/types';

export const ownerProfileMock: OwnerProfileData = {
  navbar: {
    brand: 'PawPals',
    links: ['Find Walkers', 'Companies', 'How It Works', 'Safety'],
    searchPlaceholder: 'Search...',
    login: 'Log In',
    signup: 'Sign Up',
  },
  owner: {
    name: 'Jessica Palmer',
    badge: 'Verified Owner',
    subtitle: 'Pet owner · Brooklyn, NY · Member since 2021',
    statsLine: ['3 pets', '127 bookings', '12 walkers used', '4.9 avg given rating'],
    bio: 'I love animals and want the best care for my fur family. Always responsive and leave detailed instructions. Happy to accommodate flexible scheduling.',
    ctaTitle: 'Become a Pet Care Provider',
    ctaText: 'Enable extended profile to offer services and accept bookings',
    trustBadges: [
      { id: 'verified_identity', label: 'Verified Identity', tone: 'blue', icon: 'shield-check', iconTone: 'accent' },
      { id: 'payment_verified', label: 'Payment Verified', tone: 'green', icon: 'credit-card', iconTone: 'success' },
      { id: 'responsive', label: 'Responsive', tone: 'blue', icon: 'message-circle', iconTone: 'accent' },
      { id: 'clear_instructions', label: 'Clear Instructions', tone: 'blue', icon: 'thumbs-up', iconTone: 'accent' },
    ],
    pets: [
      { id: 'pet_1', label: 'Luna · Dog' },
      { id: 'pet_2', label: 'Mochi · Cat' },
      { id: 'pet_3', label: 'Biscuit · Rabbit' },
      { id: 'pet_add', label: 'Add Pet', isAdd: true },
    ],
  },
  schedule: {
    title: 'My Schedule',
    action: 'View Calendar',
    upcomingLabel: 'Coming Up',
    upcoming: [
      { id: 'up_1', title: 'Walk with Luna', time: 'Tomorrow, 9:00 AM · 60 min', meta: 'Walker: Ethan B.', kind: 'walk', highlighted: true },
      { id: 'up_2', title: 'Pet Sitting - Biscuit', time: 'Friday, 2:00 PM · 3 hours', meta: 'Sitter: Sarah M. · Rabbit care', kind: 'sitting' },
      { id: 'up_3', title: 'Home Visit - Mochi', time: 'Saturday, 11:00 AM · 30 min', meta: 'Vet tech: Dr. Kim · Medication', kind: 'visit' },
      { id: 'up_4', title: 'Bird Care - Kiwi', time: 'Next Monday, 10:00 AM · At-home', meta: 'Caretaker: Alex T.', kind: 'bird' },
      { id: 'up_5', title: 'Grooming - Luna', time: 'Next Wednesday, 3:00 PM · 90 min', meta: 'Groomer: PawStyle Studio', kind: 'grooming' },
    ],
    pastLabel: 'Past Services',
    past: [
      { id: 'past_1', title: 'Walk with Luna', meta: 'Apr 14 · Completed · Ethan B.', kind: 'walk' },
      { id: 'past_2', title: 'Sitting - Biscuit', meta: 'Apr 12 · Completed · Sarah M.', kind: 'sitting' },
      { id: 'past_3', title: 'Grooming - Mochi', meta: 'Apr 10 · Completed · PawStyle Studio', kind: 'grooming' },
    ],
  },
  reputation: {
    title: 'Owner Reputation',
    score: '4.9',
    scoreLabel: 'Owner Score',
    rows: [
      { label: 'Response rate', value: '98%' },
      { label: 'Cancellation', value: '0.8%', good: true },
      { label: 'Avg rating given', value: '4.7 / 5' },
      { label: 'Payment', value: 'Always on time', good: true },
    ],
    liveStatus: 'Luna is being walked now · Ethan B. · GPS active',
  },
  providers: {
    title: 'Preferred Providers',
    items: [
      { id: 'prov_1', name: 'Ethan Brooks', meta: '4.9 · 38 bookings together', action: 'Book', avatarTone: 'blue' },
      { id: 'prov_2', name: 'Sarah Mitchell', meta: '5.0 · 14 bookings together', action: 'Book', avatarTone: 'green' },
    ],
  },
  preferences: {
    title: 'Care Preferences',
    items: [
      { id: 'pref_1', key: 'Preferred times', value: 'Mornings (8–11 AM)', icon: 'clock-4', iconTone: 'accent' },
      { id: 'pref_2', key: 'Walk type', value: 'Exercise-focused, long route', icon: 'footprints', iconTone: 'accent' },
      { id: 'pref_3', key: 'Key instructions', value: 'No off-leash, double-check gate', icon: 'triangle-alert', iconTone: 'warning' },
      { id: 'pref_4', key: 'Pickup location', value: 'Front door, building 4B, code #1234', icon: 'map-pin', iconTone: 'accent' },
      { id: 'pref_5', key: 'Emergency', value: 'Brooklyn Animal Hospital', icon: 'phone', iconTone: 'danger' },
    ],
  },
  month: {
    title: 'This Month',
    cards: [
      { id: 'month_1', value: '12', label: 'Services', primary: true },
      { id: 'month_2', value: '$340', label: 'Spent', primary: false },
      { id: 'month_3', value: '3', label: 'Providers', primary: false },
    ],
    nextPayment: 'Next payment: Apr 22 · $28',
  },
};
