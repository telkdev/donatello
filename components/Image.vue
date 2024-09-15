<template>
  <img :src="imagePath" :alt="props.alt" :aria-hidden="props.ariaHidden" />
</template>

<script lang="ts" setup>
const props = defineProps<{
  path: string;
  alt: string;
  ariaHidden?: boolean;
}>();

const { imagePath } = useImagePath(computed(() => props.path));
</script>
