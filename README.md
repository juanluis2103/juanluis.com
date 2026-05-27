# Juan Luis — Frontend Developer Portfolio

A personal portfolio and resume showcase built entirely on the frontend, designed to demonstrate technical skill, visual sensibility, and modern web development capabilities.

---

## Purpose

This project exists solely as a professional showcase. It is not a product, SaaS, or tool — it is a living resume that communicates who I am as a developer through the code itself, the interactions I design, and the experiences I build.

---

## Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | **Nuxt 3** | Vue 3 + Vite under the hood. SSG mode = zero server cost, instant loads. Auto-imports, file-based routing, first-class TypeScript. |
| Runtime | **Node.js** | Build tooling, dev server, and package management. No server-side runtime in production — output is fully static. |
| Bundler | **Vite** (via Nuxt) | Sub-second HMR, fast cold starts, tree-shaking by default. |
| 3D | **Tres.js** | Declarative Three.js for Vue. Scene graph as components. Pairs natively with Nuxt/Vue reactivity. |
| Animations | **GSAP** + **@vueuse/motion** | GSAP for timeline-based sequences and scroll triggers. Motion for lightweight component-level transitions. |
| Smooth scroll | **Lenis** | Buttery scroll feel, essential for scroll-driven 3D and parallax sections. |
| Styling | **Tailwind CSS v4** | Utility-first, zero unused CSS in production, fully composable with Vue's scoped styles. |
| Icons | **Iconify + Nuxt Icon** | 200k+ icons, on-demand loading, no bundle bloat. |
| Fonts | **Fontsource** | Self-hosted fonts, no external requests, better privacy and load predictability. |
| Deployment | **Vercel / Netlify** | Edge CDN, instant preview deploys, generous free tier for static output. |

---

## What This Portfolio Demonstrates

### Technical Skills
- Component architecture and reusability in Vue 3 (Composition API, `<script setup>`)
- 3D scene construction: lighting, cameras, geometries, shaders (GLSL), and post-processing
- Animation principles applied to the web: easing, staggering, physics-based motion
- Performance-conscious development: lazy loading, code splitting, asset optimization
- Responsive design across breakpoints without sacrificing the visual experience
- Accessibility considerations in interactive and animated interfaces
- Clean, typed TypeScript across the entire codebase

### Design Sensibility
- Layout composition, whitespace, and typographic hierarchy
- Color theory applied to dark/light themes
- Micro-interactions that feel intentional, not decorative
- Scroll-driven storytelling

---

## Project Structure (Nuxt 3 conventions)

```
juanluis/
├── app.vue                  # Root layout
├── nuxt.config.ts           # Nuxt + module config
├── tailwind.config.ts
├── pages/
│   ├── index.vue            # Landing / hero
│   ├── about.vue            # Background, values, stack
│   ├── work.vue             # Projects and case studies
│   └── contact.vue          # Contact form / links
├── components/
│   ├── scene/               # Tres.js 3D components
│   ├── ui/                  # Buttons, cards, inputs
│   └── sections/            # Page-level sections
├── composables/             # Shared logic (scroll, theme, breakpoints)
├── assets/
│   ├── styles/              # Global CSS, Tailwind base
│   ├── shaders/             # GLSL files
│   └── fonts/
└── public/                  # Static assets (models, textures, favicons)
```

---

## Key Sections

### Hero
Full-viewport 3D scene with an interactive element reacting to mouse/pointer movement. Establishes identity and tone immediately.

### About
Brief professional narrative, core values, and a visual skills breakdown. Not a bullet list of buzzwords — readable prose backed by evidence in the Work section.

### Work
Case studies of selected projects: problem, approach, outcome, and tech used. Includes live links and source when available.

### Contact
Minimal, functional. Direct links to email, LinkedIn, and GitHub. Optional contact form with validation.

---

## Performance Targets

| Metric | Target |
|---|---|
| Lighthouse Performance | ≥ 90 |
| First Contentful Paint | < 1.2s |
| Cumulative Layout Shift | < 0.1 |
| Total Blocking Time | < 200ms |
| Bundle size (initial JS) | < 200kb gzipped |

3D canvas loads asynchronously and does not block page interactivity.

---

## Running Locally

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Build static output
npm run generate

# Preview production build
npm run preview
```

---

## Deployment

The site is deployed as a fully static site (`nuxt generate`) to Vercel. Every push to `main` triggers an automatic deploy. Preview branches are generated for every PR.

---

## Notes

- No backend, no database, no authentication — this is pure frontend.
- All 3D assets are optimized (Draco-compressed GLTF where applicable, compressed textures).
- Motion is disabled or reduced when `prefers-reduced-motion` is active.
- The codebase is intentionally readable — this is a portfolio of craft, and the source is part of that craft.
