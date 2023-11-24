<script>
export default {
  props: {
    slogan1: String,
    slogan2: String,
    imageSrc: String,
  },
}

</script>

<template>
  <div class="">
    <div class="text-xl font-semibold mb-4 h-[60px]">{{ slogan1 }}<br>{{ slogan2 }}</div>
    <img :src="imageSrc" alt="donate-section" class="rounded-[16px]" />
  </div>
</template>

<style scoped></style>