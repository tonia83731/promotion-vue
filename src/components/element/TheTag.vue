<script>
export default {
  props: {
    customClass: String,
    tag: String,
  },
}

</script>

<template>
  <div class="bg-text-primary text-default-white font-bold inline-block" :class="customClass">{{ tag }}</div>
</template>

<style scoped></style>