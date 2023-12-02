<template>
  <div class="flex flex-col h-full">
    <Header />
    <div class="flex-grow">
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
