<template>
  <div>
    <div class="container py-4">
      <h1 class="mb-4">About funds stuff</h1>

      <div class="flex flex-col gap-4">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
          voluptas, culpa illo magni, minima nisi sint temporibus sit itaque
          velit dolor veniam et adipisci aut voluptatem, voluptates nostrum
          soluta autem.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
          voluptas, culpa illo magni, minima nisi sint temporibus sit itaque
          velit dolor veniam et adipisci aut voluptatem, voluptates nostrum
          soluta autem.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
          voluptas, culpa illo magni, minima nisi sint temporibus sit itaque
          velit dolor veniam et adipisci aut voluptatem, voluptates nostrum
          soluta autem.
        </p>

        <ul class="space-y-4">
          <FaqQustionAnswer v-for="item of faq" :question-item="item" />
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const faq = [
  {
    question: "How to enable power?",
    answer: "Just do it",
  },
  {
    question: "How to enable power?",
    answer: "Just do it",
  },
  {
    question: "How to enable power?",
    answer: "Just do it",
  },
  {
    question: "How to enable power?",
    answer: "Just do it",
  },
  {
    question: "How to enable power?",
    answer: "Just do it",
  },
];
</script>
