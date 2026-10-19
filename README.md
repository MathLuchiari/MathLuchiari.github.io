# Matheus Luchiari — Portfolio

Personal portfolio with a comic-book look: halftone dots, heavy ink outlines, speech bubbles and primary colors — wrapped around plain, recruiter-friendly content.

**Live:** https://mathluchiari.github.io

## Stack

- Angular 21 — standalone components, signals, signal inputs, new control flow (`@if`, `@for`, `@let`), `OnPush` everywhere
- SCSS with design tokens (CSS custom properties) and a handful of shared comic primitives
- No UI library, no runtime dependencies beyond Angular — ~42 kB transferred
- Deployed to GitHub Pages by GitHub Actions on every push to `main`

## Structure

```
src/
├── styles.scss                     # tokens + shared primitives (panel, chip, btn, halftone, rays)
└── app/
    ├── content/
    │   ├── portfolio.model.ts      # typed content model
    │   └── portfolio.data.ts       # ALL site copy lives here
    ├── layout/site-header/         # sticky nav, mobile menu, scroll-spy
    ├── shared/section-heading/     # "// kicker" + tilted section title
    └── sections/                   # hero, experience, skills, projects, education, contact
```

Content and presentation are separated: to update the site, edit `portfolio.data.ts`. Optional fields (project links, contact links) are hidden when left out.

## Running locally

```bash
npm install
npm start          # http://localhost:4200
npm run build      # production build in dist/portfolio/browser
```

`.npmrc` sets `legacy-peer-deps=true` to work around an npm 10 resolver bug with Angular 21's optional peer dependencies.

## Accessibility

Skip link, semantic landmarks and headings, real links/buttons, visible focus rings, 44px touch targets on mobile, `aria-current` on the active nav item, and `prefers-reduced-motion` respected.
