# The Swan Starter: Deploy

Static multi-lang landing page, built with [Astro](https://astro.build).

Live (GitHub Pages project site): [https://the-swan-foundation.github.io/the-swan-starter-website/](https://the-swan-foundation.github.io/the-swan-starter-website/)

## Prerequisites

- Node.js 22.12+ (required by Astro)

## Commands

```bash
npm install     # install dependencies
npm run dev     # http://localhost:4321/the-swan-starter-website/
npm run build   # output to dist/
npm run preview # http://localhost:4321/the-swan-starter-website/ after build
```

`astro.config.mjs` defaults to `SITE_URL=https://the-swan-foundation.github.io` and `ASTRO_BASE=/the-swan-starter-website/`, so local and CI builds need no extra variables. The dev server serves the site at http://localhost:4321/the-swan-starter-website/.

## Editing content

| What | Where |
|------|--------|
| Copy (per language) | `src/i18n/<code>.json` |
| Layout / sections | `src/components/Landing.astro` |
| Styles | `src/styles/global.css` |
| Fonts, `<head>` | `src/layouts/Layout.astro` |
| Language switcher | `src/components/LangSwitcher.astro` + `src/i18n/locales.ts` |

To add a language: create `src/i18n/<code>.json`, register it in `src/i18n/locales.ts`, and add `src/pages/<code>/index.astro`.

The root `/` page redirects to the visitor's browser language (English by default).

## GitHub Pages

The workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds the site with `withastro/action` and deploys `dist/` with `actions/deploy-pages` on every push to `main` (or manually via *Run workflow*).

In the repository settings, **Settings → Pages → Build and deployment → Source** must be set to **GitHub Actions**. With "Deploy from a branch", GitHub also runs its default Jekyll build on the raw sources, which fails on the `.astro` files.

The repository is not named `the-swan-foundation.github.io`, so GitHub Pages serves it as a project site, under the `/the-swan-starter-website/` sub-path. There is no `public/CNAME`.

### Custom domain (later)

To serve the site from a custom domain at the root:

1. Create `public/CNAME` with the domain name
2. Change the `site` default in `astro.config.mjs` to the new URL and the `base` default to `/` (or set `SITE_URL` and `ASTRO_BASE` in the workflow), so canonical and `hreflang` links are correct
3. Configure DNS and the custom domain in GitHub Pages settings
