<template>
  <header class="bg-white">
    <div
      class="flex items-center justify-between gap-2 container py-5 md:py-12"
    >
      <NuxtLink to="/" :aria-label="t('Header.Home')">
        <Logo />
      </NuxtLink>

      <button
        v-if="!isMenuOpen"
        @click="openMenu"
        class="flex md:hidden w-10 h-5"
        :aria-label="t('Header.Menu.Open')"
      >
        <Icon name="burger" class="w-full h-full" />
      </button>
      <Menu v-else @close="closeMenu" />

      <Navigation class="sm:hidden md:block" />
      <Locale class="sm:hidden md:block" />
    </div>
  </header>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const { isMenuOpen, openMenu, closeMenu } = useMenu();

const runtimeConfig = useRuntimeConfig();

function useMenu() {
  const isMenuOpen = ref(false);

  function openMenu() {
    isMenuOpen.value = true;
  }

  function closeMenu() {
    isMenuOpen.value = false;
  }

  return {
    isMenuOpen,
    openMenu,
    closeMenu,
  };
}
</script>
