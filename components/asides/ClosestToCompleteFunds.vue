<template>
  <div>
    <h3 class="text-2xl text-grey uppercase mb-10 md:mb-16">Closest</h3>

    <ul class="flex flex-wrap items-center gap-5">
      <li
        v-for="fund in easiestToCloseFunds"
        :key="fund.title"
        class="p-6 border w-full border-graphic bg-mid-grey"
      >
        <NuxtLink :to="fund.slug" class="flex flex-col items-center gap-6">
          <img
            :src="'/images/funds/1.webp'"
            :alt="fund.title"
            class="w-20 h-20"
          />
          <span class="text-center text-base">
            <b>{{ amountLeftToCollect(fund) }} </b>₴ left
          </span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import type { Fund } from "../funds/types";

const props = defineProps<{
  funds: Fund[];
}>();

function amountLeftToCollect(fund: Fund) {
  const result = fund.totalGoal - fund.collectedAmount;
  return result > 0 ? result : 0;
}

const easiestToCloseFunds = computed(() => {
  const LIMIT = 5;

  return (
    props.funds
      .sort((a, b) => {
        const amountLeftA = amountLeftToCollect(a);
        const amountLeftB = amountLeftToCollect(b);

        return amountLeftA - amountLeftB;
      })
      .slice(0, LIMIT) || []
  );
});
</script>
