import { useI18n } from "vue-i18n";

import type { Fund } from "~/components/funds/types";

export function useFilteredFundsByCategory(funds: Ref<Fund[]>) {
  const { t, locale } = useI18n();

  const DEFAULT_CATEGORY = t("Main.Category.AllCategories");
  const selectedCategory = ref(DEFAULT_CATEGORY);

  const filteredFunds = computed(() => {
    if (selectedCategory.value !== DEFAULT_CATEGORY) {
      return (
        funds.value.filter(
          (fund) =>
            fund.category.data.attributes.displayName[locale.value] ===
            selectedCategory.value
        ) || []
      );
    }
    return funds.value;
  });

  return {
    filteredFunds,
    selectedCategory,
    DEFAULT_CATEGORY,
  };
}
