<template>
  <FaqListWithTitle :faq="faq" />
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const faq = computed(() => [
  {
    question: t("Main.FAQ.List.First.Question"),
    answer: t("Main.FAQ.List.First.Answer"),
  },
  {
    question: t("Main.FAQ.List.Second.Question"),
    answer: t("Main.FAQ.List.Second.Answer"),
  },
  {
    question: t("Main.FAQ.List.Third.Question"),
    answer: t("Main.FAQ.List.Third.Answer"),
  },
  {
    question: t("Main.FAQ.List.Fourth.Question"),
    answer: [
      t("Main.FAQ.List.Fourth.Answer.First"),
      t("Main.FAQ.List.Fourth.Answer.Second"),
      t("Main.FAQ.List.Fourth.Answer.Third"),
      t("Main.FAQ.List.Fourth.Answer.Fourth"),
      t("Main.FAQ.List.Fourth.Answer.Fifth"),
      t("Main.FAQ.List.Fourth.Answer.Sixth"),
      t("Main.FAQ.List.Fourth.Answer.Seventh"),
      t("Main.FAQ.List.Fourth.Answer.Eighth"),
      t("Main.FAQ.List.Fourth.Answer.Ninth"),
    ],
  },
  {
    question: t("Main.FAQ.List.Fifth.Question"),
    answer: t("Main.FAQ.List.Fifth.Answer"),
  },
  {
    question: t("Main.FAQ.List.Sixth.Question"),
    answer: t("Main.FAQ.List.Sixth.Answer"),
  },
  {
    question: t("Main.FAQ.List.Seventh.Question"),
    answer: t("Main.FAQ.List.Seventh.Answer"),
  },
  {
    question: t("Main.FAQ.List.Eighth.Question"),
    answer: t("Main.FAQ.List.Eighth.Answer"),
  },
  {
    question: t("Main.FAQ.List.Ninth.Question"),
    answer: t("Main.FAQ.List.Ninth.Answer"),
  },
  {
    question: t("Main.FAQ.List.Tenth.Question"),
    answer: t("Main.FAQ.List.Tenth.Answer"),
  },
  {
    question: t("Main.FAQ.List.Eleventh.Question"),
    answer: [
      t("Main.FAQ.List.Eleventh.Answer.First"),
      t("Main.FAQ.List.Eleventh.Answer.Second"),
      t("Main.FAQ.List.Eleventh.Answer.Third"),
      t("Main.FAQ.List.Eleventh.Answer.Fourth"),
      t("Main.FAQ.List.Eleventh.Answer.Fifth"),
      t("Main.FAQ.List.Eleventh.Answer.Sixth"),
      t("Main.FAQ.List.Eleventh.Answer.Seventh"),
    ],
  },
  {
    question: t("Main.FAQ.List.Twelfth.Question"),
    answer: t("Main.FAQ.List.Twelfth.Answer"),
  },
  {
    question: t("Main.FAQ.List.Thirteenth.Question"),
    answer: t("Main.FAQ.List.Thirteenth.Answer"),
  },
  {
    question: t("Main.FAQ.List.Fourteenth.Question"),
    answer: t("Main.FAQ.List.Fourteenth.Answer"),
  },
]);
</script>
