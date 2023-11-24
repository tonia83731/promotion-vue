<script setup>
import GradientTitle from '../element/GradientTitle.vue';
import TheTag from '../element/TheTag.vue';
import TheName from '../element/TheName.vue';


</script>

<template>
  <section class="bg-bg-theme-2 flex flex-col items-center">
    <div class="flex flex-col desktop:grid desktop:grid-cols-2 container">
      <div class="bg-default-white px-6 py-10 rounded-t-[24px] flex flex-col items-center desktop:rounded-s-[24px] desktop:rounded-tr-none">
         <TheTag 
          tag="ADVOCATE"
          customClass="text-base rounded-[8px] mt-4 mb-3 px-3 py-2"
        />
        <GradientTitle title="候選人主張" customClass="desktop:text-[64px]"/>
        <div class="my-8 text-2xl font-bold desktop:text-[28px]">
          我堅信 ! 藉由推動更完善的<span class="text-primary-theme">貓咪福利</span>
          和相關政策，更是間接地投資於<span class="text-primary-theme">台灣的未來</span>。
        </div>
        <p class="text-base desktop:text-lg">
          畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。<br/>因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。
        </p>
      </div>
      <img src="../../assets/AdvocatePerson.png" alt="advocate-person" class="rounded-b-[24px] desktop:rounded-e-[24px] desktop:rounded-bl-none desktop:h-full">
    </div>
  </section>
</template>

<style scoped></style>
