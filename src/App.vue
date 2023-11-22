<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import HomeView from './views/HomeView.vue';

</script>

<template>
  <!-- <TheHeader /> -->
  <HomeView />
  <TheFooter />

  <!-- <RouterView /> -->
</template>

<style scoped>

</style>
