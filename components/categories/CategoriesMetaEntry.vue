<template>
  <NuxtLink
    :to="'category/' + category.displayName"
    class="rounded-md p-2 bg-slate-100 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-200"
  >
    <span class="text-graphic text-lg block mb-2 text-center">{{
      category.displayName
    }}</span>
    <p class="text-graphic text-base block mb-2 line-clamp-1">
      <!-- {{ category.description }} -->
    </p>
    <span class="text-grey text-sm">123 funds</span>
  </NuxtLink>
</template>

<script lang="ts" setup>
import type { Category } from "../funds/types";

type ID = number;

const props = defineProps<{
  category: Category;
}>();
</script>
