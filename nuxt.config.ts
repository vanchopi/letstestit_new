// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['vuetify/styles'],
  build: { transpile: ['vuetify'] },

  vite: {
    plugins: [
      vuetify({ autoImport: true }),
    ],
    ssr: {
      noExternal: ['vuetify'],
    },
  },
})
