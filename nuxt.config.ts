// nuxt.config.js
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    // @ts-expect-error: injected by the sitemap module at runtime
    hostname: 'https://www.upindersangha.com',
    routes: ['/', '/about', '/docative'],
  },
  css: [
    '~/assets/main.css'
  ],  
  devServer: {
    host: '0.0.0.0'
  },
  nitro: { preset: 'static' },
  // Add route rules for the docative page
  routeRules: {
    '/docative': { isr: true }
  },
  // Add the smooth scroll plugin
  plugins: [
    '~/plugins/smoothScroll.client.js'
  ],
  // Add head configuration for better SEO
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/public/favicon.ico' }
      ],
      style: [],
      script: []
    }
  }
})