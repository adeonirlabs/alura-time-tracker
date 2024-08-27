<script lang="ts">
import AppLogo from '@/components/ui/AppLogo.vue'

export default {
  name: 'SideBar',
  components: {
    AppLogo,
  },
}
</script>

<template>
  <aside class="h-auto w-full bg-indigo-900 p-6 md:h-screen">
    <h1 class="overflow-hidden rounded-lg shadow">
      <AppLogo />
    </h1>
  </aside>
</template>
