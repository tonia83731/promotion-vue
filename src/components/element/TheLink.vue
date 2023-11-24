<script>
export default {
  props: {
    title: String,
    href: String,
  },
}

</script>

<template>
  <div class="text-[14px] text-text-secondary">
    <a href="/#donate-and-mail" class="underline underline-offset-2">首頁</a>
    <span class="mx-2">
      <i class="fa-solid fa-angle-right"></i>
    </span>
    <a :href="href" class="underline underline-offset-2">{{ title }}</a>
  </div>
</template>

<style scoped></style>