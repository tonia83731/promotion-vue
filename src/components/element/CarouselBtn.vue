<script>


</script>

<template>
  <div class="my-6 flex justify-center">
    <button class="bg-default-white w-10 h-10 rounded-full text-2xl text-primary-theme">
      <i class="fa-solid fa-arrow-left"></i>
    </button>
    <button class="ml-4"><div class="w-3 h-3 rounded-full bg-primary-theme carousel-btn"></div></button>
    <button class="mx-4"><div class="w-3 h-3 rounded-full bg-primary-theme carousel-btn action"></div></button>
    <button class="mr-4"><div class="w-3 h-3 rounded-full bg-primary-theme carousel-btn"></div></button>
    <button class="bg-default-white w-10 h-10 rounded-full text-2xl text-primary-theme">
      <i class="fa-solid fa-arrow-right"></i>
    </button>
  </div>
</template>

<style scoped>
  .carousel-btn{
    opacity: 0.4;
  }
  .carousel-btn.action{
    opacity: 1;
  }
</style>
