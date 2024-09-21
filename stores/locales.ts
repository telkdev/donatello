import { defineStore } from "pinia";

export const useLocalesStore = defineStore("locales", () => {
  const locales = ref<{ data: string; isDisabled: boolean }[]>([]);

  function setLocales(data: { data: string; isDisabled: boolean }[]) {
    locales.value = data;
  }

  return { locales, setLocales };
});
