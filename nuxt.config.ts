import { defineNuxtConfig } from "nuxt/config";

const SERVER_URL = process.env.SERVER_URL || "http://localhost:1337";
const WEB_URL = process.env.WEB_URL || "http://localhost:3000";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/strapi",
    "@nuxtjs/i18n",
    "nuxt-icons",
    "@vueuse/nuxt",
    "nuxt-schema-org",
    "@pinia/nuxt",
  ],
  strapi: {
    url: SERVER_URL, // https://forum.strapi.io/t/strapi-axios-request-on-ssr-fails-with-connect-econnrefused-but-csr-works-well/20799/7
  },
  i18n: {
    vueI18n: "./i18n/i18n.config.ts",
    locales: ["en", "uk"],
    strategy: "no_prefix",
  },
  runtimeConfig: {
    public: {
      serverUrl: SERVER_URL,
      webUrl: WEB_URL,
    },
  },
  app: {
    head: {
      title: "UAFunds",
      titleTemplate: (titleChunk) => {
        return titleChunk ? `UAFunds | ${titleChunk}` : "UAFunds";
      },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",

      link: [
        {
          rel: "stylesheet",
          href: 'https://fonts.googleapis.com/css?family=Montserrat&display=swap"',
        },
      ],
    },
  },
  plugins: ["~/plugins/locales.ts"],
});
