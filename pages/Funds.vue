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
          <div v-if="filteredFunds?.length">
            <ul class="space-y-8">
              <li v-for="(fund, index) of filteredFunds" :key="index">
                <FundsListEntry :fund="fund" />
              </li>
            </ul>
            <div
              v-if="filteredFunds?.length > limit"
              class="flex mt-4 justify-center"
            >
              <button
                @click="loadMore"
                class="py-4 px-8 text-center border text-graphic bg-transparent border-graphic hover:bg-graphic hover:text-white"
              >
                Load more
              </button>
            </div>
          </div>

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

const { localeFromCookie } = useLocalesFromCookie();
const { limit, loadMore, page } = useFundsPaginationWith(
  locale as Ref<StrapiLocale>
);

const fetchFunds = async (options: {
  locale: StrapiLocale;
  page: number;
  limit: number;
}) => {
  const { locale, page, limit } = options;

  const { data } = await find<Fund>("fund-collections", {
    locale,
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
    pagination: { limit: page * limit, start: 0 },
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

const { data: funds } = await useAsyncData(
  async () => {
    return await fetchFunds({
      page: page.value,
      limit: limit.value,
      locale:
        locale.value ||
        (localeFromCookie.value as unknown as StrapiLocale) ||
        defaultLocale,
    });
  },
  {
    watch: [page, locale],
  }
);

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

const { DEFAULT_CATEGORY, filteredFunds, selectedCategory } =
  useFilteredFundsByCategory(funds);

function useFundsPaginationWith(locale: Ref<StrapiLocale>) {
  const DEFAULT_PAGE = 1;
  const DEFAULT_LIMIT = 10;

  const route = useRoute();
  const router = useRouter();

  const page = ref(+(route?.query?.page || DEFAULT_PAGE));

  const limit = ref(DEFAULT_LIMIT);

  function loadMore() {
    page.value++;
  }

  watch(page, () => {
    router.push({
      query: {
        ...route.query,
        page: page.value,
      },
      path: route.path,
    });
  });

  watch(locale, () => {
    router.push({
      query: {
        ...route.query,
        page: DEFAULT_PAGE,
      },
      path: route.path,
    });
  });

  return {
    page,
    limit,
    loadMore,
  };
}
</script>
