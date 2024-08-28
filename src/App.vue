<script lang="ts">
import { RouterView } from 'vue-router'

import SideBar from '@/components/app/SideBar.vue'

export default {
  name: 'App',
  components: {
    RouterView,
    SideBar,
  },
  methods: {
    toggleTheme() {
      const root = document.documentElement

      root.classList.add('no-transition')
      root.classList.toggle('dark')
      setTimeout(() => {
        root.classList.remove('no-transition')
      }, 0)
    },
  },
}
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-[16rem_1fr]">
    <SideBar @toggle-dark-mode="toggleTheme" />
    <main class="bg-muted">
      <RouterView />
    </main>
  </div>
</template>

<style>
.no-transition * {
  transition: none !important;
}
</style>
