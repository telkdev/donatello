<template>
  <div>
    <div>
      <img
        src="/images/about/about-mobile.webp"
        srcset="
          /images/about/about-mobile.webp   700w,
          /images/about/about-desktop.webp 1000w
        "
        class="w-full lg:h-96 lg:object-cover"
        alt="Image of ukrainian flag"
      />
    </div>
    <div class="container pt-10 lg:pt-16">
      <h1
        class="text-2xl md:text-4xl uppercase pb-10 border-b border-graphic mb-14 text-graphic"
      >
        {{ t("About.Title") }}
      </h1>

      <div
        class="flex flex-col gap-2 prose prose-slate max-w-none mb-4 text-lg"
      >
        <p>
          {{ t("About.Description.FirstParagraph") }}
        </p>
        <p>
          {{ t("About.Description.SecondParagraph") }}
        </p>
        <p>
          {{ t("About.Description.ThirdParagraph") }}
        </p>
      </div>
    </div>
    <FaqListWithTitle :faq="faq" />
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const faq = computed(() => [
  {
    question: t("About.FAQ.List.First.Question"),
    answer: t("About.FAQ.List.First.Answer"),
  },
  {
    question: t("About.FAQ.List.Second.Question"),
    answer: t("About.FAQ.List.Second.Answer"),
  },
  {
    question: t("About.FAQ.List.Third.Question"),
    answer: t("About.FAQ.List.Third.Answer"),
  },
  {
    question: t("About.FAQ.List.Fourth.Question"),
    answer: t("About.FAQ.List.Fourth.Answer"),
  },
  {
    question: t("About.FAQ.List.Fifth.Question"),
    answer: t("About.FAQ.List.Fifth.Answer"),
  },
]);
</script>
