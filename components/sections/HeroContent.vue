<script setup lang="ts">
const text = {
  eyebrow: 'Frontend Developer',
  heading: 'Juan Luis',
  subheading: 'I build fast, interactive, and visually driven web experiences.',
  cta: { label: 'See my work', to: '/work' },
}
</script>

<template>
  <div class="absolute inset-0 flex flex-col justify-center px-8 md:px-20 z-10">
    <p class="text-sm font-mono text-[--color-accent] tracking-widest uppercase mb-4">
      {{ text.eyebrow }}
    </p>
    <h1 class="text-6xl md:text-8xl font-bold text-[--color-text-primary] leading-none mb-6">
      {{ text.heading }}
    </h1>
    <p class="text-lg md:text-xl text-[--color-text-secondary] max-w-xl mb-10">
      {{ text.subheading }}
    </p>
    <NuxtLink
      :to="text.cta.to"
      class="inline-flex items-center gap-2 px-6 py-3 bg-[--color-accent] text-white rounded-lg font-medium w-fit hover:bg-[--color-accent-hover] transition-colors"
    >
      {{ text.cta.label }}
      <Icon name="lucide:arrow-right" class="size-4" />
    </NuxtLink>
  </div>
</template>
