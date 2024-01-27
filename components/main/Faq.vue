<template>
  <FaqListWithTitle :faq="faq" />
</template>

<script lang="ts" setup>
const faq = [
  {
    question: "How  to create a charity fundraiser?",
    answer:
      "Click on the 'Create Fundraiser' button, fill in the necessary fields, and add information about your charity project. There are mandatory requirements for creating a charity fundraiser. We recommend providing maximum information to attract more donations.",
  },
  {
    question: "Who can create a charity fundraiser?",
    answer:
      "Anyone who has an interest or a need to raise funds to support a specific project, individual, or initiative can create a charity fundraiser. individuals are also able to create charity fundraisers for various needs or projects that interest them.",
  },
  {
    question: "Do you need to be an official charitable organization?",
    answer:
      "No, creating a charity fundraiser does not require official charitable organization status. It is open to individuals, groups, teams, and non-profit organizations.",
  },
  {
    question: "What is needed to create a fundraiser?",
    answer: `confirm your identity by providing all necessary documents. <br/>
             add a clear description of the purpose for which the raised funds will be used. <br/>
             specify the exact amount you aim to raise. <br/>
             provide information about the duration during which you will be accepting donations. <br/>
             add details on how people can make donations (bank transfers, online payments, other methods). <br/>
             explain how the raised funds will be utilized and ensure transparency. <br/>
             provide contact information for donors who want additional information or have questions. <br/>
             include links to social media and, possibly, any ratings where reviews about your organization or previous fundraisers can be found. <br/>
             if there are any incentives or acknowledgments for donors, mention them.<br/>`,
  },
  {
    question:
      "How long does the approval process for a charity fundraiser take?",
    answer:
      "Typically, the approval process can take from a few hours to several days. We strive to process all applications as quickly as possible.",
  },
  {
    question:
      "are there limitations on the duration and amount of funds for a charity fundraiser?",
    answer:
      "No, there are no limitations. You can set your own timelines and fundraising goals.",
  },
  {
    question:
      "Can you edit or update information after creating a charity fundraiser?",
    answer:
      "Yes, you can edit and update information about your charity fundraiser in your personal account on our website.",
  },
  {
    question: "Can fundraisers be created for any purpose?",
    answer:
      "Yes, you can create a charity fundraiser for any purpose you define. It's crucial to specify the goal and use of the funds.",
  },
  {
    question:
      "What are the advantages of creating a charity fundraiser through this platform?",
    answer:
      "This platform provides a convenient interface, access to users, and tools for promoting your charity fundraiser.",
  },
  {
    question:
      "What topics or projects can be supported through a charity fundraiser?",
    answer:
      "Almost any topic or project can be supported through a charity fundraiser: supporting the military, medical needs, humanitarian aid, etc.",
  },
  {
    question: "How to make a donation?",
    answer: `To make a donation, there is a table listing all possible payment methods for the specific fundraiser. <br/>
       To complete the payment, choose a method that suits you. <br/>
       There is a button in the table allowing you to copy the payment details. <br/>
       After copying, visit your bank's website or app, log into your account with your identification login and password. <br/>
       In the "payments" or "transfers" section, enter the recipient's details or account number that you copied from the table. <br/>
       Verify the recipient's information beforehand and make your charitable contribution. <br/>`,
  },
  {
    question: "How to choose a trustworthy fundraiser?",
    answer:
      "To verify the reliability of a charity fundraiser, the person or organization conducting the fundraiser should attach personal documents. These documents can be viewed in the payment methods table as a PDF file. Additionally, each fundraiser should have attached documents and reports proving its reliability.",
  },
  {
    question: "How much money is it not embarrassing to donate?",
    answer:
      "There is no amount that should cause embarrassment. One hryvnia is already a significant contribution that brings us closer to the goal. Therefore, every contribution is valuable and important. If you can afford to give more – that's great. But the final decision is yours, and any help is crucial!",
  },
  {
    question: "How to promote the fundraiser?",
    answer:
      "To promote the fundraiser, there is a button that allows you to copy the link to the fundraiser. This way, you can share the link on any of your social media platforms or simply forward it to people you know. Remember that spreading the word about fundraisers is crucial and accelerates progress towards the goal.",
  },
];
</script>
