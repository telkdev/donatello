<template>
  <ul class="flex items-center gap-5">
    <li v-for="(social, index) in socials" :key="index" class="w-10 h-10">
      <a
        :href="social.path"
        target="_blank"
        rel="noopener noreferrer"
        :title="social.name"
      >
        <Icon :name="`socials/${social.icon}`" class="text-graphic" />
      </a>
    </li>
  </ul>
</template>

<script lang="ts" setup>
type Social = {
  name: string;
  path: string;
  icon: string;
};

const socials = ref<Social[]>([
  {
    name: "Facebook",
    path: "https://www.facebook.com/0xkowloon",
    icon: "facebook",
  },
  {
    name: "Telegram",
    path: "telegram",
    icon: "telegram",
  },
  {
    name: "Instagram",
    path: "https://instagram.com/0xkowloon",
    icon: "instagram",
  },
]);
</script>
