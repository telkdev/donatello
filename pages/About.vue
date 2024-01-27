<template>
  <div>
    <div>
      <img
        src="/images/about/about-mobile.webp"
        srcset="/images/about/about-mobile.webp 700w, /images/about/about-desktop.webp 1000w"
        class="w-full lg:h-96 lg:object-cover"
        alt="Image of ukrainian flag"
      />
    </div>
    <div class="container pt-10 lg:pt-16">
      <h1
        class="text-2xl md:text-4xl uppercase pb-10 border-b border-graphic mb-14 text-graphic"
      >
        about our service
      </h1>

      <div
        class="flex flex-col gap-2 prose prose-slate max-w-none mb-4 text-lg"
      >
        <p>
          Our service provides a convenient list of charitable fundraisers for
          individuals who wish to make donations or participate in volunteer
          initiatives. The charitable service is designed to make charitable
          contributions accessible and convenient for everyone, offering the
          opportunity to choose and support projects that personally interest
          users.
        </p>
        <p>
          Our service enables online fundraising, allowing users from around the
          world to easily participate in charitable initiatives. each charitable
          project has its own profile where the fundraising goal and the plan
          for fund utilization are detailed.
        </p>
        <p>
          Thanks to our service, you have the opportunity to share information
          about the charitable project through social networks, email, and other
          communication channels. our service aims to simplify and streamline
          the process of charitable fundraising, making it accessible and
          transparent for all stakeholders.
        </p>
      </div>
    </div>
    <FaqListWithTitle :faq="faq" />
  </div>
</template>

<script lang="ts" setup>
const faq = [
  {
    question: "What is our charitable service and what is its main goal?",
    answer:
      "Our charitable service is an online platform that allows users to create and support fundraising campaigns for various needs and projects. Our main goal is to bring people together to support initiatives that have a positive impact on the community.",
  },
  {
    question:
      "Why is it important to use our service for charitable fundraising?",
    answer:
      "We provide a convenient and secure tool for creating and participating in charitable fundraisers. Our service helps to bring charitable ideas to life and maximize their impact.",
  },
  {
    question: "What charitable projects can be supported through our service?",
    answer:
      "Our service allows you to support various charitable projects, ranging from medical needs and education to assistance in crisis situations and cultural initiatives.",
  },
  {
    question: "How to personally create a fundraising campaign on our service?",
    answer:
      "To create a fundraising campaign, register on our service, go to your personal account, and select the option 'Create a fundraiser.' Follow the instructions and add important details about the project.",
  },
  {
    question:
      "Are there any commissions or fees for using our charitable service?",
    answer:
      "No, our charitable service does not involve any commissions or additional costs for its use. We strive to provide a free and accessible tool to support charitable initiatives.",
  },
];
</script>
