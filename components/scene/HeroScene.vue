<script setup lang="ts">
const { pointer } = usePointer()
</script>

<template>
  <div class="absolute inset-0">
    <TresCanvas
      window-size
      :alpha="true"
      :antialias="true"
    >
      <TresPerspectiveCamera :position="[0, 0, 5]" />
      <SceneLighting />
      <FloatingMesh :pointer="pointer" />
    </TresCanvas>
  </div>
</template>
