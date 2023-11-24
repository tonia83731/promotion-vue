<script>
export default {
  props: {
    title: String,
    subtitle: String,
    customClass: String,
    spanClass: String
  },
}

</script>

<template>
  <div class="text-[52px] font-mantou text-center gradient-text leading-[105%] tracking-[2px] tablet:text-[52px]" :class="customClass">
    <div class="">{{ title }}</div>
    <span :class="spanClass"></span>
    <div class="">{{ subtitle }}</div>
  </div>
</template>

<style scoped></style>
