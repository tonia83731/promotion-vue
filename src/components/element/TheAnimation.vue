<script>
export default {
  props: {
    btnText: String,
    btnClass: String,
  },
}

</script>

<template>
  <div class="bg-primary-theme text-default-white py-2.5 text-[40px] font-mantou w-full marquee-container desktop:text-[64px]">
    <p class="marquee tracking-[2px] leading-[105%]">從喵的眼中，看見台灣!&#32;&#32;從喵的眼中，看見台灣!&#32;&#32;從喵的眼中，看見台灣!</p>
  </div>
</template>

<style scoped>
  .marquee-container{
    overflow: hidden;
    white-space: nowrap;
    box-sizing: border-box;
  }
  .marquee {
    display: inline-block;
    animation: marquee 30s linear infinite;
  }
  @keyframes marquee {
      0% {
        transform: translateX(100%);
      }

      100% {
        transform: translateX(-100%);
      }
    }
</style>