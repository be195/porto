// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  content: {
    documentDriven: true
  },
  css: ['@/assets/styles/main.css'],
  modules: ['@nuxt/content'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
