import type { CompanyProfileData } from '@/entities/company/model/types';

export const companyProfileMock: CompanyProfileData = {
  id: 'company_001',
  name: 'Brooklyn Paws Co',
  badge: 'Verified Company',
  tagline: 'Company-managed pet services across Brooklyn',
  summary: {
    rating: 4.8,
    reviewsCount: 541,
    activeProviders: 12,
    servicesCompleted: 2140,
    areasCount: 12,
  },
  highlights: ['Insured', 'Background Checked', '24/7 Support'],
  notice: 'Company pricing applies to all bookings. Preferred provider can be selected in the booking form.',
  noticeMeta: 'Services include walking, sitting, daycare, grooming, home visits & more.',
  tabs: ['Team', 'About', 'Services', 'Reviews', 'Areas'],
  activeTab: 'Team',
  providersSection: {
    title: 'Available Providers Today',
    updatedAt: 'Updated 5 min ago',
    providers: [
      {
        id: 'prov_1',
        name: 'Amy M.',
        rating: 4.9,
        status: 'available',
        role: 'Reactive/Senior Dogs',
        time: '10:00-18:00',
        areas: ['Park Slope'],
        tags: ['Senior Dogs', 'Reactive Dogs'],
        avatarColor: 'blue',
      },
      {
        id: 'prov_2',
        name: 'James R.',
        rating: 4.8,
        status: 'available',
        role: 'Group Sessions',
        time: '11:30-17:00',
        areas: ['Williamsburg'],
        tags: ['Group Sessions', 'Socialization'],
        avatarColor: 'green',
      },
      {
        id: 'prov_3',
        name: 'Lisa P.',
        rating: 5,
        status: 'limited',
        role: 'Puppies & Kittens',
        time: '12:00-18:00',
        areas: ['DUMBO'],
        tags: ['Puppies', 'Kittens'],
        avatarColor: 'amber',
      },
      {
        id: 'prov_4',
        name: 'Sara K.',
        rating: 4.7,
        status: 'available',
        role: 'Senior Pets',
        time: '10:00-20:00',
        areas: ['Cobble Hill'],
        tags: ['Senior Pets', 'Gentle Care'],
        avatarColor: 'red',
      },
    ],
    footerLinks: ['Prefer a specific provider? Select them in the booking form.', 'View full roster'],
  },
  aboutSection: {
    title: 'About & Guarantee',
    description:
      "Local company since 2019. Every booking is managed by our operations team and matched with trained providers. Whether it's walking, sitting, daycare, grooming, or home visits — if a provider changes, we instantly provide same-level replacement.",
    guarantees: [
      { id: 'g_1', title: 'Service Guarantee', text: 'On-time arrival or credit', icon: 'shield-check' },
      { id: 'g_2', title: 'Safety Standard', text: 'All providers background-checked', icon: 'heart-pulse' },
      { id: 'g_3', title: 'Support', text: 'Available 7 days/week', icon: 'headphones' },
    ],
    petsSupportNote: 'Supports dogs, cats, rabbits, birds, small pets & exotic pets.',
  },
  mediaProof: {
    title: 'Media Proof',
    highlight: 'Recent video',
    items: [
      {
        id: 'm_1',
        type: 'video',
        label: '1.2k views',
        thumbnail:
          'https://images.unsplash.com/photo-1636654581774-82712b59f87b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      },
      {
        id: 'm_2',
        type: 'video',
        label: '890 views',
        thumbnail:
          'https://images.unsplash.com/photo-1644088302302-f10d276cac22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      },
      {
        id: 'm_3',
        type: 'video',
        label: '2.4k views',
        thumbnail:
          'https://images.unsplash.com/photo-1722553777841-46de7460c9ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      },
      {
        id: 'm_4',
        type: 'video',
        label: '560 views',
        thumbnail:
          'https://images.unsplash.com/photo-1770836037816-4445dbd449fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      },
    ],
  },
  sidebar: {
    pricing: {
      title: 'Service Pricing',
      badge: 'Company rates',
      rows: [
        { label: '30 min session', price: 24 },
        { label: '60 min session', price: 38 },
        { label: '90 min session', price: 50 },
        { label: 'Additional pet add-on', price: 8, isAddon: true },
      ],
      discounts: ['Recurring -12%', 'Urgent +$12', 'Holiday +$10'],
      note: 'Price set by company, not individual providers.',
    },
    booking: {
      title: 'Book Through Company',
      service: '60 min session',
      date: 'Tue, Apr 22',
      preferredProvider: 'Preferred walker (optional)',
      cta: 'Continue Booking',
      helpText: 'Company confirms assignment and sends provider details instantly.',
    },
    areas: {
      title: 'Areas',
      mapLabel: 'Downtown East Side Brooklyn',
      tags: ['Williamsburg', 'DUMBO', 'Park Slope', 'Cobble Hill'],
    },
    secondaryReviews: {
      title: 'Secondary Reviews',
      score: 4.8,
      total: 5,
      distribution: [
        { stars: 5, percent: 68 },
        { stars: 4, percent: 22 },
        { stars: 3, percent: 7 },
        { stars: 2, percent: 2 },
        { stars: 1, percent: 1 },
      ],
      featuredQuote:
        'Reliable team and great communication from dispatch. Preferred provider request was handled perfectly — our cat sitter was wonderful.',
      author: 'Rebecca M.',
      authorBadge: 'Verified Booking',
      link: 'Read all reviews',
    },
  },
  headerActions: {
    primary: 'Book Through Company',
    secondary: 'Message Team',
  },
};
