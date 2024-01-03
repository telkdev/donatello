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
        <span>©2023 UA Funds. All Rigts Reserved.</span>
        <ul class="flex items-center gap-1">
          <li>
            <RouterLink to="/privacy-policy"> Privacy Policy. </RouterLink>
          </li>
          <li>
            <RouterLink to="/terms-conditions"> Terms Conditions </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
