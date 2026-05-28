# CLAUDE.md — Development Rules for juanluis Portfolio

This file defines the rules Claude must follow when working on this project. These are non-negotiable constraints, not suggestions.

---

## Component Architecture: One Responsibility, One File

Every component must have a single, well-defined responsibility. If a component does more than one thing, it must be split before any new code is added.

### The Rule

**Before writing or modifying any component, ask: does this component do exactly one thing?**

If the answer is no — split it first, then write the code.

### Hierarchy Convention

Every multi-level UI element follows a strict parent → child → grandchild file structure. No exceptions.

```
components/
└── cards/
    ├── CardsSection.vue      # Parent   — layout, data fetching, iteration
    ├── Card.vue              # Child    — single card frame, receives props
    └── CardSubItem.vue       # Grandchild — sub-element within a card
```

Each level owns exactly its scope:

| Level | Owns | Does NOT own |
|---|---|---|
| Parent | Layout, iteration, data, slot orchestration | Individual item markup, item-level logic |
| Child | Single item rendering, item-level state | List logic, sibling awareness, data fetching |
| Grandchild | Sub-element rendering, leaf-level interaction | Parent state, sibling state, layout |

---

## Mandatory Pre-Work Before Adding Any Component

Before creating or modifying a component, complete this checklist mentally or in a comment:

1. **What is the single responsibility of this component?** Name it in one noun phrase (e.g. "renders a single project card").
2. **Does any existing component already cover this?** If yes, extend it; do not duplicate.
3. **Does this component contain sub-elements that deserve their own file?** If yes, create those files first.
4. **Will this component accept props or emit events?** Define the interface before writing the template.

If any step reveals that the planned component is doing too much, split it before writing a single line of template code.

---

## File Naming

- Components: `PascalCase.vue` — matches the component name exactly.
- Composables: `camelCase.ts`, prefixed with `use` — e.g. `useScrollProgress.ts`.
- Utilities: `camelCase.ts`, no prefix — e.g. `formatDate.ts`.
- Shaders: `kebab-case.glsl` — e.g. `noise-distortion.glsl`.
- Pages: `kebab-case.vue` — Nuxt file-based routing convention.

---

## Component Size Limits

These are hard limits. If a component exceeds them, refactor before continuing.

| Asset | Limit |
|---|---|
| `<template>` lines | 80 |
| `<script setup>` lines | 100 |
| Props on a single component | 8 |
| Emits on a single component | 5 |
| Composables imported per component | 4 |

A component that needs more than these limits is doing too much.

---

## Props and Emits

- Always type props with TypeScript interfaces or `defineProps<{}>()`. Never use untyped `defineProps([])`.
- Always define emits with `defineEmits<{}>()`. Never use string arrays.
- Props flow down. Events flow up. No component reaches into a sibling or parent to mutate state directly.
- If more than 3 components need the same data, move it to a composable or Pinia store — do not prop-drill.

```vue
<!-- Correct -->
<script setup lang="ts">
interface Props {
  title: string
  description?: string
  isHighlighted: boolean
}
const props = defineProps<Props>()
const emit = defineEmits<{
  select: [id: string]
  close: []
}>()
</script>
```

---

## Composables: Logic Lives Outside Components

Any logic that is reusable, stateful, or non-trivial must live in a composable under `composables/`.

A component's `<script setup>` should read like a list of what the component uses, not how things work:

```vue
<script setup lang="ts">
// Good — the component orchestrates, composables do the work
const { scrollY, progress } = useScrollProgress()
const { theme, toggle } = useTheme()
const cards = useProjectCards()
</script>
```

Logic that belongs in a composable, not a component:
- Scroll tracking
- Animation setup (GSAP timelines)
- Intersection observers
- API calls or data transformation
- Breakpoint detection
- Theme management

---

## 3D Scene Components (Tres.js)

3D scenes follow the same decomposition rules. Each scene element is its own component under `components/scene/`.

```
components/scene/
├── HeroScene.vue         # Mounts the TresCanvas, owns camera and lighting
├── SceneLighting.vue     # All lights as a single unit
├── FloatingMesh.vue      # One animated mesh
└── ParticleField.vue     # Particle system
```

- `TresCanvas` lives only in the top-level scene component.
- Never put animation logic directly in the template. Use `useLoop()` or a composable.
- Shaders go in `assets/shaders/`. Import them; do not inline GLSL strings in `.vue` files.

---

## Styling Rules

- Use Tailwind utility classes as the primary styling mechanism.
- Use `<style scoped>` only for styles that cannot be expressed with Tailwind (e.g. complex pseudo-selectors, GLSL-driven CSS custom properties, keyframe animations).
- Never use global unscoped `<style>` blocks in components. Global styles live in `assets/styles/`.
- Do not mix inline `:style` bindings with Tailwind classes for the same property on the same element.

---

## What Claude Must Never Do

- Create a component that handles layout AND data AND sub-element rendering all at once.
- Add props to a child component that are meant to be passed straight through to a grandchild — use slots or composables instead.
- Write business logic inside a `<template>` expression (method calls for computation are fine; logic chains are not).
- Duplicate a component because it's faster — always check `components/` first.
- Skip the hierarchy and put grandchild markup directly inside the parent to "save files."
- Create a new composable that replicates something already in `composables/`.

---

## Example: Correct Decomposition

**Scenario:** Adding a grid of project cards, each with a tag list.

```
components/
└── work/
    ├── WorkGrid.vue          # Iterates projects, owns the grid layout
    ├── ProjectCard.vue       # Single project: image, title, description, tags slot
    └── ProjectCardTag.vue    # Single tag chip: label, color
```

`WorkGrid.vue` — only knows about the list and the grid:
```vue
<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <ProjectCard v-for="project in projects" :key="project.id" v-bind="project" />
  </div>
</template>
```

`ProjectCard.vue` — only knows about one project:
```vue
<template>
  <article class="rounded-xl overflow-hidden ...">
    <img :src="image" :alt="title" />
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <div class="flex gap-2">
      <ProjectCardTag v-for="tag in tags" :key="tag" :label="tag" />
    </div>
  </article>
</template>
```

`ProjectCardTag.vue` — only knows about one tag:
```vue
<template>
  <span class="text-xs px-2 py-1 rounded-full bg-surface text-accent">{{ label }}</span>
</template>
```

This is the pattern. Always.
