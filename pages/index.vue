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
const { t } = useI18n();

useHead({
  title:
    "UAFunds | Help small ukranian funds to collect finances for their goals",
  meta: [
    {
      name: "description",
      content:
        "UAFunds is a platform that helps small funds to collect finances for their needs. Users can donate money to funds or create funds themselves.",
    },
  ],
});
</script>
