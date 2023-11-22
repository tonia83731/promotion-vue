<script>
export default {
  props: {
    title: String,
    subtitle: String
  },
}

</script>

<template>
  <div class="text-[52px] font-mantou text-center gradient-text leading-[105%] tracking-[2px] tablet:flex tablet:text-[64px]">
    <div class="">{{ title }}</div>
    <span class="tablet:mx-2"></span>
    <div class="">{{ subtitle }}</div>
  </div>
</template>

<style scoped></style>
