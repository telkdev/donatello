<template>
  <div>
    <h3 class="text-2xl text-grey2 uppercase mb-10 md:mb-16">Top Funds</h3>

    <ul class="flex flex-wrap items-center gap-5">
      <li
        v-for="fund in funds"
        :key="fund.name"
        class="p-6 border border-graphic bg-mid-grey"
      >
        <NuxtLink :to="fund.link" class="flex flex-col items-center gap-6">
          <img :src="fund.image" :alt="fund.name" class="w-20 h-20" />
          <span class="text-center text-sm">{{ fund.name }}</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const funds = [
  {
    name: "Support the Ukrainian Army",
    link: "/funds/1",
    image: "/images/funds/1.webp", //TODO: maybe another way to use images dynamically
  },
  {
    name: "Support the Ukrainian Army",
    link: "/funds/1",
    image: "/images/funds/1.webp", //TODO: maybe another way to use images dynamically
  },
];
</script>
