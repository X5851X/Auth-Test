export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE_URL || 'http://localhost:3001'
    }
  },
  ssr: false,
  pages: true,
  srcDir: './',
  router: {
    options: {
      hashMode: false
    }
  },
  css: ['~/assets/css/main.css']
})