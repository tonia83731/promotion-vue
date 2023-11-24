<script setup>
  import TheFooterElement from './element/TheFooterElement.vue';
</script>

<template>
  <div class="bg-default-white w-full px-2 pt-3 pb-4 grid grid-cols-5 gap-2 items-center desktop:hidden fixed bottom-0">
    <TheFooterElement 
      title="候選人主張"
      imageSrc="/src/assets/AdvocateIcon.svg"
      href="#main-advocate"
    />
    <TheFooterElement 
      title="最新活動"
      imageSrc="/src/assets/NewsIcon.svg"
      href="#news"
    />
    <TheFooterElement 
      title="政策議題"
      imageSrc="/src/assets/IssueIcon.svg"
      href="#issues2"
    />
    <TheFooterElement 
      title="小額捐款"
      imageSrc="/src/assets/DonateIcon.svg"
      href="#donate-and-mail"
    />
    <TheFooterElement 
      title="服務信箱"
      imageSrc="/src/assets/MailIcon.svg"
      href="#donate-and-mail"
    />
  </div>
</template>

<style scoped></style>
