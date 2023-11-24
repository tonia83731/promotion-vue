<script>
export default {
  props: {
    title: String,
    imageSrc: String
  },
}

</script>

<template>
  <div class="flex flex-col items-center">
    <img :src="imageSrc" alt="footer-icon" class="">
    <div class="font-bold text-base my-2 event-ellipsis-title">{{ title }}</div>
  </div>
</template>

<style scoped>
</style>