<script lang="ts">
import SideBar from '@/components/SideBar.vue'

export default {
  name: 'App',
  components: {
    SideBar,
  },
}
</script>

<template>
  <main class="grid grid-cols-[1fr_4fr]">
    <div>
      <SideBar />
    </div>
    <div>Content</div>
  </main>
</template>
