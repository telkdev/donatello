<template>
  <div>
    <NavigationSecondary />
    <div class="bg-light-grey2">
      <div
        class="grid grid-rows-2 md:grid-rows-1 gap-4 md:grid-cols-4 container py-12"
      >
        <div class="md:col-span-3">
          <div class="flex items-center gap-2 flex-wrap justify-between mb-12">
            <h1 class="text-2xl text-text-grey2 uppercase">Funds</h1>
            <Select
              v-model="selectedCategory"
              :options="categories"
              class="max-w-[380px] w-full"
            />
          </div>
          <ul class="space-y-8">
            <li>
              <FundsListEntry />
            </li>
            <li>
              <FundsListEntry />
            </li>
            <li>
              <FundsListEntry />
            </li>
          </ul>
        </div>
        <aside class="mt-2">
          <AsidesTopFunds />
        </aside>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const selectedCategory = ref("All Categories");

const categories = ref(["All Categories", "Category 1", "Category 2"]);
</script>
