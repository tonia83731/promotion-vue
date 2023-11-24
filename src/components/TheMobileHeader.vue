<script setup>
  import TheFooterElement from './element/TheFooterElement.vue';
</script>

<template>
  <div class="bg-default-white w-full px-2 pt-3 pb-4 grid grid-cols-5 gap-2 items-center desktop:hidden fixed bottom-0">
    <TheFooterElement 
      title="候選人主張"
      imageSrc="/src/assets/AdvocateIcon.svg"
    />
    <TheFooterElement 
      title="最新活動"
      imageSrc="/src/assets/NewsIcon.svg"
    />
    <TheFooterElement 
      title="政策議題"
      imageSrc="/src/assets/IssueIcon.svg"
    />
    <TheFooterElement 
      title="小額捐款"
      imageSrc="/src/assets/DonateIcon.svg"
    />
    <TheFooterElement 
      title="服務信箱"
      imageSrc="/src/assets/MailIcon.svg"
    />
  </div>
</template>

<style scoped></style>
