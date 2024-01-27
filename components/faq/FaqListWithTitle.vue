<template>
  <section class="py-16">
    <div class="container">
      <h2
        class="text-2xl md:text-4xl uppercase pb-10 border-b border-graphic mb-14 text-graphic"
      >
        Frequently asked questions
      </h2>
      <ul class="space-y-4">
        <FaqQustionAnswer v-for="item of props.faq" :question-item="item" />
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { QuestionWithAnswer } from "./QustionAnswer.vue";

const props = defineProps<{
  faq: QuestionWithAnswer[];
}>();
</script>
