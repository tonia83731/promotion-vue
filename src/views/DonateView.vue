<script setup>
import TheLink from '../components/element/TheLink.vue';
</script>

<template>
  <main>
    <div class="container">
      <TheLink title="小額捐款" href="/donate" />
      <div class="font-bold text-2xl mt-8 mb-4 desktop:text-[32px]">小額捐款</div>
      <div class="bg-bg-theme-2 rounded-[24px] p-6 grid grid-cols-[1fr_95px] items-center">
        <div class="grid grid-rows-2 gap-4">
          <div class="text-primary-theme font-bold">您的小筆捐款<br>是每隻毛孩未來的大大動力！</div>
          <div>
            <div class="text-sm">目前小額贊助總金額</div>
            <div class="font-bold text-xl">987,655,873</div>
          </div>
        </div>
        <img src="../assets/DonateImg.png" alt="donate-img">
      </div>
      <div class="mt-6">
        <div class="font-bold text-xl">捐款方案</div>
        <div class="grid grid-rows-4 gap-1 my-4">
          <div>
            <input type="radio" class="hidden" name="donate-case" id="cat-friend">
              <label for="cat-friend">
                <div class="donate-label">
                  <div class="text-primary-theme text-xl font-bold">喵星人之友</div>
                  <div class="flex justify-between items-center">
                    <div class="">NT$&#32;<span class="text-2xl font-bold">600</span></div>
                    <div class="text-sm text-text-secondary">已有9,957人贊助</div>
                  </div>
                </div>
              </label>
          </div>
          <div>
            <input type="radio" class="hidden" name="donate-case" id="cat-ambassador">
            <label for="cat-ambassador">
              <div class="donate-label">
                  <div class="text-primary-theme text-xl font-bold">喵星大使</div>
                  <div class="flex justify-between items-center">
                    <div class="">NT$&#32;<span class="text-2xl font-bold">6,000</span></div>
                    <div class="text-sm text-text-secondary">已有2,000人贊助</div>
                  </div>
                </div>
            </label>
          </div>
          <div>
            <input type="radio" class="hidden" name="donate-case" id="cat-legend">
            <label for="cat-legend">
              <div class="donate-label">
                <div class="text-primary-theme text-xl font-bold">喵星傳奇</div>
                <div class="flex justify-between items-center">
                  <div class="">NT$&#32;<span class="text-2xl font-bold">60,000</span></div>
                  <div class="text-sm text-text-secondary">已有999人贊助</div>
                </div>
              </div>
            </label>
          </div>
          <div>
            <input type="radio" class="hidden" name="donate-case" id="cat-random">
            <label for="cat-random" class="">
              <div class="donate-label">
                <div class="text-primary-theme text-xl font-bold">自訂贊助金額</div>
                <div class="bg-gray-100 p-4 mt-2">
                  <label for="auto-donate">
                    NT$
                    <input type="text" class="ml-2.5 bg-gray-100 donate-input" placeholder="輸入金額" id="auto-donate">
                  </label>
                </div>
              </div>
            </label>
          </div>
        </div>
        <button class="bg-primary-theme text-default-white rounded-full w-full px-8 py-6">前往捐款</button>
      </div>
    </div>
  </main>
</template>
<style>
  .donate-label{
    width: 100%;
    border: 2px solid #E2E8F0;
    border-radius: 16px;
    padding: 24px 16px;
    margin-top: 8px;
  }
  input:checked ~ label .donate-label{
    border: 2px solid #334155;
  }
  .donate-input::placeholder{
    color: '#94A3B8';
  }
  .donate-input:focus {
    outline: none;
  }
</style>
