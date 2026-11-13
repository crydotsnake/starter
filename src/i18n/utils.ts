import en from './en.json';
import {
  defaultLocale,
  localeCatalogs,
  localeConfig,
  locales,
  type Locale,
} from './locales';

export type { Locale };
export { defaultLocale, localeConfig, locales };

export type Translations = Omit<typeof en, 'locale'>;

export function getTranslations(locale: string): Translations {
  if (!locales.includes(locale)) {
    throw new Error(`Unknown locale: ${locale}`);
  }
  return localeCatalogs[locale];
}

export function localePath(locale: Locale, path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const prefix = `${base}/${locale}`;
  return path ? `${prefix}/${path.replace(/^\//, '')}` : `${prefix}/`;
}

export function alternateUrls(): Record<Locale, string> {
  const site = import.meta.env.SITE.replace(/\/$/, '');
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const prefix = `${site}${base}`;
  return Object.fromEntries(
    localeConfig.map((l) => [l.code, `${prefix}/${l.code}/`]),
  ) as Record<Locale, string>;
}
