<script>
export default {
  props: {
    title: String,
    imageSrc: String,
    href: String
  },
}

</script>

<template>
  <div>
    <a :href=href class="flex flex-col items-center justify-center">
      <img :src="imageSrc" alt="footer-icon" class="">
      <div class="font-bold text-base my-2 event-ellipsis-title">{{ title }}</div>
    </a>
  </div>
</template>

<style scoped>
</style>