// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

const STRAPI_URL = process.env.SERVER_URL || "http://127.0.0.1:1337";

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
    "nuxt-schema-org",
  ],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
      ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  // https://strapi.nuxtjs.https://pinia.vuejs.org/core-concepts/org/setup
  strapi: {
    url: STRAPI_URL, // https://forum.strapi.io/t/strapi-axios-request-on-ssr-fails-with-connect-econnrefused-but-csr-works-well/20799/7
  },
  i18n: {
    vueI18n: "./i18n/i18n.config.ts",
  },
  runtimeConfig: {
    public: {
      strapiUrl: STRAPI_URL,
    },
  },
  app: {
    head: {
      title: "Nuxt Strapi",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        process.env.MODE !== "production"
          ? {
              name: "robots",
              content: "noindex",
            }
          : {},
      ],
    },
  },
  schemaOrg: {
    identity: {
      type: "Organization",
      name: "Funds UA",
      url: "https://example.com",
      logo: "https://example.com/logo.png",
    },
  },
  plugins: ["~/plugins/locales.ts"],
});
