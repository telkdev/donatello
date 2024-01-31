<template>
  <section>
    <div class="container py-16">
      <h2 class="uppercase text-2xl text-center mb-10 md:mb-16">
        {{ t("Main.About.Title") }}
      </h2>
      <p class="text-lg mb-10 md:mb-16 text-center">
        {{ t("Main.About.Description") }}
      </p>
      <ul class="flex gap-20 md:gap-10 flex-col xl:flex-row pt-10">
        <li
          class="relative border border-graphic pt-20 pb-5 px-2 xl:w-1/2 shrink-0"
        >
          <div
            class="w-28 h-28 flex rounded-full border border-graphic absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-white"
          >
            <Icon name="about/donor" class="text-grey w-14 m-auto" />
          </div>
          <h3 class="uppercase text-grey text-lg text-center mb-2">
            {{ t("Main.About.Information.Donors.Title") }}
          </h3>
          <span class="text-grey text-sm block mb-2">
            {{ t("Main.About.Information.Description") }}
          </span>
          <div class="space-y-2">
            <p>
              {{ t("Main.About.Information.Donors.Steps.First") }}
            </p>
            <p>
              {{ t("Main.About.Information.Donors.Steps.Second") }}
            </p>
            <p>
              {{ t("Main.About.Information.Donors.Steps.Third") }}
            </p>
            <p>
              {{ t("Main.About.Information.Donors.Steps.Fourth") }}
            </p>
            <p>
              {{ t("Main.About.Information.Donors.Steps.Fifth") }}
            </p>
            <p>
              {{ t("Main.About.Information.Donors.Steps.Sixth") }}
            </p>
            <p>
              {{ t("Main.About.Information.Donors.Steps.Seventh") }}
            </p>
          </div>
        </li>

        <li
          class="relative border border-graphic pt-20 pb-5 px-2 xl:w-1/2 shrink-0"
        >
          <div
            class="w-28 h-28 flex rounded-full border border-graphic absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-white"
          >
            <Icon name="about/volunteer" class="text-grey w-14 m-auto" />
          </div>
          <h3 class="uppercase text-grey text-lg text-center mb-2">
            {{ t("Main.About.Information.Volunteers.Title") }}
          </h3>
          <span class="text-grey text-sm block mb-2">
            {{ t("Main.About.Information.Description") }}
          </span>
          <div class="space-y-2">
            <p>
              {{ t("Main.About.Information.Volunteers.Steps.First") }}
            </p>
            <p>
              {{ t("Main.About.Information.Volunteers.Steps.Second") }}
            </p>
            <p>
              {{ t("Main.About.Information.Volunteers.Steps.Third") }}
            </p>
            <p>
              {{ t("Main.About.Information.Volunteers.Steps.Fourth") }}
            </p>
            <p>
              {{ t("Main.About.Information.Volunteers.Steps.Fifth") }}
            </p>
            <p>
              {{ t("Main.About.Information.Volunteers.Steps.Sixth") }}
            </p>
            <p>
              {{ t("Main.About.Information.Volunteers.Steps.Seventh") }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
