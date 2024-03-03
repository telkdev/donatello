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
  margin-bottom: 0 !important;
  width: 100% !important;
  height: 100% !important;
  display: inline-block !important;
}
</style>
