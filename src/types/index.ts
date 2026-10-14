export type PageId =
  | 'accueil'
  | 'excursions'
  | 'detail-excursion'
  | 'location-de-voitures'
  | 'a-propos'
  | 'contact';

export type Language = 'FR' | 'EN' | 'DE';

export interface Excursion {
  id: string;
  title: string;
  tag: string;
  category: 'aventures' | 'oasis' | 'culturels' | '4x4' | 'prives';
  durationTag: string;
  durationCategory: '1-day' | '2-3-days' | '4plus';
  price: string;
  priceNum?: number;
  currency: string;
  image: string;
  description: string;
  overview?: string;
  highlights?: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  itinerary?: Array<{
    day: string;
    title: string;
    description: string;
  }>;
  gallery?: string[];
  included?: string[];
  notIncluded?: string[];
  capacity?: string;
  meetingPoint?: string;
}

export interface Vehicle {
  id: string;
  name: string;
  category: '4x4' | 'suv' | 'sedan';
  categoryLabel: string;
  badge: string;
  badgeTag: string;
  pricePerDay: number;
  image: string;
  description: string;
  transmission: string;
  seats: number;
  feature3: string;
  feature3Icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatarLetter: string;
  source: string;
  rating: number;
  quote: string;
}
