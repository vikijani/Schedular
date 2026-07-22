import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    resolve: {
      // Ensure tsconfig paths resolution (Nuxt/Vite supports this natively)
      tsconfigPaths: true,
      // Explicit aliases so `@` and `~` point to project root
      alias: {
        '@': fileURLToPath(new URL('./', import.meta.url)),
        '~': fileURLToPath(new URL('./', import.meta.url)),
      },
    },
  },
})