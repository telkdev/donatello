<template>
  <section class="bg-light-grey">
    <div
      class="container py-20 md:py-40 flex flex-col md:flex-row items-center gap-5 justify-between"
    >
      <div class="space-y-5 md:space-y-12 flex-grow">
        <h1 class="text-4xl md:text-6xl uppercase font-bold text-graphic">
          {{ t("Main.Hero.Title") }}
        </h1>
        <div class="space-y-4">
          <p class="text-lg">
            {{ t("Main.Hero.Description.Contribution") }}
          </p>
          <p class="text-lg">
            {{ t("Main.Hero.Description.CreateFundraiser") }}
          </p>
        </div>
        <div
          class="flex gap-5 md:gap-8 flex-wrap justify-center md:justify-start"
        >
          <ActionLink
            :text="t('Main.Hero.ActionLinks.Funds')"
            path="/funds"
            size="lg"
            type="primary"
          />
          <ActionLink
            :text="t('Main.Hero.ActionLinks.CreateFundraiser')"
            path="/create"
            size="lg"
            type="secondary"
          />
        </div>
      </div>
      <div class="flex-grow">
        <img
          src="/images/map.webp"
          width="530"
          height="374"
          :alt="t('Main.Hero.Image.Description')"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
