<script setup>
import GradientTitle from '../element/GradientTitle.vue';

</script>

<template>
  <section class="flex flex-col items-center">
    <div class="container flex flex-col items-center">
      <GradientTitle title="台灣的明天" subtitle="喵先鋪路" customClass="desktop:flex desktop:text-[64px]" spanClass="desktop:mx-2"/>
      <div class="flex items-center mt-6 mb-16">
        <span class="w-8 h-8 leading-8 text-2xl font-black bg-gradient rounded-full text-default-white text-center tablet:w-[50px] tablet:h-[50px] tablet:leading-[50px] tablet:text-[32px]">3</span>
        <div class="text-primary-theme text-2xl font-bold ml-2 tablet:text-[40px]">喵立翰&#32;Miao Li-Han</div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
