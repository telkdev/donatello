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
