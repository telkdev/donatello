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
                :path="categoryMeta?.image ?? ''"
                class="w-8 h-8 mr-3"
                :aria-hidden="true"
                :alt="categoryMeta.title"
              />
              {{ categoryMeta.title }}
            </h1>
            <p>
              {{ categoryMeta.description }}
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
import type { StrapiLocale } from "@nuxtjs/strapi/dist/runtime/types";
import { useFilteredFundsByCategory } from "../useFilteredFundsByCategory";
import { LOCALES } from "~/constants/locales";

const route = useRoute();

const { locale, fallbackLocale, t } = useI18n();
const { localeFromCookie } = useLocalesFromCookie();

const { find } = useStrapi();

const fetchFunds = async (options: { locale: StrapiLocale }) => {
  const { locale } = options;

  const { data } = await find<Fund>("fund-collections", {
    locale,
    populate: {
      organization: true,
      category: {
        populate: {
          id: true,
          icon: {
            fields: ["name", "url"],
          },
          displayName: "*",
          description: "*",
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

const { data: funds } = await useAsyncData(
  async () => {
    return await fetchFunds({
      locale:
        locale.value as unknown as StrapiLocale ||
        (localeFromCookie.value as unknown as StrapiLocale) ||
        fallbackLocale.value as unknown as StrapiLocale,
    });
  },
  {
    watch: [locale],
  }
);

const { filteredFunds, selectedCategory } = useFilteredFundsByCategory(
  computed(() => funds.value || [])
);

const { data: category } = await useAsyncData(async () => {
  const { data } = await find<Category>("categories", {
    populate: {
      icon: {
        fields: ["name", "url", "alternativeText"],
      },
      displayName: "*",
      description: "*",
    },
    filters: {
      slug: route.params.category,
    },
    pagination: { limit: 1, start: 0 },
  });

  return data[0];
});

const categoryName = computed(
  () => category.value?.attributes.displayName?.[locale.value]
);

function seo() {
  useHead({
    meta: [
      {
        name: "og:title",
        content: t("Title.Category", { category: categoryName.value }),
      },
      {
        name: "og:description",
        content: t("Description.Category", { category: categoryName.value }),
      },
      {
        name: "og:locale",
        content: LOCALES[locale as any],
      },
      {
        name: "og:type",
        content: "website",
      },
      // {
      //   name:"twitter:image",
      //   content: "https://uafunds.com/images/og-image.png",
      // },
      {
        name: "twitter:description",
        content: t("Description.Category", { category: categoryName.value }),
      },
      {
        name: "twitter:title",
        content: t("Title.Category", { category: categoryName.value }),
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
  });
  useSeoMeta({
    title: t("Title.Category", { category: categoryName.value }),
    description: t("Description.Category", { category: categoryName.value }),
  });
}

watch(
  categoryName,
  (val) => {
    selectedCategory.value = val;
  },
  { immediate: true }
);

watch(
  locale,
  () => {
    seo();
  },
  { immediate: true }
);

const categoryMeta = computed(() => {
  return {
    title: category.value?.attributes.displayName?.[locale.value],
    description: category.value?.attributes.description?.[locale.value],
    image: category.value?.attributes.icon.data.attributes.url,
  };
});
</script>
