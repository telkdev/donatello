<template>
  <div>
    <div class="container pt-10 lg:pt-16">
      <div class="prose prose-slate max-w-none">
        <h1 class="text-2xl mb-1">{{ t("Navigation.Privacy") }}</h1>

        <div v-if="locale === 'uk'">
          <PrivacyPolicyUk />
        </div>
        <div v-else>
          <PrivacyPolicyEn />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import PrivacyPolicyEn from "~/components/privacyPolicy/PrivacyPolicyEn.vue";
import PrivacyPolicyUk from "~/components/privacyPolicy/PrivacyPolicyUk.vue";
import { LOCALES } from "~/constants/locales";

const { locale, t } = useI18n();

function seo() {
  useHead({
    meta: [
      {
        name: "og:title",
        content: t("Title.Privacy"),
      },
      {
        name: "og:description",
        content: t("Description.Privacy"),
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
        content: t("Description.Privacy"),
      },
      {
        name: "twitter:title",
        content: t("Title.Privacy"),
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
  });

  useSeoMeta({
    title: t("Title.Privacy"),
    description: t("Description.Privacy"),
  });
}

seo();

watch(locale, () => {
  seo();
});
</script>
