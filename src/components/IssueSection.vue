<script setup>
import IssueBlock from './IssueBlock.vue';
import GradientTitle from './GradientTitle.vue';

</script>

<template>
  <section class="">
    <div class="bg-text-primary text-default-white font-bold px-3 py-2 rounded-lg">POLICY ISSUES</div>
    <GradientTitle title="政策議題" />
    <div class="">
      <IssueBlock 
        slogan="為毛孩子謀福利！
推動寵物醫療保障方案" 
        imageSrc="/src/assets/PetMedicalAds.png"
     />
     <IssueBlock 
          slogan="打造休閒天堂！
推廣寵物休閒與娛樂場所" 
          imageSrc="/src/assets/PetEntertainAds.png"
       />
       <IssueBlock 
          slogan="推廣寵物飼養教育，讓愛更加專業" 
          imageSrc="/src/assets/PetPromoteAds.png"
       />
    </div>
  </section>
</template>

<style scoped></style>
