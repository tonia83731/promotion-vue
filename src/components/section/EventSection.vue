<script setup>
import GradientTitle from '../element/GradientTitle.vue';
import TheTag from '../element/TheTag.vue';
import TheEventElement from '../element/TheEventElement.vue';
import TheButton from '../element/TheButton.vue';

</script>

<template>
  <section class="flex flex-col items-center" id="news">
    <div class="flex flex-col items-center container">
      <TheTag 
        tag="LATEST EVENTS"
        customClass="text-base rounded-[8px] mt-4 mb-3 px-3 py-2"
      />
      <GradientTitle title="最新活動" customClass="desktop:text-[64px]"/>
      <div class="desktop:grid desktop:grid-cols-2 desktop:gap-6 desktop:mt-16">
        <div class="mt-10 desktop:mt-0">
          <img src="../../assets/MainEventImg.png" alt="main-event" class="rounded-[16px] w-full h-[300px] object-cover desktop:h-[350px]">
          <p class="text-[14px] text-text-secondary mt-4">2023/12/26</p>
          <div class="font-bold text-xl my-2">參與台北寵物論壇，爭取貓咪友善環境</div>
          <p class="text-base desktop:text-lg">炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。</p>
        </div>
        <div class="">
          <div class="my-6 grid grid-rows-3 gap-4 w-full desktop:mt-0">
            <TheEventElement 
              imageSrc="/src/assets/EventImg1.png"
              date="2023/12/24"
              title="掃街模式開啟！帶著你的貓耳，來和我一起走！"
              text="街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！"
            />
            <TheEventElement 
              imageSrc="/src/assets/EventImg2.png"
              date="2023/12/20"
              title="收容所模特兒大比拼！"
              text="今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！"
            />
            <TheEventElement 
              imageSrc="/src/assets/MainEventImg.png"
              date="2023/12/26"
              title="參與台北寵物論壇，爭取貓咪友善環境"
              text="炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！"
            />
          </div>
          <div class="w-full">
            <TheButton btnText="查看更多" btnClass="bg-gray-100"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
