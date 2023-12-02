<template>
  <div class="flex">
    <Select v-model="locale" :values="locales" />
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

// should be from useI18n(), but it's not working in current version, need @nuxtjs/i18n-edge@8.0.0-beta.4-27816734.493bb8f (https://github.com/nuxt-modules/i18n/issues/1659)
const locales = ["en", "ua"];
</script>
