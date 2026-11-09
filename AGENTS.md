# AGENTS.md

Minimal single-page portfolio: Vite + React 18 + TypeScript + Tailwind 3. No backend, no tests, no component library.

## Commands

```sh
npm install
npm run dev      # http://localhost:8080 (not 5173)
npm run lint
npx tsc --noEmit -p tsconfig.app.json
npm run build    # vite build only; does NOT typecheck
npm run preview
```

- CI order is `lint -> tsc -> build`. Always run that order before finishing.
- There is no test runner. Do not invent one.
- `package-lock.json` is the only lockfile; use npm.

## Structure

- `index.html` → `src/main.tsx` → `src/App.tsx` → `src/pages/Index.tsx`.
- `Index.tsx` composes the page: `Navigation` sits outside `<main>`, all sections are inside it.
- All copy lives in `src/data/`: `profile.ts`, `experience.ts`, `skills.ts`, `work.ts`. Edit data, not JSX, for content and resume bullets.
- `src/lib/links.ts` builds `mailto:` and resume URLs. The resume is `public/Sai_Gopal_Panchakarla_Resume.pdf`; its link uses `import.meta.env.BASE_URL` so it respects the configured base path.
- Shared UI: `SectionHeading.tsx`, `WorkDiagram.tsx` (inline decorative SVGs). No `src/components/ui`, no Radix/shadcn — do not reintroduce it.

## Design rules

- Tokens are HSL CSS variables in `src/index.css`; dark mode is `@media (prefers-color-scheme: dark)` overriding the same variables. There is no `.dark` class and no toggle.
- No gradients, shadows, or cards. Borders are 1px `--border`; radius is 6px on chips only.
- Blue (`--link`) is for links and focus only. Warm orange (`--warm`) is only for the status dot, section indices, and key metrics.
- Widths: text sections `720px`, experience/work/education `960px`, header/hero `1120px`. Section padding is `py-16 md:py-24`.
- Section anchors need the header offset; `section[id]` already sets `scroll-margin-top: 72px`.
- Fonts are self-hosted via Fontsource in `src/main.tsx` (`Inter Variable`, `JetBrains Mono 400`). Add no external font requests.
- Motion is one 200ms fade-up on `<main>` plus 150ms hover colors; `prefers-reduced-motion` is handled in CSS. Do not add per-element delays.

## Deployment

- `.github/workflows/deploy.yml` runs on pushes to `main` and PRs: lint → typecheck → build → deploy to GitHub Pages. PRs build but do not deploy.
- Site URL: `https://saii.qzz.io/`, served by GitHub Pages with the custom domain in `public/CNAME`. One-time repo setting: Settings → Pages → Source → GitHub Actions and custom domain `saii.qzz.io`.
- The workflow builds with `VITE_BASE_PATH=/` because the custom domain serves from the root; `vite.config.ts` also falls back to `/` locally. Never hardcode root-absolute asset URLs.
- Cloudflare DNS must stay DNS-only (grey cloud); proxying breaks GitHub Pages certificate issuance.
- Canonical/OG URLs in `index.html`, plus `public/robots.txt` and `public/sitemap.xml`, must use the custom domain.

## Gotchas

- `tsconfig.app.json` is intentionally loose (`strict`, `noImplicitAny`, `strictNullChecks` off). Don't tighten it as a drive-by change.
- The old Lovable tooling, router, query client, and shadcn primitives were removed. Keep the bundle lean; only React, React DOM, and fonts are runtime dependencies.
