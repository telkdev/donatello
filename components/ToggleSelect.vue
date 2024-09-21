<template>
  <ul
    class="flex items-center gap-1 rounded-xl overflow-hidden border border-graphic"
  >
    <li v-for="value of values" class="py-1 px-2 text-grey">
      <button
        class="uppercase font-bold"
        :class="{
          'opacity-70 pointer-events-none': value.isDisabled,
          'text-black !opacity-100': value.data === props.modelValue,
          
        }"
        :disabled="value.isDisabled"
        @click="selectValue(value.data)"
      >
        {{ value.data }}
      </button>
    </li>
  </ul>
</template>

<script lang="ts" setup>
const props = defineProps<{
  modelValue: string;
  values: { data: string; isDisabled: boolean }[];
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

function selectValue(value: string) {
  emit("update:modelValue", value);
}
</script>
