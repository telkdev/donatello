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

function seo() {
  useHead({
    meta: [
      {
        name: "og:title",
        content: t("Title.Home"),
      },
      {
        name: "og:description",
        content: t("Description.Home"),
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
        content: t("Description.Home"),
      },
      {
        name: "twitter:title",
        content: t("Title.Home"),
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
  });

  useSeoMeta({
    title: t("Title.Home"),
    description: t("Description.Home"),
  });
}

seo();

watch(locale, () => {
  seo();
});
</script>
