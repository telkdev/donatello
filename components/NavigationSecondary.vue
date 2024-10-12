<template>
  <div class="bg-light-grey">
    <div class="container py-5 md:py-6">
      <ul class="flex items-center flex-wrap">
        <li v-for="(nav, index) in navigation" :index="index">
          <NuxtLink :to="nav.link" class="text-xl md:text-2xl">{{
            nav.name
          }}</NuxtLink>
          <span
            v-if="index < navigation.length - 1"
            class="mx-4 text-xl md:text-2xl"
            >/</span
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const runtimeConfig = useRuntimeConfig();


const navigation = computed(() => [
  {
    name: t("ActionLinks.Funds"),
    link: "/funds",
  }/* ,
  {
    name: t("ActionLinks.CreateFundraiser"),
    link: `${runtimeConfig.public.serverUrl}/admin/auth/register`,
  }, */
]);
</script>

<style scoped>
.router-link-exact-active {
  @apply text-grey;
}
</style>
