<script lang="ts">
import MainContent from '@/components/app/MainContent.vue'
import SideBar from '@/components/app/SideBar.vue'
import TopBar from '@/components/app/TopBar.vue'

export default {
  name: 'App',
  components: {
    MainContent,
    SideBar,
    TopBar,
  },
}
</script>

<template>
  <main class="grid grid-cols-1 md:grid-cols-[16rem_1fr]">
    <SideBar />
    <div class="bg-zinc-200">
      <TopBar />
      <MainContent />
    </div>
  </main>
</template>
