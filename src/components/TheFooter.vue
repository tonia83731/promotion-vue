<script setup>
import FacebookIcon from '../assets/FacebookIcon.svg'
import InstagramIcon from '../assets/InstagramIcon.svg'
import YoutubeIcon from '../assets/YoutubeIcon.svg'
</script>

<template>
  <footer class="bg-bg-theme-2 px-4 py-16 tablet:grid tablet:grid-cols-2">
    <div class="tablet:max-w-[1320px] tablet:mx-auto">
      <div class="flex items-center">
        <span class="w-8 h-8 leading-8 text-xl bg-gradient rounded-full text-default-white text-center ">3</span>
        <div class="text-primary-theme text-[28px] font-bold ml-2">喵立翰&#32;Miao Li-Han</div>
      </div>
      <div class="my-4 flex">
        <a href="">
          <div class="bg-bg-theme-1 w-12 h-12 rounded-full flex justify-center items-center"><FacebookIcon /></div>
        </a>
        <a href="" class="mx-2">
          <div class="bg-bg-theme-1 w-12 h-12 rounded-full flex justify-center items-center"><InstagramIcon /></div>
        </a>
        <a href="">
          <div class="bg-bg-theme-1 w-12 h-12 rounded-full flex justify-center items-center"><YoutubeIcon /></div>
        </a>
      </div>
      <div class="text-sm">
        &#169;2023&#32;喵立翰&#32;Miao Li-Han&#32;版權所有
      </div>
    </div>
    <div class="mt-6 tablet:mt-0">
      <div class="text-2xl font-bold">競選總部</div>
      <ul class="text-base mt-4">
        <li class="">辦公室地址: 喵星區, 毛茸茸大道88號, 喵喵大樓3樓</li>
        <li class="">電話：<a href="tel:(02) 888-5678" class="text-text-primary">(02) 888-5678</a></li>
        <li class="">電子郵件地址：<a href="mailto:meowoffice@linmeow.tw" class="text-text-primary">meowoffice@linmeow.tw</a></li>
      </ul>
    </div>
  </footer>
</template>

<style scoped>
</style>
