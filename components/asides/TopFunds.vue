<template>
  <div>
    <h3 class="text-2xl text-grey uppercase mb-10 md:mb-16">Top Funds</h3>

    <ul class="flex flex-wrap items-center gap-5">
      <li
        v-for="fund in topFunds"
        :key="fund.title"
        class="p-6 border w-full border-graphic bg-mid-grey"
      >
        <NuxtLink :to="fund.slug" class="flex flex-col items-center gap-6">
          <Image
            :path="fund.image.data.attributes.url"
            class="w-20 h-20"
            :alt="fund.image.data.attributes.alternativeText"
          />
          <span class="text-center text-sm">{{ fund.title }}</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import type { Fund } from "../funds/types";
// TODO: add new request to fetch top funds
const props = defineProps<{
  funds: Fund[];
}>();

const topFunds = computed(() => {
  const LIMIT = 5;

  return (
    props.funds.sort((a, b) => b.totalGoal - a.totalGoal).slice(0, LIMIT) || []
  );
});
</script>
