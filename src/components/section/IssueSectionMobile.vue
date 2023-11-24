<script setup>
import IssueBlockMobile from '../element/IssueBlockMobile.vue';
import GradientTitle from '../element/GradientTitle.vue';
import TheTag from '../element/TheTag.vue';
import CarouselBtn from '../element/CarouselBtn.vue';

</script>

<template>
  <section class="bg-bg-theme-2 desktop:hidden" id="issues2">
    <div class="container">
      <div class="py-5 flex flex-col items-center">
        <TheTag 
          tag="POLICY ISSUES"
          customClass="text-base rounded-[8px] mt-4 mb-3 px-3 py-2"
        />
        <GradientTitle title="政策議題" customClass="desktop:text-[64px]"/>
      </div>
      <div class="mt-16">
        <IssueBlockMobile
          tag="喵的保障"
          slogan1="為毛孩子謀福利！"
          slogan2="推動寵物醫療保障方案"
          imageSrc="/src/assets/PetMedicalAds.png"
        />
        <!-- <IssueBlockMobile
          tag="喵的福利"
          slogan1="打造休閒天堂！"
          slogan2="推廣寵物休閒與娛樂場所"
          imageSrc="/src/assets/PetEntertainAds.png"
        />
        <IssueBlockMobile
          tag="喵的教育"
          slogan1="推廣寵物飼養教育，讓愛更加專業"
          imageSrc="/src/assets/PetPromoteAds.png"
        /> -->
      </div>
      <CarouselBtn />
    </div>
  </section>
</template>

<style scoped></style>
