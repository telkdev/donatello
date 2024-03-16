import type { Fund } from "~/components/funds/types";

export function useFilteredFundsByCategory(funds: Ref<Fund[]>) {
  const DEFAULT_CATEGORY = "All categories";
  const selectedCategory = ref(DEFAULT_CATEGORY);

  const filteredFunds = computed(() => {
    if (selectedCategory.value !== DEFAULT_CATEGORY) {
      return (
        funds.value.filter(
          (fund) =>
            fund.category.data.attributes.displayName === selectedCategory.value
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
