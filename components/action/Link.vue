<template>
  <RouterLink
    :to="props.path"
    class="text-white block bg-graphic py-4 px-8 text-center border border-transparent hover:border-graphic hover:bg-transparent hover:text-graphic"
    :class="sizeClasses"
    >{{ props.text }}</RouterLink
  >
</template>

<script lang="ts" setup>
type Size = "md" | "lg";
const props = defineProps<{
  path: string;
  text: string;
  size: Size;
}>();

const sizeClasses = computed(() => {
  switch (props.size) {
    case "lg":
      return "min-w-[200px]";

    default:
    case "md":
      return "";
  }
});
</script>
