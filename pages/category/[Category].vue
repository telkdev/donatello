<template>
  <div>
    <NavigationSecondary />
    <div class="bg-light-grey-100">
      <div
        class="grid grid-rows-2 md:grid-rows-1 gap-4 md:grid-cols-4 container py-12"
      >
        <div class="md:col-span-3">
          <div v-if="category" class="mb-12">
            <h1 class="text-2xl flex items-center mb-4">
              <Image
                :path="category.attributes.icon.data.attributes.url"
                class="w-8 h-8 mr-3"
                :aria-hidden="true"
                :alt="category.attributes.displayName"
              />
              {{ category.attributes.displayName }}
            </h1>
            <p>
              {{ category.attributes.description }}
            </p>
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
import type { Category, Fund } from "@/components/funds/types";
import { useFilteredFundsByCategory } from "../useFilteredFundsByCategory";
import type { StrapiLocale } from "@nuxtjs/strapi/dist/runtime/types";

const route = useRoute();

const { locale, defaultLocale, t } = useI18n();
const { localeFromCookie } = useLocalesFromCookie();

const { find } = useStrapi();

const fundsWithLocale = ref<Fund[]>([]);

watch(locale, async (locale) => {
  fundsWithLocale.value = await fetchFunds(locale);
});

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
    filters: {
      category: {
        displayName: route.params.Category,
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

const currentFunds = computed(() =>
  fundsWithLocale.value.length ? fundsWithLocale.value : funds.value
);

const { filteredFunds } = useFilteredFundsByCategory(currentFunds);

const { data: category } = await useAsyncData(async () => {
  const { data } = await find<Category>("categories", {
    populate: {
      icon: {
        fields: ["name", "url", "alternativeText"],
      },
    },
    filters: {
      displayName: route.params.Category,
    },
    pagination: { limit: 1, start: 0 },
  });

  return data[0];
});
</script>
