<template>
  <NuxtLink
    :to="'category/' + category.displayName"
    class="flex flex-col items-center group"
  >
    <div
      class="w-20 h-20 bg-graphic rounded-full flex justify-center items-center mb-4 border-2 border-transparent group-hover:border-graphic group-hover:bg-white transition-all duration-300 ease-in-out"
    >
      <Image
        :path="category.icon.data.attributes.url"
        :aria-hidden="true"
        :alt="category.displayName"
        class="filter invert brightness-0 group-hover:brightness-100 group-hover:invert-0 transition-all duration-300 ease-in-out"
      />
    </div>

    <span class="text-graphic lg:text-xl block text-center">
      {{ category.displayName }}
    </span>
  </NuxtLink>
</template>

<script lang="ts" setup>
import type { Category } from "../funds/types";

// TODO: add alt from alternative text
defineProps<{
  category: Category;
}>();
</script>
