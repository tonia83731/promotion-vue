<script>
export default {
  props: {
    date: String,
    title: String,
    text: String,
    imageSrc: String
  },
}

</script>

<template>
  <div class="grid grid-cols-[110px_1fr] gap-4 desktop:grid-cols-[200px_1fr]">
    <img :src="imageSrc" alt="event-img" class="rounded-[8px] desktop:h-[135px] desktop:w-full desktop:object-cover">
    <div class="w-full">
      <p class="text-[14px] text-text-secondary">{{ date }}</p>
      <div class="font-bold text-base my-2 event-ellipsis-title">{{ title }}</div>
      <p class="text-[14px] event-ellipsis">{{ text }}</p>
    </div>
  </div>
</template>

<style scoped>
  .event-ellipsis{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .event-ellipsis-title{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
</style>