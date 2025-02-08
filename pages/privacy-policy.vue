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

const { locale, t } = useI18n();
</script>
