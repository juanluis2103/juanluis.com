<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
  <span class="text-xs px-3 py-1 rounded-full bg-[--color-border] text-[--color-accent] font-mono">
    {{ label }}
  </span>
</template>
