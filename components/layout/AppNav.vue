<script setup lang="ts">
const links = [
  { label: 'Me',         to: '/'           },
  { label: 'About',      to: '/about'       },
  { label: 'Projects',   to: '/projects'    },
  { label: 'My Stack',   to: '/stack'       },
  { label: 'Playground', to: '/playground'  },
  { label: 'Contact',    to: '/contact'     },
]
</script>

<template>
  <nav aria-label="Main navigation">
    <ul class="flex items-center gap-8 list-none">
      <li v-for="link in links" :key="link.to">
        <AppNavLink :label="link.label" :to="link.to" />
      </li>
    </ul>
  </nav>
</template>
