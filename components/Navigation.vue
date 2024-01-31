<template>
  <nav>
    <ul
      class="flex flex-col md:flex-row items-center gap-4 md:gap-10 lg:gap-28"
    >
      <li v-for="(nav, index) of navigation" :key="index">
        <NuxtLink
          :to="nav.path"
          :active-class="'text-red-950'"
          class="text-2xl md:text-base hover:text-red-800"
          >{{ nav.name }}</NuxtLink
        >
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const navigation = computed(() => [
  {
    name: t("Navigation.Home"),
    path: "/",
  },
  {
    name: t("Navigation.About"),
    path: "/about",
  },
  {
    name: t("Navigation.Funds"),
    path: "/funds",
  },
]);
</script>
