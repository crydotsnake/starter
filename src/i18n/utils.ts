import en from './en.json';
import fr from './fr.json';
import ro from './ro.json';
import {
  defaultLocale,
  localeConfig,
  locales,
  type Locale,
} from './locales';

export type { Locale };
export { defaultLocale, localeConfig, locales };

export type Translations = typeof en;

const catalogs: Record<Locale, Translations> = { en, fr, ro };

export function getTranslations(locale: string): Translations {
  if (!locales.includes(locale as Locale)) {
    throw new Error(`Unknown locale: ${locale}`);
  }
  return catalogs[locale as Locale];
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
