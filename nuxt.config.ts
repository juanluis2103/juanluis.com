import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-27',
  devtools: { enabled: false },

  components: {
    dirs: [{ path: '~/components', pathPrefix: false }],
  },

  modules: [
    '@tresjs/nuxt',
    '@nuxt/icon',
    '@vueuse/motion/nuxt',
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  css: ['~/assets/styles/main.css'],

  typescript: {
    strict: true,
    typeCheck: true,
  },

  app: {
    head: {
      title: 'Juan Luis — Frontend Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Frontend developer portfolio — Vue, Nuxt, Three.js, interactive web experiences.' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  experimental: {
    viewTransition: true,
  },
})
