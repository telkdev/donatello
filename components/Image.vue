<template>
  <img
    :src="imagePath(props.path)"
    :alt="props.alt"
    :aria-hidden="props.ariaHidden"
  />
</template>

<script lang="ts" setup>
const props = defineProps<{
  path: string;
  alt: string;
  ariaHidden?: boolean;
}>();

const runtimeConfig = useRuntimeConfig();

const imagePath = (path: string) => {
  return `${runtimeConfig.public.strapiUrl}${path}`;
};
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
