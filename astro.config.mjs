// @ts-check
import { defineConfig } from 'astro/config'
import relativeLinks from 'astro-relative-links'
import { fileURLToPath } from 'url'

// https://astro.build/config
export default defineConfig({
  // Optional canonical origin for meta/sitemap. Asset URLs stay relative via
  // astro-relative-links so `dist/` works on any host (root or subdirectory).
  site: 'https://yashchenkops.github.io',
  // Leave base at "/" — relativeLinks() rewrites built HTML/CSS/JS to ./ paths.
  compressHTML: false,
  integrations: [relativeLinks()],
  vite: {
    build: {
      minify: false,
      cssMinify: false,
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: (content, filename = '') => {
            const normalizedFilename = filename.replaceAll('\\', '/')
            const isScssCoreFile = [
              '/src/styles/base/_functions.scss',
              '/src/styles/base/_variables.scss',
              '/src/styles/base/_mixins.scss',
            ].some((path) => normalizedFilename.endsWith(path))

            if (isScssCoreFile) {
              return content
            }

            return `
              @use "@/styles/base/functions" as *;
              @use "@/styles/base/variables" as v;
              @use "@/styles/base/mixins" as m;
            ${content}`
          },
        },
      },
    },
  },
})
