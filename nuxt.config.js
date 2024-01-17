// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@pinia/nuxt'],
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
  vite: {
    server: {
      proxy: {
        "/api": {
          target: "http://192.168.6.239",
          ws: true,
          changeOrigin: true,
        },
      }
    }
  }
})
