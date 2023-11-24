import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/donate',
      name: 'donate',
      component: () => import('../views/DonateView.vue')
    },
    {
      path: '/mail',
      name: 'mail',
      component: () => import('../views/MailView.vue')
    }
  ]
})

export default router
