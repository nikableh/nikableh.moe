import tailwindcss from "@tailwindcss/vite";
import { site } from "./shared/site";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  modules: ['@nuxt/image', '@nuxt/fonts', '@nuxt/content', '@nuxtjs/mdc', '@nuxt/icon', 'nuxt-llms'],

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/site.webmanifest': { prerender: true },
  },

  hooks: {
    'build:manifest'(manifest) {
      for (const entry of Object.values(manifest)) {
        // Nuxt prefetches every image a route's chunks reference. Nothing
        // imports one today, but anything that does belongs below the fold
        // behind loading="lazy", where the hint only steals bandwidth from
        // the LCP image on first paint.
        if (entry.resourceType === 'image') {
          entry.prefetch = false
        }

        // Same story for the hydration chunks: modulepreload puts all fifteen
        // of them in the head at high priority, ahead of the stylesheet and
        // the avatar. The entry script tag still pulls them in, one round
        // trip later, which nothing on the page waits for. Dropping the hint
        // also drops the other routes' prefetches, which is the price.
        if (entry.resourceType === 'script') {
          entry.preload = false

          // The renderer drops a prefetch hint only for chunks it already
          // preloads, so the entry has to be excluded by hand now that
          // nothing preloads it — otherwise it downloads twice.
          if (entry.isEntry) {
            entry.prefetch = false
          }
        }
      }
    },
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],

    build: {
      // Inlined assets land in the prerendered HTML, which is render-blocking;
      // base64 also costs a third more bytes than the file it replaces.
      assetsInlineLimit: 0,
    },
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
