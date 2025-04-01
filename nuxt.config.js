// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  // app: {
  //   baseURL: '/hub/'
  // },

  devtools: { enabled: true },

  modules: ["@pinia/nuxt"],
  pinia: {
    storesDirs: ["./stores/**", "./custom-folder/stores/**"]
  },
  vite: {
    server: {
      proxy: {
        "/myapp/api": {
          target: "http://majoyreesa.com/",
          ws: true,
          changeOrigin: true
        }
      }
    }
  }
})
