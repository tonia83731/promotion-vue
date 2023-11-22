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
  <div class="text-default-white rounded-[32px] px-6 py-10" :class="customClass">
    <div class="font-mantou text-[40px]">{{ mainTitle }}</div>
    <div class="text-xl font-semibold">{{ subTitle }}</div>
    <div class="h-[126px] flex mt-6 ">
      <TheButton :btnText="btnText" :btnClass="btnClass"/>
      <img :src="imageSrc" alt="donate-section" class=""/>
    </div>
  </div>
</template>

<style scoped></style>