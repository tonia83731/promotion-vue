<script>
export default {
  props: {
    circleClass: String,
    customClass: String,
  },
}

</script>

<template>
  <div class="bg-default-white px-4 py-3 rounded-[16px] flex items-center name-shadow">
    <span
      class="text-2xl font-black bg-gradient rounded-full text-default-white text-center" :class="circleClass">3</span>
    <div class="text-primary-theme font-bold ml-2" :class="customClass">喵立翰&#32;Miao Li-Han</div>
  </div>
</template>

<style scoped>
</style>