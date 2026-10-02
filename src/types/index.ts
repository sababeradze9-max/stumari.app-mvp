export type PropertyType = 'apartment' | 'guesthouse' | 'hotel' | 'villa' | 'resort';
export type PropertyStatus = 'published' | 'draft';
export type SourcePlatform = 'airbnb' | 'booking' | 'vrbo' | 'direct' | 'other';

export interface Recommendation {
  id: string;
  name: string;
  category: 'coffee' | 'food' | 'groceries' | 'activity' | 'nightlife';
  description: string;
  hostTip?: string;
  address: string;
  distance: string;
  mapsUrl: string;
  latitude?: number;
  longitude?: number;
  walkingTimeMinutes?: number;
  walkingDirections?: string;
}

export interface ApplianceGuide {
  id: string;
  title: string;
  icon: 'Thermometer' | 'Coffee' | 'Shirt' | 'Tv' | 'Flame' | 'Sparkles' | 'Utensils' | 'Zap';
  instructions: string;
  troubleshooting?: string;
}

export interface Property {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  type: PropertyType;
  status: PropertyStatus;
  createdAt: string;
  updatedAt?: string;
  viewsCount: number;

  // Source import placeholders (for Airbnb/Booking without breaking V1)
  sourcePlatform?: SourcePlatform;
  sourceUrl?: string;

  // Location & Imagery
  address: string;
  city: string;
  country: string;
  latitude?: number;
  longitude?: number;
  coverImage: string;
  languages: string[]; // e.g. ['en', 'ka']

  // Host Details
  hostName: string;
  hostAvatar: string;
  hostRole: string;
  hostPhone: string;
  hostWhatsApp: string;
  emergencyContact: string;

  // 1. Welcome
  welcomeTitle?: string;
  welcomeGreeting?: string;

  // 2. Check-in
  checkInTime: string;
  checkInMethod: 'lockbox' | 'keypad' | 'in-person' | 'concierge';
  doorKeypadCode: string;
  lockboxCode: string;
  parkingInstructions: string;
  arrivalDirections: string;

  // 3. Wi-Fi
  wifiNetwork: string;
  wifiPassword: string;

  // 4. How Things Work
  appliances: ApplianceGuide[];

  // 5. House Rules
  houseRules: string[];
  quietHours: string;
  trashSchedule: string;

  // 6. Explore / Recommendations
  recommendations: Recommendation[];

  // 7. Transport
  taxiInfo: string;
  transitInfo: string;
  airportTransit: string;

  // 8. Check-out
  checkOutTime: string;
  departureChecklist: string[];

  // 9. Contact / Emergency
  emergencyServicesNumber: string; // e.g. "112"
}

export interface HostUser {
  id: string;
  name: string;
  email: string;
  avatar: string;
  plan: 'free' | 'pro' | 'enterprise';
  billingCycle: 'monthly' | 'annual';
  stripeCustomerId?: string;
  joinedDate: string;
  propertyCount: number;
  status?: 'active' | 'suspended';
}

export interface PlatformMetric {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'neutral' | 'down';
}

export type AppRoute =
  // 1. Marketing
  | '/'
  | '/features'
  | '/for-properties'
  | '/pricing'
  | '/demo'
  // 2. Host SaaS
  | '/app'
  | '/app/properties'
  | '/app/properties/:id'
  // 3. Onboarding
  | '/onboarding'
  // 4. Guest Experience
  | '/g/:propertySlug'
  // 5. Admin
  | '/admin'
  | '/admin/hosts'
  | '/admin/properties'
  | '/admin/settings';
