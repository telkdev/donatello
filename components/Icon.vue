<template>
  <nuxt-icon :name="props.name" />
</template>

<script lang="ts" setup>
const props = defineProps<{
  name: string;
}>();
</script>

<style>
/* overwrite plugin styling */
.nuxt-icon svg {
  margin-bottom: 0;
  width: 100%;
  height: 100%;
  display: inline-block;
}
</style>
