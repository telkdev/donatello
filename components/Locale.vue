<template>
  <div class="flex">
    <ToggleSelect v-model="locale" :values="availableLocales" />
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
const locale = ref();
const localeCookie = useCookie("locale");
const {  setLocale, availableLocales } = useI18n();

onBeforeMount(() => {
  if (localeCookie.value) {
    setLocale(localeCookie.value);
  }
});

watch(locale, (value, oldValue) => {
  setLocale(value);
  localeCookie.value = value;
});
</script>
