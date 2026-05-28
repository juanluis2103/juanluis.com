<script setup lang="ts">
const { isMobile } = useBreakpoint()
</script>

<template>
  <section class="relative h-screen w-full overflow-hidden">
    <HeroScene v-if="!isMobile" />
    <HeroContent />
  </section>
</template>
