<template>
  <div>
    <NavigationSecondary />
    <div class="bg-light-grey-100">
      <div
        class="grid grid-rows-2 md:grid-rows-1 gap-4 md:grid-cols-4 container py-12"
      >
        <div class="md:col-span-3">
          <div class="flex items-center gap-2 flex-wrap justify-between mb-12">
            <h1 class="text-2xl text-grey uppercase">Funds</h1>
            <Select
              v-model="selectedCategory"
              :options="categoriesOptions"
              class="max-w-[380px] w-full"
            />
          </div>

          <ul v-if="filteredFunds?.length" class="space-y-8">
            <li v-for="(fund, index) of filteredFunds" :key="index">
              <FundsListEntry :fund="fund" />
            </li>
          </ul>
          <div v-else>No funds found</div>
        </div>
        <aside class="mt-2 space-y-10 md:space-y-16">
          <AsidesClosestToCompleteFunds :funds="funds || []" />
          <AsidesTopFunds :funds="funds || []" />
        </aside>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Fund, Category } from "@/components/funds/types";

const { find } = useStrapi();

const { data: funds } = await useAsyncData(async () => {
  const { data } = await find<Fund>("fund-collections", {
    populate: ["organization", "category", "requisites"],
  });

  const fundWithId = data.map((item) => {
    const { attributes } = item;

    return {
      ...attributes,
      id: item.id,
    };
  });

  return fundWithId;
});

const { data: categories } = await useAsyncData(async () => {
  const { data } = await find<Category>("categories");

  return data;
});

const DEFAULT_CATEGORY = "All categories";
const selectedCategory = ref(DEFAULT_CATEGORY);

const categoriesOptions = computed(() => [
  DEFAULT_CATEGORY,
  ...(categories.value?.map((category) => category.attributes.displayName) ||
    []),
]);

const filteredFunds = computed(() => {
  if (selectedCategory.value !== DEFAULT_CATEGORY) {
    return (
      funds.value?.filter(
        (fund) =>
          fund.category.data.attributes.displayName === selectedCategory.value
      ) || []
    );
  }
  return funds.value;
});
</script>
