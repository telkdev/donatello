<template>
  <section>
    <div class="container py-16">
      <h3
        class="text-xl md:text-2xl uppercase pb-5 border-b border-graphic mb-7"
      >
        Browse fund by category
      </h3>
      <span class="inline-block mb-5"
        >Looking how to create fund? Browse here(link to create fund)</span
      >
      <ul class="flex gap-5 flex-wrap justify-center">
        <li v-for="(category, index) in categories" :key="index">
          <CategoriesMetaEntry
            :category="category.attributes"
            class="w-[150px] min-h-[130px]"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { Category } from "../funds/types";

const { find } = useStrapi();

const { data: categories } = await useAsyncData(async () => {
  const { data } = await find<Category>("categories");

  return data;
});
</script>
