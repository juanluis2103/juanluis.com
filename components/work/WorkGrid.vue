<script setup lang="ts">
const projects = useProjects()
</script>

<template>
  <section class="min-h-screen px-8 md:px-20 py-32">
    <h2 class="text-4xl font-bold text-[--color-text-primary] mb-16">Work</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        v-bind="project"
      />
    </div>
  </section>
</template>
