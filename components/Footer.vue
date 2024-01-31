<template>
  <footer class="bg-light-grey py-12 md:py-20">
    <div class="container">
      <div
        class="flex flex-col items-center md:flex-row justify-between gap-4 md:gap-10 pb-24 border-b border-graphic mb-12"
      >
        <NuxtLink to="/" aria-label="Home page">
          <Logo />
        </NuxtLink>
        <Navigation />
        <Socials />
      </div>
      <div class="flex items-center flex-wrap gap-1 justify-center">
        <span>{{ t('Footer.Copyright') }}</span>
        <ul class="flex items-center gap-1">
          <li>
            <RouterLink to="/privacy-policy"> {{ t('Footer.Links.Privacy') }}. </RouterLink>
          </li>
          <li>
            <RouterLink to="/terms-conditions"> {{ t('Footer.Links.Terms') }} </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();


</script>