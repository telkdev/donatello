<template>
  <div
    class="fixed top-0 bottom-0 left-0 right-0 bg-light-grey z-50 py-5 px-4 flex flex-col gap-4 items-center justify-between"
  >
    <div class="flex justify-between items-center w-full">
      <NuxtLink to="/" aria-label="Home page">
        <Logo />
      </NuxtLink>

      <button @click="close" class="flex" aria-label="Close menu">
        <Icon name="cross" class="w-5 h-5 text-graphic" />
      </button>
    </div>
    <Navigation />
    <Socials />
    <Locale />
  </div>
</template>

<script lang="ts" setup>
import { watch } from "vue";

const emit = defineEmits<{
  (e: "close"): void;
}>();

function close() {
  emit("close");
}

const route = useRoute();

watch(
  () => route.path,
  () => {
    close();
  }
);
</script>
