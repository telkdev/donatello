<template>
  <div>
    <NavigationSecondary />
    <div class="bg-light-grey-100">
      <div
        class="grid grid-rows-2 md:grid-rows-1 gap-4 md:grid-cols-4 container py-12"
      >
        <div class="md:col-span-3">
          <div class="flex items-center gap-2 flex-wrap justify-between mb-12">
            <h1 class="text-2xl text-grey uppercase">{{ t("Funds.Title") }}</h1>
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
          <div v-else>{{ t("Funds.NoFunds") }}</div>
        </div>
        <aside class="mt-2 space-y-10 md:space-y-16">
          <!-- <AsidesClosestToCompleteFunds :funds="funds || []" /> -->
          <AsidesTopFunds :funds="funds || []" />
        </aside>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Fund, Category } from "@/components/funds/types";
import { useFilteredFundsByCategory } from "./useFilteredFundsByCategory";
import type { StrapiLocale } from "@nuxtjs/strapi/dist/runtime/types";

const { locale, defaultLocale, t } = useI18n();
const { find } = useStrapi();

const fundsWithLocale = ref<Fund[]>([]);

watch(locale, async (locale) => {
  fundsWithLocale.value = await fetchFunds(locale);
});

const { localeFromCookie } = useLocalesFromCookie();

const fetchFunds = async (locale?: string) => {
  const { data } = await find<Fund>("fund-collections", {
    locale:
      locale ||
      (localeFromCookie.value as unknown as StrapiLocale) ||
      defaultLocale,
    populate: {
      organization: true,
      category: {
        populate: {
          icon: {
            fields: ["name", "url"],
          },
        },
      },
      image: {
        fields: ["alternativeText", "url"],
      },
      requisites: {
        populate: {
          requisite_type: true,
        },
      },
    },
  });

  const fundWithId = data.map((item) => {
    const { attributes } = item;

    return {
      ...attributes,
      id: item.id,
    };
  });

  return fundWithId;
};

const { data: funds } = await useAsyncData(async () => {
  return await fetchFunds();
});

const { data: categories } = await useAsyncData(async () => {
  const { data } = await find<Category>("categories", {
    populate: ["icon"],
  });

  return data;
});

const categoriesOptions = computed(() => [
  DEFAULT_CATEGORY,
  ...(categories.value?.map((category) => category.attributes.displayName) ||
    []),
]);

const currentFunds = computed(() =>
  fundsWithLocale.value.length ? fundsWithLocale.value : funds.value
);

const { DEFAULT_CATEGORY, filteredFunds, selectedCategory } =
  useFilteredFundsByCategory(currentFunds);
</script>
