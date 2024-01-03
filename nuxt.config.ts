// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    // ...
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/strapi",
    "@nuxtjs/i18n",
    "nuxt-icons",
    "@vueuse/nuxt",
  ],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
      ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  // https://strapi.nuxtjs.org/setup
  strapi: {
    url: 'http://127.0.0.1:1337' // https://forum.strapi.io/t/strapi-axios-request-on-ssr-fails-with-connect-econnrefused-but-csr-works-well/20799/7
  },
  i18n: {
    vueI18n: "./i18n/i18n.config.ts", // if you are using custom path, default
  },
});
