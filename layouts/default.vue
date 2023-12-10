<template>
  <div class="flex flex-col h-full">
    <Header class="fixed w-full top-0 left-0 z-20" />
    <div class="flex-grow pt-20 md:pt-40">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<style>
body,
html,
#__nuxt {
  height: 100%;
}
</style>
