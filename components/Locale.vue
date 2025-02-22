<template>
  <div class="flex">
    <ToggleSelect v-model="locale" :values="locales" />
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useLocalesStore } from "~/stores/locales";

// TODO: maybe move to composable that will handle cookies
const { availableLocales, locale, setLocaleCookie } = useI18n();
const localesStore = useLocalesStore();
const { locales } = storeToRefs(localesStore);

const { localeFromCookie } = useLocalesFromCookie();

const mappedLocales = computed(() =>
  availableLocales.map((l) => ({
    data: l,
    isDisabled: false,
  }))
);

localesStore.setLocales(mappedLocales.value);

onMounted(() => {
  if (localeFromCookie.value) locale.value = localeFromCookie.value;
});

watch(
  locale,
  (locale) => {
    setLocaleCookie(locale);
  },
  { immediate: true }
);
</script>
