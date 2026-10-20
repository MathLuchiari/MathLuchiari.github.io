# Matheus Luchiari — Portfolio

Personal portfolio with a comic-book look: halftone dots, heavy ink outlines, speech bubbles and primary colors — wrapped around plain, recruiter-friendly content.

**Live:** https://mathluchiari.github.io

## Stack

- Angular 21 — standalone components, signals, signal inputs, new control flow (`@if`, `@for`, `@let`), `OnPush` everywhere
- SCSS with design tokens (CSS custom properties) and a handful of shared comic primitives
- No UI library, no runtime dependencies beyond Angular — ~47 kB transferred
- English / Portuguese / Spanish, switched at runtime
- Deployed to GitHub Pages by GitHub Actions on every push to `main`

## Structure

```
src/
├── styles.scss                     # tokens + shared primitives (panel, chip, btn, halftone, rays)
└── app/
    ├── content/
    │   ├── portfolio.model.ts      # typed content model
    │   ├── locales/{en,pt,es}.ts   # ALL site copy, one file per language
    │   ├── i18n.ts                 # runtime language switch (signal + localStorage)
    │   └── github-projects.ts      # loads the projects tagged on GitHub
    ├── layout/site-header/         # sticky nav, language switcher, mobile menu, scroll-spy
    ├── shared/section-heading/     # "// kicker" + tilted section title
    └── sections/                   # hero, experience, skills, projects, education, contact
```

Content and presentation are separated: to update the site, edit the files in `content/locales/`. `en.ts` is the reference; `pt.ts` and `es.ts` reuse its non-text values and the compiler makes sure every locale has every field. Optional fields (project links, contact links) are hidden when left out.

## Languages

English, Portuguese (Brazil) and Spanish, switched at runtime from the header — no reload, no separate builds. The first visit follows the browser's language; the choice is saved in `localStorage`. `<html lang>`, the page title and the meta description follow the selected language.

## Projects from GitHub

The Projects section lists the public repos of `MathLuchiari` that have the **`portfolio`** topic (repo page → ⚙ next to *About* → *Topics*). Removing the topic hides the repo; no deploy needed. Both values are set in `src/app/content/github-projects.ts`.

GitHub is the only source of projects: there is no hand-written list in the code. Each visit makes one GitHub API call (search) and reads the READMEs from `raw.githubusercontent.com`, which doesn't count towards the API limit. Results are cached in the browser for an hour. If GitHub can't be reached, the section shows a short notice and the link to the GitHub profile.

### Per-project metadata

Add a hidden block anywhere in the project's `README.md`. It is an HTML comment, so it doesn't show on GitHub:

```md
<!-- portfolio
title: EleitorAI — a RAG assistant for Brazilian elections
title.pt: EleitorAI — um assistente RAG para as eleições brasileiras
description: Answers voters' questions grounded in the source documents.
description.pt: Responde dúvidas de eleitores com base nos documentos originais.
description.es: Responde preguntas de votantes basándose en los documentos originales.
status: In progress
status.pt: Em andamento
status.es: En curso
demo: https://eleitorai.example.com
stack: TypeScript, Fastify, Postgres + pgvector
featured: true
order: 1
cover: Eleitor
highlight: AI
tone: blue
-->
```

Every key is optional. Text keys (`title`, `description`, `status`) accept a `.pt` / `.es` suffix; the site uses the visitor's language, then the plain key, then GitHub's own data.

| Key | Used for | When missing |
| --- | --- | --- |
| `title` | Card title | Repo name (`video-slicer` → `Video Slicer`) |
| `description` | Card text | Repo *About* description |
| `status` | Badge on the cover | No badge |
| `demo` | "Live demo" button (http/https only) | Repo *Website* field, else no button |
| `stack` | Chips, comma-separated | Repo topics (minus `portfolio`), else main language |
| `featured` | `true` = full-width card, listed first | Regular card |
| `order` | Sort order (lower first) | After ordered repos, most recently pushed first |
| `cover` / `highlight` | Cover text; `highlight` is appended in red | Repo name |
| `tone` | `red` or `blue` cover | Alternates |

A "Repository" button linking to the repo is always added.

## Running locally

```bash
npm install
npm start          # http://localhost:4200
npm run build      # production build in dist/portfolio/browser
```

`.npmrc` sets `legacy-peer-deps=true` to work around an npm 10 resolver bug with Angular 21's optional peer dependencies.

## Accessibility

Skip link, semantic landmarks and headings, real links/buttons, visible focus rings, 44px touch targets on mobile, `aria-current` on the active nav item, and `prefers-reduced-motion` respected.
