export function usePointer() {
  const pointer = reactive({ x: 0, y: 0 })

  const onMouseMove = (e: MouseEvent) => {
    pointer.x = (e.clientX / window.innerWidth) * 2 - 1
    pointer.y = -(e.clientY / window.innerHeight) * 2 + 1
  }

  onMounted(() => window.addEventListener('mousemove', onMouseMove))
  onUnmounted(() => window.removeEventListener('mousemove', onMouseMove))

  return { pointer }
}
