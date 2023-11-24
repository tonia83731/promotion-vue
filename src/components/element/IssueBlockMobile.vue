<script>
import TheButton from './TheButton.vue';
export default {
  components: { TheButton },
  props: {
    slogan1: String,
    slogan2: String,
    tag: String,
    imageSrc: String,
  },
}

</script>

<template>
  <div class="bg-default-white rounded-[16px] p-4">
    <div class="tablet:grid tablet:grid-cols-[60%_40%] tablet:gap-8 tablet:items-center">
      <img :src="imageSrc" alt="donate-section" class="rounded-[24px] w-full object-cover" />
      <div>
        <p class="bg-bg-theme-2 mt-6 mb-4 px-3 py-1 inline-block text-sm rounded-[32px] ">{{ tag }}</p>
        <div class="mt-4 mb-10">
          <div class="text-xl font-bold">{{ slogan1 }}</div>
          <div class="text-xl font-bold">{{ slogan2 }}</div>
        </div>
        <TheButton btnText="查看" btnClass="bg-primary-theme text-default-white"/>
      </div>
    </div>
  </div>
</template>

<style scoped></style>