// @ts-check
import { defineConfig } from 'astro/config'
import { fileURLToPath } from 'url'

// https://astro.build/config
export default defineConfig({
  vite: {
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
