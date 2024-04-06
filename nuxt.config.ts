// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  nitro: {
    preset: "cloudflare-pages"
  },

  modules: ["nitro-cloudflare-dev", '@nuxtjs/tailwindcss'],

  typescript: {
    strict: true,
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "MK8DX Custom Items Ranking",
      meta: [
        {
          name: "description",
          content: "A ranking of custom items sets in Mario Kart 8 Deluxe."
        }
      ]
    }
  }
})