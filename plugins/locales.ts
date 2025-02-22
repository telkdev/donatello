export default defineNuxtPlugin((nuxtApp) => {
  const i18n = nuxtApp.$i18n as any; // TODO: add types

  const { localeFromCookie } = useLocalesFromCookie();
  i18n.locale.value = localeFromCookie.value || i18n.defaultLocale || i18n.fallbackLocale.value || "uk";
});
