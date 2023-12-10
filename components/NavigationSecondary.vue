<template>
  <div class="bg-light-grey">
    <div class="container py-5 md:py-6">
      <ul class="flex items-center flex-wrap">
        <li v-for="(nav, index) in navigation" :index="index">
          <NuxtLink
            :to="nav.link"
            class="text-xl md:text-2xl"
            >{{ nav.name }}</NuxtLink
          >
          <span v-if="index < navigation.length - 1" class="mx-4 text-xl md:text-2xl">/</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
const navigation = [
  {
    name: "Funds List",
    link: "/funds",
  },
  {
    name: "Create Fundraiser",
    link: "/create",
  },
];
</script>

<style scoped>
.router-link-exact-active {
  @apply text-grey;
}
</style>
