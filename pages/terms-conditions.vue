<template>
  <div>
    <div class="container pt-10 lg:pt-16">
      <div class="prose prose-slate max-w-none">
        <h1 class="text-2xl mb-1">{{ t("Navigation.Terms") }}</h1>

        <div v-if="locale === 'uk'">
          <TermsConditionsUk />
        </div>
        <div v-else>
          <TermsConditionsEn />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TermsConditionsEn from "~/components/termsConditions/TermsConditionsEn.vue";
import TermsConditionsUk from "~/components/termsConditions/TermsConditionsUk.vue";
import { LOCALES } from "~/constants/locales";

const { locale, t } = useI18n();

function seo() {
  useHead({
    meta: [
      {
        name: "og:title",
        content: t("Title.Terms"),
      },
      {
        name: "og:description",
        content: t("Description.Terms"),
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
        content: t("Description.Terms"),
      },
      {
        name: "twitter:title",
        content: t("Title.Terms"),
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
  });

  useSeoMeta({
    title: t("Title.Terms"),
    description: t("Description.Terms"),
  });
}

seo();

watch(locale, () => {
  seo();
});
</script>
