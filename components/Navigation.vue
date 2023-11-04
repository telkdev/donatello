<template>
  <nav>
    <ul class="flex items-center gap-28">
      <li v-for="(nav, index) of navigation" :key="index">
        <NuxtLink :to="nav.path" :active-class="'text-red-950'">{{ nav.name }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
// import { ref } from 'vue'

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
