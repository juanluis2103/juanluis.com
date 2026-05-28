<script setup lang="ts">
defineProps<{
  label: string
  to: string
}>()
</script>

<template>
  <NuxtLink
    :to="to"
    class="relative text-sm font-medium text-[--color-text-secondary] transition-colors duration-200 hover:text-[--color-text-primary] group"
    active-class="text-[--color-text-primary]"
  >
    {{ label }}
    <span
      class="absolute -bottom-0.5 left-0 h-px w-0 bg-[--color-accent] transition-all duration-300 group-hover:w-full"
      aria-hidden="true"
    />
  </NuxtLink>
</template>
