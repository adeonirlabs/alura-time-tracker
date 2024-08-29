import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import ProjectsPage from '@/pages/ProjectsPage.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', component: HomePage },
  { path: '/projects', component: ProjectsPage },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
