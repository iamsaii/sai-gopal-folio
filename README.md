# Sai Gopal Panchakarla — Portfolio

Minimal single-page portfolio built with Vite, React, TypeScript, and Tailwind CSS.

## Development

```sh
npm install
npm run dev      # http://localhost:8080
npm run lint
npx tsc --noEmit -p tsconfig.app.json
npm run build
npm run preview
```

To reproduce the GitHub Pages base path locally:

```sh
VITE_BASE_PATH=/sai-gopal-folio/ npm run build
VITE_BASE_PATH=/sai-gopal-folio/ npm run preview
```

## Content

All copy lives in `src/data/`:

- `profile.ts` — name, role, summary, contact links, status, education
- `experience.ts` — roles and resume bullets
- `skills.ts` — grouped toolkit
- `work.ts` — selected work case studies

The downloadable resume is `public/Sai_Gopal_Panchakarla_Resume.pdf`. Replace that file to update the download; the link uses `import.meta.env.BASE_URL`, so it keeps working under the GitHub Pages subpath.

## Design

- Tokens and global styles: `src/index.css`
- Tailwind theme: `tailwind.config.ts`
- Fonts are self-hosted with Fontsource (Inter variable + JetBrains Mono 400)
- Light and dark palettes follow `prefers-color-scheme`; no toggle
- No component library, no gradients, no shadows

## Deployment

Pushes to `main` run `.github/workflows/deploy.yml` (lint → typecheck → build → deploy) and publish to GitHub Pages:

**https://iamsaii.github.io/sai-gopal-folio/**

One-time setup: repository **Settings → Pages → Source → GitHub Actions**.

The workflow builds with `VITE_BASE_PATH=/sai-gopal-folio/`. If you connect a custom domain, add `public/CNAME`, set `VITE_BASE_PATH=/` in the workflow, and update the canonical/OG URLs in `index.html`.
