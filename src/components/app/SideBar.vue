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
  <aside class="h-auto w-full border-r border-accent-foreground/10 bg-accent p-6 md:h-screen">
    <h1 class="overflow-hidden rounded-lg shadow-lg">
      <AppLogo />
    </h1>
  </aside>
</template>
