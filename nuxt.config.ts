import tailwindcss from "@tailwindcss/vite";
import { site } from "./shared/site";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  modules: ['@nuxt/image', '@nuxt/fonts', '@nuxt/content', '@nuxtjs/mdc', '@nuxt/icon', 'nuxt-llms'],

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
      title: site.name,
      charset: 'UTF-8',
      viewport: 'width=device-width, initial-scale=1, user-scalable=yes',
      htmlAttrs: {
        lang: 'en',
        dir: 'ltr',
      },
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
      meta: [
        { name: "description", content: site.description },
        { name: "theme-color", content: site.themeColor },
        { name: "color-scheme", content: "dark" },
      ],
    }
  },

  llms: {
    domain: site.url,
    title: site.name,
    description: site.description,
    full: {
      title: `${site.name}, full contents`,
      description: `The full text of every page on ${site.name}`,
    },
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
