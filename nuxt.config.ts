import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  runtimeConfig: {
    public: undefined
  },

  css: ['~/assets/css/global.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: ['@nuxt/image', '@nuxt/fonts', '@vite-pwa/nuxt'],

  fonts: {
    families: [
      { name: 'Maple Mono', src: '/fonts/MapleMonoNL-Regular.woff2' }
    ],
    defaults: {
      preload: true,
    },
  }
})