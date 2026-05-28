# Project State — juanluis Portfolio

Current snapshot of everything that exists in the codebase. Updated manually as sections are built.

---

## Status

| Section | Status |
|---|---|
| Project scaffold & config | Done |
| Design tokens & global CSS | Done |
| Layout system (Nuxt layouts) | Done |
| Header + navigation | Done |
| Pages (routes created) | Done — all empty |
| Hero section | Skeleton only — no content |
| About section | Skeleton only — no content |
| Projects grid | Skeleton only — placeholder data |
| My Stack section | Not started |
| Playground section | Not started |
| Contact section | Skeleton only — no content |
| 3D scene (Tres.js) | Scaffold built, not wired to any page |
| Smooth scroll (Lenis) | Built, not mounted globally yet |
| Animations (GSAP / Motion) | Installed, not used yet |

---

## Routes

| Label | Path | Page file |
|---|---|---|
| Me | `/` | `pages/index.vue` |
| About | `/about` | `pages/about.vue` |
| Projects | `/projects` | `pages/projects.vue` |
| My Stack | `/stack` | `pages/stack.vue` |
| Playground | `/playground` | `pages/playground.vue` |
| Contact | `/contact` | `pages/contact.vue` |

All pages currently render an empty `<main />`. The header appears on all of them via the default layout.

---

## File Structure

```
juanluis/
├── app.vue                          # Root: NuxtLayout + NuxtPage
├── nuxt.config.ts                   # Nuxt config (modules, Vite, head, transitions)
├── tsconfig.json                    # Extends .nuxt/tsconfig.json
├── package.json
│
├── layouts/
│   └── default.vue                  # AppHeader + <slot /> with pt-16 offset
│
├── pages/
│   ├── index.vue                    # / — empty
│   ├── about.vue                    # /about — empty
│   ├── projects.vue                 # /projects — empty
│   ├── stack.vue                    # /stack — empty
│   ├── playground.vue               # /playground — empty
│   └── contact.vue                  # /contact — empty
│
├── components/
│   ├── layout/                      # UI shell — always visible
│   │   ├── AppHeader.vue            # Fixed header bar, logo + nav
│   │   ├── AppNav.vue               # <ul> of nav links, owns the link list
│   │   └── AppNavLink.vue           # Single NuxtLink with active underline animation
│   │
│   ├── sections/                    # Page-level content blocks (skeletons)
│   │   ├── HeroSection.vue          # Mounts HeroScene + HeroContent
│   │   ├── HeroContent.vue          # Eyebrow, h1, subheading, CTA button
│   │   ├── AboutSection.vue         # Empty placeholder
│   │   └── ContactSection.vue       # Empty placeholder
│   │
│   ├── work/                        # Projects page hierarchy
│   │   ├── WorkGrid.vue             # Parent — grid layout, iterates projects
│   │   ├── ProjectCard.vue          # Child — single project card
│   │   └── ProjectCardTag.vue       # Grandchild — single tag chip
│   │
│   └── scene/                       # Tres.js 3D components (not mounted on any page yet)
│       ├── HeroScene.vue            # TresCanvas, camera, mounts Lighting + Mesh
│       ├── SceneLighting.vue        # AmbientLight + DirectionalLight + PointLight
│       └── FloatingMesh.vue         # TorusKnot, rotates with mouse via usePointer
│
├── composables/
│   ├── useBreakpoint.ts             # isMobile / isTablet / isDesktop (useWindowSize)
│   ├── useLenis.ts                  # Smooth scroll instance, RAF loop, auto-destroy
│   ├── usePointer.ts                # Normalized mouse coords (-1 to 1) for 3D
│   └── useProjects.ts              # Static project data (placeholder — 2 entries)
│
├── types/
│   └── project.ts                   # Project interface: id, title, description, tags, thumbnail, url, repo
│
├── assets/
│   └── styles/
│       └── main.css                 # Tailwind v4 import + @theme tokens + base reset + page transitions
│
└── public/
    └── favicon.svg                  # SVG favicon: indigo rounded rect with "JL" monogram
```

---

## Component Hierarchy

