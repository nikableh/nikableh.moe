import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  modules: ['@nuxt/image', '@nuxt/fonts'],

  runtimeConfig: {
    public: undefined
  },

  css: ['~/assets/css/global.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  fonts: {
    families: [
      { name: 'Maple Mono', src: '/fonts/MapleMonoNL-Regular.woff2' }
    ],
    defaults: {
      preload: true,
    },
  },

  app: {
    head: {
      title: "nikableh.moe",
      charset: 'UTF-8',
      viewport: 'width=device-width, initial-scale=1, user-scalable=yes',
      htmlAttrs: {
        lang: 'en',
        dir: 'ltr',
      },
      meta: [
        { name: "description", content: "nikableh's website" },
        { name: "theme-color", content: "#171717" },
      ],
    }
  },
})