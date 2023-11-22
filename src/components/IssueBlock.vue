<script>
export default {
  props: {
    slogan: String,
    imageSrc: String,
  },
}

</script>

<template>
  <div class="">
    <div class="text-xl font-semibold">{{ slogan }}</div>
    <img :src="imageSrc" alt="donate-section" class="rounded-[24px]" />
  </div>
</template>

<style scoped></style>