<template>
  <div class="bg-white shadow-sm p-5 lg:p-8">
    <div class="lg:flex mb-5">
      <div
        v-if="isDesktop"
        class="hidden lg:block mr-8 border border-graphic flex-shrink-0"
      >
        <img
          src="https://picsum.photos/200/300"
          class="w-32 h-32 object-cover"
        />
      </div>
      <div class="lg:flex-grow">
        <div class="flex justify-between items-center mb-5">
          <div class="flex items-center gap-2 flex-wrap">
            <ul class="flex items-center flex-wrap gap-2">
              <li
                class="rounded-2xl bg-light-grey py-2 px-5 flex items-center gap-1 text-grey2"
              >
                <Icon
                  name="categories/military"
                  class="w-4 flex-shrink-0 flex"
                />
                Military
              </li>
            </ul>
            <span class="w-[2px] h-[2px] bg-black rounded-full"></span>
            <span class="text-xs">Sep 23</span>
          </div>
          <button
            class="flex items-center gap-1 flex-col lg:flex-row"
            aria-label="Open menu"
          >
            <span
              class="w-[5px] h-[5px] bg-black rounded-full"
              aria-hidden="true"
            ></span>
            <span
              class="w-[5px] h-[5px] bg-black rounded-full"
              aria-hidden="true"
            ></span>
            <span
              class="w-[5px] h-[5px] bg-black rounded-full"
              aria-hidden="true"
            ></span>
          </button>
        </div>
        <div v-if="!isDesktop" class="lg:hidden border border-graphic mb-5">
          <img
            src="https://picsum.photos/400/200"
            class="w-full object-cover"
          />
        </div>
        <h2 class="text-xl text-graphic mb-5">
          Fundraising for ten shark drones for the armed forces of ukraine.
        </h2>
        <h3 class="text-sm text-grey2 uppercase">
          Благодійна організація “Фонд асперн”
        </h3>
      </div>
    </div>
    <p class="text-lg mb-6 line-clamp-3">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
      deleniti! Numquam harum voluptas animi. Nulla saepe vero magnam
      reprehenderit dolores, iure cumque recusandae rerum sint, molestias
      tempora quisquam, voluptatibus exercitationem.
    </p>
    <ul class="flex items-cemter flex-wrap gap-2 mb-6">
      <li
        v-for="method in paymentMethods"
        class="rounded-2xl border border-graphic py-2 px-4 text-grey2 text-xs font-medium"
      >
        {{ method }}
      </li>
    </ul>
    <div class="flex justify-between items-center">
      <div class="mb-2 lg:mb-0">
        <span class="block uppercase mb-1">total goal</span>
        <div>
          <span class="text-xl"> 650 000 </span> <span class="text-xl">$</span>
        </div>
      </div>
      <ActionLink text="Support" path="/" size="md" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMediaQuery } from "@vueuse/core";

const isDesktop = useMediaQuery("(min-width: 1024px)");

const paymentMethods = ["Credit card", "PayPal", "Apple Pay"];
</script>
