<template>
  <section>
    <div class="container py-16">
      <ul
        class="gap-5 grid grid-cols-2 lg:flex lg:flex-wrap lg:justify-center lg:gap-10"
      >
        <li class="flex justify-center">
          <NuxtLink to="/funds" class="flex flex-col items-center group">
            <div
              class="w-20 h-20 bg-graphic rounded-full flex justify-center items-center mb-4 border-2 border-transparent group-hover:border-graphic group-hover:bg-white transition-all duration-300 ease-in-out"
            >
              <Icon
                name="categories/all"
                class="filter invert brightness-0 group-hover:brightness-100 group-hover:invert-0 transition-all duration-300 ease-in-out"
              />
            </div>

            <span class="text-graphic lg:text-xl block text-center">
              {{ allCategoriesEntry.displayName }}
            </span>
          </NuxtLink>
        </li>
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

const allCategoriesEntry = ref<Category>({
  icon: {
    data: {
      id: 0,
      attributes: {
        url: "",
        alternativeText: "",
        name: "",
      },
    },
  },
  createdAt: "",
  displayName: "All categories",
});
</script>
