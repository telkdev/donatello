<template>
  <header class="fixed w-full top-0 left-0 bg-white z-20">
    <div
      class="flex items-center justify-between gap-2 container py-5 md:py-16"
    >
      <NuxtLink to="/" aria-label="Home page">
        <Logo />
      </NuxtLink>

      <button
        v-if="!isMenuOpen"
        @click="openMenu"
        class="flex md:hidden w-10 h-5"
        aria-label="Open menu"
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
const { isMenuOpen, openMenu, closeMenu } = useMenu();

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
