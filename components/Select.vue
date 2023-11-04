<template>
  <ul
    class="flex items-center gap-1 rounded-xl overflow-hidden border border-graphic"
  >
    <li v-for="value of values" class="py-1 px-2">
      <button
        class="uppercase font-bold text-grey"
        :class="{ 'text-black': value === props.modelValue }"
        @click="selectValue(value)"
      >
        {{ value }}
      </button>
    </li>
  </ul>
</template>

<script lang="ts" setup>
const props = defineProps<{
  modelValue: string;
  values: string[];
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

function selectValue(value: string) {
  emit("update:modelValue", value);
}
</script>
