<template>
  <section>
    <div class="container py-16">
      <ul class="gap-5 grid grid-cols-2 lg:flex lg:flex-wrap lg:justify-center lg:gap-10">
        <li
          v-for="(category, index) in categories"
          :key="index"
          class="flex justify-center"
        >
          <CategoriesMetaEntry
            :category="category.attributes"
            class="w-[120px] lg:w-[150px]"
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
  const { data } = await find<Category>("categories", {
    populate: {
      icon: {
        fields: ["name", "url", "alternativeText"],
      },
    },
  });

  return data;
});
</script>
