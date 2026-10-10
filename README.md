# Achraf Sghiri — Developer Portfolio

A production-ready personal portfolio for **Achraf Sghiri**, a future computer and
network engineer specialising in digital systems development (DDSI, EMSI).

Built with Next.js (App Router), TypeScript in strict mode, Tailwind CSS v4,
Lucide icons and Motion for restrained entrance animations.

## Requirements

- Node.js 20.9 or later (developed on Node 24)
- npm

## Running locally

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run lint       # ESLint (eslint-config-next)
npm run typecheck  # tsc --noEmit
npm run build      # production build
npm run start      # serve the production build
```

## Deployment

The site is a fully static-friendly Next.js app with no backend, database or
authentication, so it deploys to Vercel without configuration:

1. Push the repository to GitHub.
2. Import it in Vercel — the framework preset is detected automatically.
3. Build command `next build`, output as handled by the Next.js builder.

Once a real domain exists, add it to `metadata.metadataBase` in
`src/app/layout.tsx` to enable absolute canonical and social URLs.

## Project structure

```
src/
  app/
    layout.tsx              Root layout, fonts, SEO metadata, skip link
    page.tsx                Home page composition
    not-found.tsx           404 page
    icon.svg                Site icon
    globals.css             Tailwind theme tokens and base styles
    projects/[slug]/page.tsx  Statically generated project case studies
  components/
    CvAction.tsx            Conditional CV download / email fallback
    contact/                Copy-to-clipboard email control
    hero/                   Hero and layered application diagram
    layout/                 Navigation and footer
    projects/               Project cards and category schematics
    sections/               About, Experience, Projects, Skills, Education,
                            Capabilities, Contact
    ui/                     Button, Container, Reveal, Section, TechLabel,
                            Timeline primitives
  data/
    site.ts                 Identity, navigation, socials, facts, languages
    experience.ts           Internship entries
    projects.ts             Project catalogue and case-study content
    education.ts            Qualifications
    skills.ts               Skill categories and hero stack layers
  lib/                      Class-name helpers and social icon mapping
```

Content lives in `src/data` as typed structures; components only render it, so
copy can be updated without touching layout code.

## Assets to supply

| Asset | Location | Behaviour |
| --- | --- | --- |
| CV PDF | `public/Achraf-Sghiri-CV.pdf` | If this file exists, the hero and contact section show a real **Download CV** button. If it is missing, the site shows **Request CV by email** instead and never links to a non-existent file. |

No portrait photograph or project screenshots are shipped with this repository.
The hero therefore uses a typographic treatment and each project uses an original
SVG schematic for its category rather than fabricated product imagery. If real
screenshots become available, add them under `public/` and reference them from
`src/data/projects.ts`.

## Factual scope

All content is derived from the CV: no invented dates, metrics, clients,
certifications or repository URLs. Internship entries carry no dates because the
CV does not state them, and no project links to a repository or live demo
because none is documented. Project case studies describe scope and stack
without claiming deployment or commercial use.
