<script setup>
import IssueBlock from '../element/IssueBlock.vue';
import GradientTitle from '../element/GradientTitle.vue';
import TheTag from '../element/TheTag.vue';

</script>

<template>
  <section class="hidden desktop:block" id="issues">
    <div class="container">
      <div class="py-5 flex flex-col items-center">
        <TheTag 
          tag="POLICY ISSUES"
          customClass="text-base rounded-[8px] mt-4 mb-3 px-3 py-2"
        />
        <GradientTitle title="政策議題" customClass="desktop:text-[64px]"/>
      </div>
      <div class="mt-10 auto-fit">
        <IssueBlock 
          slogan1="為毛孩子謀福利！"
          slogan2="推動寵物醫療保障方案"
          imageSrc="/src/assets/PetMedicalAds.png"
       />
       <IssueBlock 
          slogan1="打造休閒天堂！"
          slogan2="推廣寵物休閒與娛樂場所" 
          imageSrc="/src/assets/PetEntertainAds.png"
         />
        <IssueBlock 
          slogan1="推廣寵物飼養教育，讓愛更加專業" 
          slogan2=""
          imageSrc="/src/assets/PetPromoteAds.png"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
  .auto-fit{
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(300px, 1fr) );
    gap: 64px 16px;
  }
</style>
