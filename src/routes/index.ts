import { createMemoryHistory, createRouter, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = []

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
