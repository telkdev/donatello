<template>
  <nav>
    <ul
      class="flex flex-col md:flex-row items-center gap-4 md:gap-10 lg:gap-28 text-2xl md:text-base"
    >
      <li v-for="(nav, index) of navigation" :key="index">
        <NuxtLink :to="nav.path" :active-class="'text-red-950'">{{
          nav.name
        }}</NuxtLink>
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
