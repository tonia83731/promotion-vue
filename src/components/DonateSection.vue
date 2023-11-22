<script setup>
  import DonateBlock from './DonateBlock.vue';

</script>

<template>
  <section class="grid grid-rows-2 gap-6 tablet:grid-rows-none tablet:grid-cols-2">
    <DonateBlock 
      mainTitle="小額支持喵喵" 
      subTitle="您的小筆捐款，是每隻毛孩未來的大大動力！"
      customClass="bg-primary-theme"
      btnText="小額捐款"
      btnClass="bg-default-white text-text-primary"
      imageSrc="/src/assets/DonateImg.png"
    />
    <DonateBlock 
      mainTitle="民眾服務信箱" 
      subTitle="親愛的鄉親，每一位市民的意見都是我們社區前進的原動力"
      customClass="bg-text-primary"
      btnText="填寫表單"
      btnClass="bg-default-white text-text-primary"
      imageSrc="/src/assets/MailImg.png"
    />
  </section>
</template>

<style scoped></style>
