<template>
  <section>
    <div class="container py-16">
      <h2
        class="text-2xl md:text-4xl uppercase pb-10 border-b border-graphic mb-14 text-graphic"
      >
        {{ t("Main.Goals.Title") }}
      </h2>
      <ul class="grid md:grid-cols-2 gap-10">
        <li
          v-for="(goal, index) in goals"
          :key="index"
          class="flex items-start gap-10"
        >
          <span class="text-2xl md:text-3xl text-grey shrink-0">
            {{ addIndex(index) }}
          </span>
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
import { useI18n } from "vue-i18n";

type Goal = {
  title: string;
  description: string;
};

const { t } = useI18n();

const goals = computed<Goal[]>(()=>([
  {
    title: t("Main.Goals.Goals.First.Title"),
    description: t("Main.Goals.Goals.First.Description"),
  },
  {
    title: t("Main.Goals.Goals.Second.Title"),
    description: t("Main.Goals.Goals.Second.Description"),
  },
  {
    title: t("Main.Goals.Goals.Third.Title"),
    description: t("Main.Goals.Goals.Third.Description"),
  },
  {
    title: t("Main.Goals.Goals.Fourth.Title"),
    description: t("Main.Goals.Goals.Fourth.Description"),
  },
  {
    title: t("Main.Goals.Goals.Fifth.Title"),
    description: t("Main.Goals.Goals.Fifth.Description"),
  },
  {
    title: t("Main.Goals.Goals.Sixth.Title"),
    description: t("Main.Goals.Goals.Sixth.Description"),
  },
]));

function addIndex(index: number) {
  if (index < 10) {
    return `0${index + 1}`;
  }

  return index + 1;
}
</script>
