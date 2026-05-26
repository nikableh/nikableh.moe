import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  modules: ['@nuxt/image', '@nuxt/fonts', '@nuxt/content', '@nuxtjs/mdc', '@nuxt/icon'],

  css: ['~/assets/css/main.css'],

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
      link: [
        {
          rel: "preconnect",
          href: "https://giscus.app",
        },
        {
          rel: "dns-prefetch",
          href: "https://giscus.app",
        },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
      meta: [
        { name: "description", content: "nikableh's website" },
        { name: "theme-color", content: "#171717" },
        { name: "color-scheme", content: "dark" },
      ],
    }
  },

  content: {
    build: {
      markdown: {
        highlight: {
          theme: 'github-dark',
          langs: [
            'c',
            'cpp',
            'rust',
            'python',
            'json',
            'js',
            'ts',
            'html',
            'css',
            'vue',
            'shell',
            'mdc',
            'md',
            'yaml',
          ]
        }
      }
    }
  }
})
