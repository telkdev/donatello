<template>
  <div class="flex">
    <ToggleSelect v-model="locale" :values="availableLocales" />
  </div>
</template>

<script lang="ts" setup>
const { availableLocales, locale } = useI18n();
</script>
