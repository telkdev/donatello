<template>
  <div class="flex">
    <ToggleSelect v-model="locale" :values="availableLocales" />
  </div>
</template>

<script lang="ts" setup>
// TODO: maybe move to composable that will handle cookies
const { availableLocales, locale, setLocaleCookie } = useI18n();

const { localeFromCookie } = useLocalesFromCookie();

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