### Layout shell (every page)
```
app.vue
└── layouts/default.vue
    ├── components/layout/AppHeader.vue       ← parent
    │   └── components/layout/AppNav.vue      ← child
    │       └── components/layout/AppNavLink.vue  ← grandchild (×6)
    └── <slot />  ← page content goes here
```

### Projects page (built but not wired)
```
pages/projects.vue
└── components/work/WorkGrid.vue      ← parent: grid + iteration
    └── components/work/ProjectCard.vue   ← child: single card
        └── components/work/ProjectCardTag.vue  ← grandchild: tag chip
```

### Hero section (built but not wired to index.vue)
```
components/sections/HeroSection.vue
├── components/scene/HeroScene.vue
│   ├── components/scene/SceneLighting.vue
│   └── components/scene/FloatingMesh.vue
└── components/sections/HeroContent.vue
```

---

## Design Tokens

Defined in `assets/styles/main.css` via Tailwind v4 `@theme`:

| Token | Value | Used for |
|---|---|---|
| `--color-background` | `#0a0a0f` | Page background |
| `--color-surface` | `#13131a` | Cards, panels |
| `--color-border` | `#1e1e2e` | Dividers, card borders |
| `--color-accent` | `#6366f1` | Links, highlights, 3D point light |
| `--color-accent-hover` | `#818cf8` | Hover state for accent elements |
| `--color-text-primary` | `#e2e8f0` | Headings, active nav |
| `--color-text-secondary` | `#94a3b8` | Body text, inactive nav |
| `--font-sans` | Inter → system-ui | Body font |
| `--font-mono` | JetBrains Mono → ui-monospace | Logo, tags, eyebrow labels |

---

## Configuration

### nuxt.config.ts — active modules
| Module | Purpose |
|---|---|
| `@tresjs/nuxt` | Auto-imports all Tres.js components (`TresCanvas`, `TresMesh`, etc.) |
| `@nuxt/icon` | Icon component powered by Iconify — `heroicons` collection pre-installed |
| `@vueuse/motion/nuxt` | Auto-imports motion directives (`v-motion`) |

### nuxt.config.ts — other settings
- **Tailwind v4** wired as a Vite plugin (`@tailwindcss/vite`), not a Nuxt module
- **TypeScript** strict mode + type checking enabled
- **Page transitions** `page` (opacity + translateY, out-in mode)
- **View Transitions API** enabled (experimental)
- **Favicon** `/favicon.svg` — SVG with `jl.` monogram

### Auto-imports active (Nuxt default)
- All Vue APIs: `ref`, `computed`, `reactive`, `onMounted`, `watch`, etc.
- All composables in `composables/`
- All components in `components/` (including subdirectories)

---

## Dependencies

### Runtime
| Package | Version | Role |
|---|---|---|
| `nuxt` | ^3.16.2 | Framework |
| `vue` | ^3.5.13 | UI layer |
| `vue-router` | ^4.5.0 | Routing |
| `@tresjs/core` | ^4.3.2 | Three.js for Vue |
| `@tresjs/nuxt` | ^2.1.0 | Tres.js Nuxt module |
| `@nuxt/icon` | ^1.10.3 | Icon system |
| `@vueuse/core` | ^12.7.0 | Utility composables |
| `@vueuse/motion` | ^2.2.6 | Animation directives |
| `gsap` | ^3.12.7 | Timeline animations |
| `lenis` | ^1.3.4 | Smooth scroll |

### Dev
| Package | Version | Role |
|---|---|---|
| `tailwindcss` | ^4.1.4 | Styling |
| `@tailwindcss/vite` | ^4.1.4 | Tailwind v4 Vite plugin |
| `typescript` | ^5.8.3 | Type safety |
| `vue-tsc` | ^2.2.10 | Vue template type checking |

---

## Known Gaps / Next Steps

- `useLenis` is built but not called anywhere — needs to be mounted in `layouts/default.vue`
- The 3D scene components exist but `HeroSection` is not used in `pages/index.vue`
- `useProjects` returns hardcoded placeholder data — needs real content
- No mobile nav (hamburger menu) — `AppNav` is hidden on small screens currently
- No fonts loaded — Inter and JetBrains Mono are referenced in `@theme` but not imported
- `assets/shaders/` directory referenced in CLAUDE.md does not exist yet
- `components/ui/` directory referenced in CLAUDE.md does not exist yet
