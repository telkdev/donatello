<template>
  <section class="bg-light-grey">
    <div
      class="container py-20 md:py-60 flex flex-col md:flex-row items-center gap-5 justify-between"
    >
      <div class="space-y-5 md:space-y-12 flex-grow">
        <h1 class="text-4xl md:text-6xl uppercase font-bold text-graphic">
          {{ t("welcome") }}
        </h1>
        <div class="space-y-4">
          <p class="text-lg">
            here you will find a list of all charitable organizations, if you
            wish to make a charitable contribution.
          </p>
          <p class="text-lg">
            if you are a volunteer or you have your own charitable foundation,
            You can create your own fundraiser here.
          </p>
        </div>
        <div
          class="flex gap-5 md:gap-8 flex-wrap justify-center md:justify-start"
        >
          <ActionLink text="Funds List" path="/funds" size="lg" />
          <ActionLink text="Create fundraiser" path="/create" size="lg" />
        </div>
      </div>
      <div class="flex-grow">
        <img
          src="@/assets/images/map.webp"
          width="530"
          height="374"
          alt="Map of Ukraine"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
