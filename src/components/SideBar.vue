<script lang="ts">
import AppLogo from '@/components/AppLogo.vue'

export default {
  name: 'SideBar',
  components: {
    AppLogo,
  },
}
</script>

<template>
  <header class="bg-indigo-900 h-auto md:h-screen w-full p-10 md:p-4">
    <h1>
      <AppLogo />
    </h1>
  </header>
</template>
