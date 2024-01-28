<template>
  <div v-if="fund">
    <div class="container py-4 lg:py-16 space-y-10 lg:space-y-20">
      <div class="lg:flex">
        <div
          class="hidden lg:block mr-8 border border-graphic flex-shrink-0 max-w-[400px] w-full"
        >
          <Image
            :path="fund.image.data.attributes.url"
            class="object-cover h-full"
            :aria-hidden="!isDesktop"
            :alt="fund.image.data.attributes.alternativeText"
          />
        </div>
        <div class="w-full">
          <div class="flex items-center gap-2 flex-wrap mb-4 lg:mb-8">
            <ul class="flex items-center flex-wrap gap-2">
              <li
                class="rounded-2xl bg-light-grey py-2 px-5 flex items-center gap-1 text-grey"
              >
                <Image
                  :path="fund.category.data.attributes.icon.data.attributes.url"
                  class="w-4 mr-1"
                  :aria-hidden="true"
                  :alt="fund.category.data.attributes.displayName"
                />
                {{ fund.category.data.attributes.displayName }}
              </li>
            </ul>
            <span class="w-[2px] h-[2px] bg-black rounded-full"></span>
            <span class="text-xs">{{ fundCreatedAt }}</span>
          </div>
          <div class="lg:hidden border border-graphic mb-5">
            <Image
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
            class="block text-sm lg:text-lg mb-5 lg:mb-10 text-grey uppercase"
          >
            {{ fund.organization.data.attributes.name }}
          </span>
          <div class="flex items-center justify-between gap-2">
            <div class="mb-2 lg:mb-0">
              <span class="block uppercase mb-1 lg:text-lg">total goal</span>
              <div>
                <span class="text-lg lg:text-3xl"> {{ fund.totalGoal }} </span>
                <span class="lg:text-lg">₴</span>
              </div>
            </div>

            <button
              title="Share"
              class="flex items-center justify-center gap-1 text-sm"
            >
              <Icon name="share" class="w-10 h-10 rounded-full" />
              Share
            </button>
          </div>
        </div>
      </div>

      <div>
        <h2
          class="lg:text-xl uppercase pb-3 lg:pb-6 border-b border-graphic mb-5 lg:mb-8 text-graphic"
        >
          payment methods
        </h2>

        <Table
          :columns="[
            {
              text: 'Payment Method',
              isLink: false,
              canCopy: false,
              isImage: true,
            },
            {
              text: 'Account Number',
              isLink: false,
              canCopy: true,
              isImage: false,
            },
            {
              text: 'Owner',
              isLink: false,
              canCopy: false,
              isImage: false,
            },
            {
              text: 'Document',
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
          About project
        </h2>

        <RichTextBlocks :data="fund?.description" class="mb-6" />
      </div>
      <div>
        <h2
          class="lg:text-xl uppercase pb-3 lg:pb-6 border-b border-graphic mb-5 lg:mb-8 text-graphic"
        >
          Reports and documents
        </h2>

        <ul class="flex flex-wrap">
          <li v-for="item of documents" class="lg:w-1/2 p-1">
            <a
              :href="`${runtimeConfig.public.strapiUrl}${item.attributes.url}`"
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

const { locale, defaultLocale } = useI18n();
const { find } = useStrapi();
const route = useRoute();

// TODO: check what fields are needed
const { data: strapiFund } = await useAsyncData(async () => {
  const { data } = await find<Fund>("fund-collections", {
    locale: (locale.value as unknown as StrapiLocale) || defaultLocale,
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
    },
    filters: {
      slug: route.params.Fund,
    },
    pagination: { limit: 1, start: 0 },
  });

  return data[0];
});

const fund = computed(() => {
  if (!strapiFund.value) return;
  return fromStrapiDataStracrture(strapiFund.value);
});

const isDesktop = useMediaQuery("(min-width: 1024px)");

const fundCreatedAt = computed(() => {
  if (!fund.value) return;
  const date = new Date(fund.value.createdAt);
  return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
});

const runtimeConfig = useRuntimeConfig();

const requisites = computed(() => {
  if (!fund.value) return;

  return fund.value.requisites.data.map((requisite) => {
    return {
      requisite: {
        url: `${runtimeConfig.public.strapiUrl}${requisite.attributes.requisite_type.data.attributes.icon.data.attributes.url}`,
        alt: requisite.attributes.requisite_type.data.attributes.icon.data
          .attributes.alternativeText,
      },
      value: requisite.attributes.value,
      name: requisite.attributes.owner,
      documentLink: `${runtimeConfig.public.strapiUrl}${requisite.attributes.document.data.attributes.url}`,
    };
  });
});

const documents = computed(() => {
  if (!fund.value || !fund.value.documents) return [];

  return fund.value.documents.data;
});

useHead({
  title: "My App",
  meta: [{ name: "description", content: "My amazing site." }],
});

useSchemaOrg({
  context: "https://schema.org",
});
</script>
