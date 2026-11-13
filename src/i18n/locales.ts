import en from './en.json';

type LocaleCatalog = typeof en;

export type Locale = string;

const catalogModules = import.meta.glob<LocaleCatalog>('./*.json', {
  eager: true,
  import: 'default',
});

export const localeCatalogs = Object.fromEntries(
  Object.entries(catalogModules).map(([path, catalog]) => [
    path.replace(/^\.\//, '').replace(/\.json$/, ''),
    catalog,
  ]),
) as Record<Locale, LocaleCatalog>;

export const localeConfig = Object.entries(localeCatalogs)
  .map(([code, catalog]) => ({ code, ...catalog.locale }))
  .sort((a, b) => a.code.localeCompare(b.code));

export const locales = localeConfig.map((locale) => locale.code);

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
