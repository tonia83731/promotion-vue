<script setup>
import Logo from '../assets/Logo.svg'

</script>

<template>
  <header class="h-[56px] px-4 py-3 tablet:h-[100px] tablet:px-12 tablet:py-7 tablet:flex tablet:justify-between tablet:items-center">
    <div class="flex items-center">
      <img src="../assets/Logo.svg" alt="" class="w-[50px]">
      <div class="text-primary-theme font-bold ml-2 leading-[56px] text-xl tablet:text-2xl">喵立翰 Miao Li-Han</div>
    </div>
    <nav class="hidden text-lg desktop:grid desktop:grid-cols-5 desktop:gap-4 desktop:justify-items-center">
      <a href="#main-advocate">候選人主張</a>
      <a href="#news">最新活動</a>
      <a href="#issues">政策議題</a>
      <a href="#donate-and-mail">小額捐款</a>
      <a href="#donate-and-mail">民眾服務信箱</a>
    </nav>
    <div class="hidden tablet:grid tablet:grid-cols-3 tablet:gap-2 tablet:justify-items-center">
      <a href="#"><img src="../assets/FacebookIcon.svg" alt="facebook" class="w-[32px]"></a>
      <a href="#"><img src="../assets/InstagramIcon.svg" alt="facebook" class="w-[32px] mx-4"></a>
      <a href="#"><img src="../assets/YoutubeIcon.svg" alt="facebook" class="w-[32px]"></a>
    </div>
  </header>
</template>

<style scoped>
</style>
