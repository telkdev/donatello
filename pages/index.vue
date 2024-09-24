<template>
  <div>
    <MainHero />
    <MainCategories />
    <MainAbout />
    <MainGoals />
    <Quote>
      <template #content>
        {{ t("Main.Quotes.Shield") }}
      </template>
    </Quote>
    <MainFaq />
    <Quote>
      <template #content>
        {{ t("Main.Quotes.Support") }}
      </template>
    </Quote>
  </div>
</template>

<script setup lang="ts">
import { LOCALES } from "~/constants/locales";

const { t, locale } = useI18n();

const title =
  "UAFunds | Help small Ukranian funds to collect finances for their goals";
const description =
  "UAFunds is a platform that helps small funds to collect finances for their needs. Users can donate money to funds or create funds themselves.";

useHead({
  meta: [
    {
      name: "og:title",
      content: title,
    },
    {
      name: "og:description",
      content: description,
    },
    {
      name: "og:locale",
      content: LOCALES[locale as any],
    },
    {
      name: "og:type",
      content: "website",
    },
    // {
    //   name:"twitter:image",
    //   content: "https://uafunds.com/images/og-image.png",
    // },
    {
      name: "twitter:description",
      content: description,
    },
    {
      name: "twitter:title",
      content: title,
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
  ],
});

useSeoMeta({
  title,
  description,
});
</script>
