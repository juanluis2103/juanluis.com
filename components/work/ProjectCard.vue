<script setup lang="ts">
import type { Project } from '~/types/project'

defineProps<Project>()
</script>

<template>
  <article class="group rounded-2xl bg-[--color-surface] border border-[--color-border] overflow-hidden hover:border-[--color-accent] transition-colors duration-300">
    <div class="aspect-video bg-[--color-border] overflow-hidden">
      <img
        v-if="thumbnail"
        :src="thumbnail"
        :alt="title"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div class="p-6">
      <h3 class="text-xl font-semibold text-[--color-text-primary] mb-2">{{ title }}</h3>
      <p class="text-[--color-text-secondary] text-sm mb-4 line-clamp-2">{{ description }}</p>
      <div class="flex flex-wrap gap-2">
        <ProjectCardTag
          v-for="tag in tags"
          :key="tag"
          :label="tag"
        />
      </div>
    </div>
  </article>
</template>
