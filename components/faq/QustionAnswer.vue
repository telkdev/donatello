<template>
  <li
    class="group cursor-pointer p-2 lg:py-5 lg:px-12 border border-graphic"
    @click="toggle"
  >
    <div
      class="flex gap-3 justify-between items-center cursor-pointer"
      :class="{ 'underline-gradient--active': isOpened }"
    >
      <div
        v-html="questionItem.question"
        class="text-lg font-medium text-grey md:text-xl"
      />
      <span
        class="flex-shrink-0 w-0 h-0 border-solid border-transparent border-b-graphic border-b-4 border-r-4 border-l-4 lg:border-b-8 lg:border-l-8 lg:border-r-8 transform transition-transform duration-500"
        :class="[isOpened ? 'rotate-180' : 'rotate-0  ']"
      />
    </div>
    <div
      class="text-sm md:text-lg font-extralight leading-tight transform transition-all duration-500"
      :class="[isOpened ? 'opacity-100 max-h-56 mt-5' : 'opacity-0 max-h-0']"
      v-html="questionItem.answer"
    />
  </li>
</template>

<script lang="ts" setup>
type QuestionWithAnswer = {
  question: string;
  answer: string;
};

defineProps<{
  questionItem: QuestionWithAnswer;
}>();

const isOpened = ref(false);

function toggle() {
  isOpened.value = !isOpened.value;
}
</script>
