export type Language = 'ka' | 'ru' | 'en';

export interface LanguageOption {
  code: Language;
  label: string;
  nativeLabel: string;
  flag: string;
  short: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'ka', label: 'Georgian', nativeLabel: 'ქართული', flag: '🇬🇪', short: 'KA' },
  { code: 'ru', label: 'Russian', nativeLabel: 'Русский', flag: '🇷🇺', short: 'RU' },
  { code: 'en', label: 'English', nativeLabel: 'English', flag: '🇬🇧', short: 'EN' },
];
