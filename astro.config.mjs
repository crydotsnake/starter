import { defineConfig } from 'astro/config';

const site = process.env.SITE_URL ?? 'https://the-swan-foundation.github.io';
// Served as a GitHub Pages project site at
// https://the-swan-foundation.github.io/the-swan-starter.github.io/.
// Set ASTRO_BASE=/ when the site moves to a custom domain or an organization site.
const base = process.env.ASTRO_BASE ?? '/the-swan-starter.github.io/';

export default defineConfig({
  site,
  base,
  outDir: 'dist',
});
