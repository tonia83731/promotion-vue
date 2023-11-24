<script setup>
import TheLink from '../components/element/TheLink.vue';
</script>

<template>
  <main>
    <div class="container">
      <TheLink title="小額捐款" href="/donate" />
      <div class="font-bold text-2xl mt-8 mb-4 desktop:text-[32px]">小額捐款</div>
      <div class="bg-bg-theme-2 rounded-[24px] p-6 grid grid-cols-[1fr_95px] items-center">
        <div class="grid grid-rows-2 gap-4">
          <div class="text-primary-theme font-bold">您的小筆捐款<br>是每隻毛孩未來的大大動力！</div>
          <div>
            <div class="text-sm">目前小額贊助總金額</div>
            <div class="font-bold text-xl">987,655,873</div>
          </div>
        </div>
        <img src="../assets/DonateImg.png" alt="donate-img">
      </div>
      <div>
        <div class="font-bold text-xl mb-4">捐款方案</div>
        
      </div>
    </div>
  </main>
</template>
