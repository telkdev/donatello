<template>
  <div class="relative" v-click-outside="close">
    <button
      class="px-4 md:px-8 py-2 md:py-4 bg-light-grey flex items-center justify-between gap-2 w-full"
      @click="toggle"
    >
      <span class="text-graphic">{{ props.modelValue }}</span>
      <Icon
        name="triangle"
        class="flex-shrink-0"
        :class="{ 'rotate-180': show }"
      />
    </button>
    <ul v-if="show" class="absolute top-full left-0 right-0">
      <li v-for="(option, index) in props.options" :key="index">
        <button
          @click="handleSelectOption(option)"
          class="px-4 md:px-8 py-1 md:py-2 bg-light-grey w-full text-left text-graphic hover:bg-mid-grey border-t border-graphic"
          :class="{ '!text-black': props.modelValue === option }"
        >
          {{ option }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const show = ref(false);

const toggle = () => {
  show.value = !show.value;
};

function close() {
  show.value = false;
}

const props = defineProps<{
  modelValue: string;
  options: string[];
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

function handleSelectOption(value: string) {
  emit("update:modelValue", value);
  toggle();
}
</script>
