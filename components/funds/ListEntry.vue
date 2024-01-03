<template>
  <div class="bg-white shadow-sm p-5 lg:p-8">
    <div class="lg:flex mb-5">
      <div
        class="hidden lg:block mr-8 border border-graphic flex-shrink-0 w-32 h-32"
      >
        <img
          src="/images/map.webp"
          class="object-contain h-full"
          alt="imageAlt"
          :aria-hidden="!isDesktop"
        />
      </div>
      <div class="lg:flex-grow">
        <div class="flex justify-between items-center mb-5">
          <div class="flex items-center gap-2 flex-wrap">
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
          <button
            class="flex items-center gap-1 flex-col lg:flex-row"
            aria-label="Open menu"
          >
            <span
              class="w-[5px] h-[5px] bg-black rounded-full"
              aria-hidden="true"
            ></span>
            <span
              class="w-[5px] h-[5px] bg-black rounded-full"
              aria-hidden="true"
            ></span>
            <span
              class="w-[5px] h-[5px] bg-black rounded-full"
              aria-hidden="true"
            ></span>
          </button>
        </div>
        <div class="lg:hidden border border-graphic mb-5">
          <img
            src="/images/map.webp"
            class="w-full object-cover"
            alt="imageAlt"
            :aria-hidden="isDesktop"
          />
        </div>
        <h2 class="text-xl text-graphic mb-5">
          {{ fund.title }}
        </h2>
        <div class="flex flex-wrap gap-1">
          <h3 class="text-sm text-grey uppercase">
            {{ fund.organization.data.attributes.name }}
          </h3>
        </div>
      </div>
    </div>

    <RichTextBlocks
      v-if="smallDescription"
      :data="smallDescription"
      class="mb-6"
    />

    <ul v-if="requisits.size" class="flex items-cemter flex-wrap gap-2 mb-6">
      <li
        v-for="requisit in requisits"
        class="rounded-2xl border border-graphic py-2 px-4 text-grey text-xs font-medium"
      >
        {{ requisit }}
      </li>
    </ul>
    <div class="flex justify-between items-center">
      <div class="mb-2 lg:mb-0">
        <span class="block uppercase mb-1">total goal</span>
        <div>
          <span class="text-xl"> {{ fund.totalGoal }} </span>
          <span class="ml-0">₴</span>
        </div>
      </div>
      <ActionLink text="Support" :path="fund.title" size="md" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMediaQuery } from "@vueuse/core";
import type { Fund } from "./types";
import type { Requisit } from "../requisities";
import {
  isCreditCard,
  isCryptocurrency,
  isIBAN,
  isMonobanka,
} from "../requisities";

const isDesktop = useMediaQuery("(min-width: 1024px)");

const props = defineProps<{
  fund: Fund;
}>();

const requisits = computed(() => {
  const requisits = new Set();

  props.fund.requisites.forEach((requisit) => {
    requisits.add(requisitDisplay(requisit));
  });

  return requisits;
});

function requisitDisplay(requisit: Requisit) {
  if (isCreditCard(requisit)) {
    return "Credit Card";
  }
  if (isCryptocurrency(requisit)) {
    return "Cryptocurrency";
  }
  if (isIBAN(requisit)) {
    return "IBAN";
  }
  if (isMonobanka(requisit)) {
    return "Monobanka";
  }
  return requisit;
}

const fundCreatedAt = computed(() => {
  const date = new Date(props.fund.createdAt);
  return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
});

const smallDescription = computed(() => {
  if (!props.fund.description) return undefined;
  return props.fund.description?.slice(0, 2);
});
</script>
