<template>
  <div class="bg-white p-5 lg:p-8 border border-graphic">
    <div class="lg:flex mb-5">
      <div
        class="hidden lg:block mr-8 border border-graphic flex-shrink-0 w-32 h-32"
      >
        <NuxtLink :to="fundPath" :aria-label="fund.title">
          <Image
            :path="fund.image.data.attributes.url"
            class="object-cover h-full w-full"
            :aria-hidden="!isDesktop"
            :alt="fund.image.data.attributes.alternativeText"
          />
        </NuxtLink>
      </div>
      <div class="lg:flex-grow">
        <div class="flex justify-between items-center mb-5">
          <div class="flex items-center gap-2 flex-wrap">
            <ul class="flex items-center flex-wrap gap-2">
              <li class="rounded-2xl bg-light-grey py-2 px-5 text-grey">
                <NuxtLink
                  class="flex items-center gap-1"
                  :to="'/category/' + fund.category.data.attributes.slug"
                >
                  <Image
                    :path="
                      fund.category.data.attributes.icon.data.attributes.url
                    "
                    class="w-4 mr-1"
                    :aria-hidden="true"
                    :alt="fund.category.data.attributes.displayName?.[locale]"
                  />

                  {{ fund.category.data.attributes.displayName?.[locale] }}
                </NuxtLink>
              </li>
            </ul>
            <span class="w-[2px] h-[2px] bg-black rounded-full"></span>
            <span class="text-xs">{{ fundCreatedAt }}</span>
          </div>
        </div>
        <div class="lg:hidden border border-graphic mb-5">
          <NuxtLink :to="fundPath" :aria-label="fund.title">
            <Image
              :path="fund.image.data.attributes.url"
              class="w-full object-cover"
              :aria-hidden="isDesktop"
              :alt="fund.image.data.attributes.alternativeText"
            />
          </NuxtLink>
        </div>
        <h2 class="text-xl text-graphic mb-5">
          <NuxtLink :to="fundPath" class="hover:text-red-800">
            {{ fund.title }}
          </NuxtLink>
        </h2>

        <h3 class="text-sm text-grey uppercase">
          {{ fund.organization.data.attributes.name }}
        </h3>
      </div>
    </div>

    <RichTextBlocks
      v-if="smallDescription"
      :data="smallDescription"
      class="mb-6"
    />

    <ul v-if="requisites.length" class="flex items-cemter flex-wrap gap-2 mb-6">
      <li
        v-for="requisite in requisites"
        class="rounded-2xl border border-graphic py-2 px-4 text-grey text-xs font-medium"
      >
        {{ requisite }}
      </li>
    </ul>
    <div class="flex justify-between items-center">
      <div class="mb-2 lg:mb-0">
        <span class="block uppercase mb-1">{{ t("Funds.TotalGoal") }}</span>
        <div>
          <span class="text-xl"> {{ fund.totalGoal }} </span>
          <span class="text-xl font-bold">{{ t("Fund.Currency") }}</span>
        </div>
      </div>
      <ActionLink
        :text="t('Funds.Support')"
        :path="fundPath"
        size="md"
        type="primary"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMediaQuery } from "@vueuse/core";
import type { Fund } from "./types";

const isDesktop = useMediaQuery("(min-width: 1024px)");

const props = defineProps<{
  fund: Fund;
}>();

const { t, locale } = useI18n();

const requisites = computed(() => {
  return props.fund.requisites.data.map((requisit) => {
    return requisit.attributes.requisite_type.data.attributes.displayName;
  });
});

const fundCreatedAt = computed(() => {
  const date = new Date(props.fund.createdAt);
  return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
});

const smallDescription = computed(() => {
  if (!props.fund.description) return undefined;
  return props.fund.description?.slice(0, 2);
});

const fundPath = computed(() => {
  return `/${props.fund.slug}`;
});
</script>
