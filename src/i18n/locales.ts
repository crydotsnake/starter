export const localeConfig = [
  { code: 'en', label: 'English', hreflang: 'en', match: ['en'] },
  { code: 'fr', label: 'Français', hreflang: 'fr', match: ['fr'] },
  { code: 'ro', label: 'Română', hreflang: 'ro', match: ['ro'] },
  { code: 'de', label: 'Deutsch', hreflang: 'de', match: ['de'] },
] as const;

export type Locale = (typeof localeConfig)[number]['code'];

export const locales = localeConfig.map((l) => l.code) as Locale[];

export const defaultLocale: Locale = 'en';

export function detectLocale(browserLanguage: string): Locale {
  const lang = browserLanguage.toLowerCase();
  for (const locale of localeConfig) {
    if (locale.match.some((prefix) => lang === prefix || lang.startsWith(`${prefix}-`))) {
      return locale.code;
    }
  }
  return defaultLocale;
}
