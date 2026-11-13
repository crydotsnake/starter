# Agent guidelines — website

## Before editing

**Always re-read files in this directory (`website/`) before modifying them.**

The user may edit files manually between sessions. Do not overwrite their changes — check the current file state (indentation, content, structure) before applying a patch.

## Source of truth

The documentation website lives in `docs-site/`, with its own `package.json`: see `docs-site/AGENTS.md`.

The site is built with **Astro** from `src/`.

| Action | File |
|--------|------|
| Copy + locale metadata | `src/i18n/*.json` |
| HTML structure | `src/components/Landing.astro` |
| CSS | `src/styles/global.css` |
| Build | `npm run build` → `dist/` |

Do not edit a legacy root `index.html` if present. Prototype HTML files outside `src/` are not part of the build.

## Commands

```bash
npm install
npm run dev      # local development
npm run build    # generates dist/
```

Run commands from the repository root.
