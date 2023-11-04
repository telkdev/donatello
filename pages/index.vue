<template>
  <Header />
  <div>
    <p class="bg-slate-400 text-red-950">{{ t("welcome") }}</p>
    
    <div class="h-2"></div>
    <div class="h-20"></div>
    <div class="h-20"></div>
    <div class="h-20"></div>
    <div class="h-20"></div>
    <div class="h-20"></div>
    <div class="h-20"></div>
    <div class="h-20"></div>
    <div class="h-20"></div>
    <div class="h-20"></div>
    <div class="h-20"></div>
    <div class="h-20"></div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
