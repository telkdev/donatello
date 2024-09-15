<template>
  <div v-if="fund">
    <div class="container py-4 lg:py-16 space-y-10 lg:space-y-20">
      <div class="lg:flex">
        <div
          class="hidden lg:block mr-8 border border-graphic flex-shrink-0 max-w-[400px] w-full"
        >
          <Image
            v-if="fund.image"
            :path="fund.image.data.attributes.url"
            class="object-cover h-full"
            :aria-hidden="!isDesktop"
            :alt="fund.image.data.attributes.alternativeText"
          />
        </div>
        <div class="w-full">
          <div class="flex items-center gap-2 flex-wrap mb-4 lg:mb-8">
            <NuxtLink
              :to="'category/' + fund.category.data.attributes.displayName"
              class="rounded-2xl bg-light-grey py-2 px-5 flex items-center gap-1 text-grey"
            >
              <Image
                :path="fund.category.data.attributes.icon.data.attributes.url"
                class="w-4 mr-1"
                :aria-hidden="true"
                :alt="fund.category.data.attributes.displayName"
              />
              {{ fund.category.data.attributes.displayName }}
            </NuxtLink>
            <span class="w-[2px] h-[2px] bg-black rounded-full"></span>
            <span class="text-xs">{{ fundCreationDate }}</span>
          </div>
          <div class="lg:hidden border border-graphic mb-5">
            <Image
              v-if="fund.image"
              :path="fund.image.data.attributes.url"
              class="w-full object-cover"
              :aria-hidden="isDesktop"
              :alt="fund.image.data.attributes.alternativeText"
            />
          </div>
          <h1 class="text-3xl text-graphic mb-5 font-normal">
            {{ fund.title }}
          </h1>
          <span
            v-if="fund.organization"
            class="block text-sm lg:text-lg mb-5 lg:mb-10 text-grey uppercase"
          >
            {{ fund.organization.data.attributes.name }}
          </span>
          <div class="flex items-center justify-between gap-2">
            <div class="mb-2 lg:mb-0">
              <span class="block uppercase mb-1 lg:text-lg">{{
                t("Fund.TotalGoal")
              }}</span>
              <div>
                <span class="text-lg lg:text-3xl"> {{ fund.totalGoal }} </span>
                <span class="lg:text-lg">{{ t("Fund.Currency") }}</span>
              </div>
            </div>

            <button
              :title="t('Fund.Share')"
              class="flex items-center justify-center gap-1 text-sm"
            >
              <Icon name="share" class="w-10 h-10 rounded-full" />
              {{ t("Fund.Share") }}
            </button>
          </div>
        </div>
      </div>

      <div>
        <h2
          class="lg:text-xl uppercase pb-3 lg:pb-6 border-b border-graphic mb-5 lg:mb-8 text-graphic"
        >
          {{ t("Fund.PaymentMethods.Title") }}
        </h2>

        <Table
          :columns="[
            {
              text: t('Fund.PaymentMethods.Table.PaymentMethod'),
              isLink: false,
              canCopy: false,
              isImage: true,
            },
            {
              text: t('Fund.PaymentMethods.Table.AccountNumber'),
              isLink: false,
              canCopy: true,
              isImage: false,
            },
            {
              text: t('Fund.PaymentMethods.Table.Owner'),
              isLink: false,
              canCopy: false,
              isImage: false,
            },
            {
              text: t('Fund.PaymentMethods.Table.Document'),
              isLink: true,
              canCopy: false,
              isImage: false,
            },
          ]"
          :data="requisites || []"
        >
          <template #documentLink-icon>
            <img src="@/assets/icons/pdf.svg" class="w-10 h-10 m-auto" />
          </template>
        </Table>
      </div>

      <div>
        <h2
          class="lg:text-xl uppercase pb-3 lg:pb-6 border-b border-graphic mb-5 lg:mb-8 text-graphic"
        >
          {{ t("Fund.About") }}
        </h2>

        <RichTextBlocks :data="fund?.description" class="mb-6" />
      </div>
      <div>
        <h2
          class="lg:text-xl uppercase pb-3 lg:pb-6 border-b border-graphic mb-5 lg:mb-8 text-graphic"
        >
          {{ t("Fund.Documents") }}
        </h2>

        <ul class="flex flex-wrap">
          <li v-for="item of documents" class="lg:w-1/2 p-1">
            <a
              :href="`${runtimeConfig.public.serverUrl}${item.attributes.url}`"
              target="_blank"
              class="text-graphic flex gap-2 items-center hover:text-red-800 cursor-pointer"
            >
              <img
                src="@/assets/icons/pdf.svg"
                class="w-10 h-10 flex-shrink-0"
                :alt="item.attributes.alternativeText"
              />
              {{ item.attributes.name }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Fund } from "~/components/funds/types";
