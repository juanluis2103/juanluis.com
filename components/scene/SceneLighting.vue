<template>
  <TresGroup>
    <TresAmbientLight :intensity="0.4" />
    <TresDirectionalLight :position="[5, 5, 5]" :intensity="1.2" />
    <TresPointLight :position="[-3, 2, 3]" color="#6366f1" :intensity="2" />
  </TresGroup>
</template>
