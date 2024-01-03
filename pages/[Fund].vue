<template>
  <div>
    <div class="container">

      <RichTextBlocks :data="fund?.attributes.description" class="mb-6" />
      {{ fund }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Fund } from "~/components/funds/types";

const { findOne } = useStrapi();
const route = useRoute();

const { data: fund } = await useAsyncData(async () => {
  const { data } = await findOne<Fund>("fund-collections", "1", {
    populate: ["organization", "category", "requisites"],
  });

  return data;
});
</script>
