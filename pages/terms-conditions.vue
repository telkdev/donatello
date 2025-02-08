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

const { locale, t } = useI18n();
</script>
