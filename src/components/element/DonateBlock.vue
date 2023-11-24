<script>
import TheButton from './TheButton.vue';

export default {
    props: {
        customClass: String,
        mainTitle: String,
        subTitle: String,
        btnText: String,
        btnClass: String,
        imageSrc: String,
    },
    components: { TheButton }
}

</script>

<template>
  <div class="text-default-white rounded-[32px] px-6 py-10 desktop:p-24" :class="customClass">
    <div class="font-mantou text-[40px]">{{ mainTitle }}</div>
    <div class="text-xl font-semibold">{{ subTitle }}</div>
    <div class="mt-6 grid grid-cols-[1fr_135px] h-[125px] items-center tablet:gap-2 desktop:grid-cols-[1fr_220px] desktop:gap-20 desktop:h-[240px]">
      <TheButton :btnText="btnText" :btnClass="btnClass"/>
      <img :src="imageSrc" alt="donate-section" class=""/>
    </div>
  </div>
</template>

<style scoped></style>