import { useMediaQuery } from "@vueuse/core";
import { fromStrapiDataStracrture } from "~/utilities/strapiDataStructure";
import type { StrapiLocale } from "@nuxtjs/strapi/dist/runtime/types";

const { locale, defaultLocale, t } = useI18n();
const { find } = useStrapi();
const route = useRoute();
const router = useRouter();

watch(locale, async (locale) => {
  const initialFundLocale = fundFromBackend.value?.attributes.locale;

  if (!initialFundLocale) return;

  if (initialFundLocale === locale) {
    return;
  }

  const localizedFund = fund.value?.localizations?.data.find(
    (localization) => localization.attributes.locale === locale
  );

  if (!localizedFund) return;

  router.push({
    path: `/${localizedFund.attributes.slug}`,
  });
});

const { localeFromCookie } = useLocalesFromCookie();

// TODO: check what fields are needed
const { data: fundFromBackend } = await useAsyncData(async () => {
  const { data } = await find<Fund>("fund-collections", {
    locale:
      (localeFromCookie.value as unknown as StrapiLocale) || defaultLocale,
    populate: {
      organization: true,
      category: {
        populate: {
          icon: {
            fields: ["name", "url", "alternativeText"],
          },
        },
      },
      image: {
        fields: ["alternativeText", "url"],
      },
      requisites: {
        populate: {
          requisite_type: {
            populate: {
              icon: {
                fields: ["alternativeText", "url"],
              },
            },
          },
          document: {
            fields: ["name", "url", "alternativeText"],
          },
        },
      },
      documents: {
        fields: ["name", "url", "alternativeText"],
      },
      localizations: {
        fields: ["slug", "locale"],
      },
    },
    filters: {
      slug: route.params.Fund,
    },
    pagination: { limit: 1, start: 0 },
  });

  return data[0];
});

const fund = computed(() => {
  if (!fundFromBackend.value)
    // TODO: add 404 page
    throw createError({
      statusCode: 404,
      message: "not found",
    });
  return fromStrapiDataStracrture(fundFromBackend.value);
});

const isDesktop = useMediaQuery("(min-width: 1024px)");

const fundCreationDate = computed(() => {
  if (!fund.value) return;
  const date = new Date(fund.value.createdAt);
  return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
});

const runtimeConfig = useRuntimeConfig();

const requisites = computed(() => {
  if (!fund.value || !fund.value.requisites) return [];

  return fund.value.requisites.data.map((requisite) => {
    return {
      requisite: {
        url: `${runtimeConfig.public.serverUrl}${requisite.attributes.requisite_type.data.attributes.icon.data.attributes.url}`,
        alt: requisite.attributes.requisite_type.data.attributes.icon.data
          .attributes.alternativeText,
      },
      value: requisite.attributes.value,
      name: requisite.attributes.owner,
      documentLink: `${runtimeConfig.public.serverUrl}${requisite.attributes.document.data.attributes.url}`,
    };
  });
});

const documents = computed(() => {
  if (!fund.value || !fund.value.documents) return [];

  return fund.value.documents.data;
});

(function useSeo() {
  const title = computed(
    () =>
      fund.value?.title ??
      "UAFunds | Help small ukranian funds to collect finances for their goals"
  );

  //TODO: description from fund
  const description = computed(
    () =>
      `Detail about ${fund.value?.title}, how much money they need, what they are going to do with it, how you can help`
  );

  const { imagePath: image } = useImagePath(
    computed(() => fund.value?.image.data.attributes.url)
  );

  useSeoMeta({
    title: title.value,
    ogTitle: title.value,
    description: description.value,
    ogDescription: description.value,
    ogImage: image.value,
    twitterCard: "summary_large_image",
  });

  useSchemaOrg([
    defineWebPage({
      name: fund.value?.title,
      description: description.value,
      mainContentOfPage: fund.value?.description,
      primaryImageOfPage: {
        "@type": "ImageObject",
        contentUrl: image.value,
      },
      audience: {
        "@type": "Audience",
        audienceType:
          "general, veterans, volunteers, donors, sponsors, partners, good-doers, all, people who want to help",
      },
      specialty:
        "help, charity, donation, fundraising, support, assistance, fund, project",
    }),
  ]);
})();
</script>
