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
const { t, locale } = useI18n();

const title =
  "UAFunds | Help small Ukranian funds to collect finances for their goals";
const description =
  "UAFunds is a platform that helps small funds to collect finances for their needs. Users can donate money to funds or create funds themselves.";

useSeoMeta({
  ogLocale: locale,
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
});
</script>
