<script setup>
import GradientTitle from '../element/GradientTitle.vue';
import TheTag from '../element/TheTag.vue';
import TheName from '../element/TheName.vue';
import TheSocialMedia from '../element/TheSocialMedia.vue'
import TheAnimation from '../element/TheAnimation.vue';

</script>

<template>
  <section class="flex flex-col items-center">
    <GradientTitle title="台灣的明天" subtitle="喵先鋪路" customClass="desktop:flex desktop:text-[96px]" spanClass="desktop:mx-2"/>
    <div class="flex flex-col items-center tablet:flex-row">
      <TheTag 
        tag="2024 立委參選人"
        customClass="text-xl rounded-[16px] mt-4 mb-3 px-4 py-3"
      />
      <TheName 
        circleClass="w-10 h-10 leading-10"
        customClass="text-[28px]"
      />
    </div>
    <div class="mt-4 mx-6 object-fill relative">
      <img src="../../assets/MainPersonImg.png" alt="main-person" class="tablet:w-[350px] desktop:w-[725px]">
      <TheSocialMedia />
    </div>
    <TheAnimation />
  </section>
</template>

<style scoped></style>
