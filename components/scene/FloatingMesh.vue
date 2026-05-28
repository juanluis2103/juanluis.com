<script setup lang="ts">
import { useLoop } from '@tresjs/core'
import type { Vector2 } from 'three'

const props = defineProps<{
  pointer: { x: number; y: number }
}>()

const meshRef = shallowRef()

useLoop().onBeforeRender(({ elapsed }) => {
  if (!meshRef.value) return
  meshRef.value.rotation.x = elapsed * 0.2 + props.pointer.y * 0.3
  meshRef.value.rotation.y = elapsed * 0.3 + props.pointer.x * 0.3
})
</script>

<template>
  <TresMesh ref="meshRef" :position="[1.5, 0, 0]">
    <TresTorusKnotGeometry :args="[1, 0.35, 128, 32]" />
    <TresMeshStandardMaterial
      color="#6366f1"
      :roughness="0.2"
      :metalness="0.8"
      :wireframe="false"
    />
  </TresMesh>
</template>
