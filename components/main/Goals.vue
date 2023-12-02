<template>
  <section>
    <div class="container py-16">
      <h2
        class="text-2xl md:text-4xl uppercase pb-10 border-b border-graphic mb-14"
      >
        Our main goals
      </h2>
      <ul class="grid md:grid-cols-2 gap-10">
        <li
          v-for="(goal, index) in goals"
          :key="index"
          class="flex items-start gap-10"
        >
          <span class="text-2xl md:text-3xl text-grey shrink-0">{{
            addIndex(index)
          }}</span>
          <div>
            <h3 class="text-xl text-grey mb-8">{{ goal.title }}</h3>
            <p class="text-lg">{{ goal.description }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
type Goal = {
  title: string;
  description: string;
};

const goals = ref<Goal[]>([
  {
    title: "Convenient Access to Information",
    description:
      "Provide convenient access to information about various charitable foundations, including their missions, goals, programs, and contact information.",
  },
  {
    title: "Search and Filtering",
    description:
      "Enable users to search and filter foundations based on various criteria. this helps users find foundations that meet their specific needs.",
  },
  {
    title: "Support for Charitable Actions",
    description:
      "Provide information on how users can donate to or support each foundation.",
  },
  {
    title: "Public awareness",
    description:
      "Raise awareness about different charitable foundations and their work to attract more donors and volunteers.",
  },
  {
    title: "Support for Foundations",
    description:
      "Provide foundations with the opportunity to showcase their work and attract new donors and partners.",
  },
  {
    title: "Monitoring and reporting",
    description:
      "Enable foundations to submit reports on their activities and financial use to donors and the public.",
  },
]);

function addIndex(index: number) {
  if (index < 10) {
    return `0${index + 1}`;
  }

  return index + 1;
}
</script>
