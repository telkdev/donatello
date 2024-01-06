<template>
  <div v-if="fund">
    <div class="container py-4 lg:py-16 space-y-10 lg:space-y-20">
      <div class="lg:flex">
        <div
          class="hidden lg:block mr-8 border border-graphic flex-shrink-0 max-w-[400px] w-full"
        >
          <img
            src="/images/map.webp"
            class="object-contain h-full"
            alt="imageAlt"
            :aria-hidden="!isDesktop"
          />
        </div>
        <div>
          <div class="flex items-center gap-2 flex-wrap mb-4 lg:mb-8">
            <ul class="flex items-center flex-wrap gap-2">
              <li
                class="rounded-2xl bg-light-grey py-2 px-5 flex items-center gap-1 text-grey"
              >
                <Icon
                  name="categories/military"
                  class="w-4 flex-shrink-0 flex"
                  aria-hidden="true"
                />
                {{ fund.category.data.attributes.displayName }}
              </li>
            </ul>
            <span class="w-[2px] h-[2px] bg-black rounded-full"></span>
            <span class="text-xs">{{ fundCreatedAt }}</span>
          </div>
          <div class="lg:hidden border border-graphic mb-5">
            <img
              src="/images/map.webp"
              class="w-full object-cover"
              alt="imageAlt"
              :aria-hidden="isDesktop"
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
              class="flex items-center justify-center rounded-full w-10 h-10"
            >
              <Icon name="share" />
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
        <div v-for="requisite of requisites">
          owner: {{ requisite.owner }} type: {{ requisite.requisite_type }}
        </div>
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

        reports list
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Fund } from "~/components/funds/types";
import { useMediaQuery } from "@vueuse/core";
import { fromStrapiDataStracrture } from "~/utilities/strapiDataStructure";

const { find } = useStrapi();
const route = useRoute();

const { data: strapiFund } = await useAsyncData(async () => {
  const { data } = await find<Fund>("fund-collections", {
    populate: {
      organization: true,
      category: true,
      requisites: {
        populate: {
          requisite_type: {
            populate: {
              icon: {
                fields: ["name", "url"],
              },
            },
          },
          document: {
            fields: ["name", "url"],
          },
        },
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

const requisites = computed(() => {
  if (!fund.value) return;
  return fund.value.requisites.data.map((requisite) => {
    return {
      ...fromStrapiDataStracrture(requisite),
      requisite_type: fromStrapiDataStracrture(
        requisite.attributes.requisite_type.data
      ),
      document: fromStrapiDataStracrture(requisite.attributes.document.data),
    };
  });
});
</script>
