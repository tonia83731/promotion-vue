<script>
export default {
  props: {
    btnText: String,
    btnClass: String,
  },
}

</script>

<template>
  <button class="rounded-full px-6 py-4 text-base font-bold" :class="btnClass">
    {{ btnText }}
    <i class="fa-solid fa-arrow-right ml-2"></i>
  </button>
</template>

<style scoped></style>