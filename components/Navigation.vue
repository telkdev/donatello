<template>
  <nav>
    <ul
      class="flex flex-col md:flex-row items-center gap-4 md:gap-10 lg:gap-28"
    >
      <li v-for="(nav, index) of navigation" :key="index">
        <NuxtLink
          :to="nav.path"
          :active-class="'text-red-950'"
          class="text-2xl md:text-base hover:text-red-800"
          >{{ nav.name }}</NuxtLink
        >
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
const navigation = ref([
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Funds",
    path: "/funds",
  },
]);
</script>
