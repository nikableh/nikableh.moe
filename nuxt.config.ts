import tailwindcss from "@tailwindcss/vite";
import type { ManifestOptions } from 'vite-plugin-pwa'

const appManifest: Partial<ManifestOptions> = {
  name: "nikableh.moe",
  short_name: "nikableh.moe",
  description: "nikableh's website",
  lang: "en",
  start_url: "/",
  id: "/",
  orientation: "any",
  background_color: "#171717",
  display: "standalone",
  theme_color: "#171717",
  icons: [
    {
      "src": "/nikableh.png",
      "sizes": "960x960",
      "type": "image/png"
    },
  ]
};

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  modules: ['@nuxt/image', '@nuxt/fonts', '@vite-pwa/nuxt'],

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

  pwa: {
    selfDestroying: true,
    devOptions: {
      enabled: true
    },
    manifest: appManifest,
  },

  app: {
    head: {
      title: appManifest.name,
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, user-scalable=yes',
      htmlAttrs: {
        lang: 'en',
        dir: 'ltr',
      },
      meta: [
        { name: "description", content: appManifest.description },
        { name: "theme-color", content: appManifest.theme_color },
      ],
      link: [
        { rel: 'manifest', href: '/manifest.webmanifest' },
      ]
    }
  },
})