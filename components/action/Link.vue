<template>
  <RouterLink
    :to="props.path"
    class="block py-4 px-8 text-center border"
    :class="[
      sizeClasses,
      {
        'text-white bg-graphic border-transparent hover:border-graphic hover:bg-transparent hover:text-graphic':
          props.type === 'primary',
        'text-graphic bg-transparent border-graphic hover:bg-graphic hover:text-white':
          props.type === 'secondary',
      },
    ]"
    >{{ props.text }}</RouterLink
  >
</template>

<script lang="ts" setup>
type Size = "md" | "lg";
type Type = "primary" | "secondary";

const props = defineProps<{
  path: string;
  text: string;
  size: Size;
  type: Type;
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
