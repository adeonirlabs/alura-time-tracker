import { createMemoryHistory, createRouter, type RouteRecordRaw } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'

const routes: RouteRecordRaw[] = [{ path: '/', name: 'Home', component: HomePage }]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
