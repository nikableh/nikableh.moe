// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  runtimeConfig: {
    public: undefined
  },

  modules: ['@nuxtjs/tailwindcss'],

  tailwindcss: {
    exposeConfig: true,
  },
})