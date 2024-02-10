<template>
  <div>
    <MainHero />
    <MainCategories />
    <MainAbout />
    <MainGoals />
    <Quote>
      <template #content>
        <b>Lorem ipsum</b> dolor sit amet consectetur, adipisicing elit.
      </template>
    </Quote>
    <MainFaq />
    <Quote>
      <template #content>
        <b>Lorem ipsum</b> dolor sit ducimus magnam ea fuga dicta, perspiciatis
        aliquam magni?
      </template>
    </Quote>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Some test title with good seo",
  meta: [
    {
      name: "description",
      content: "Description comntent",
    },
  ],
});
</script>
