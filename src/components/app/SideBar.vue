<script lang="ts">
import MainNavigation from '@/components/app/MainNavigation.vue'
import ToggleTheme from '@/components/app/ToggleTheme.vue'
import AppLogo from '@/components/ui/AppLogo.vue'

export default {
  name: 'SideBar',
  components: {
    AppLogo,
    MainNavigation,
    ToggleTheme,
  },
  emits: ['toggle-theme'],
  methods: {
    toggleTheme() {
      this.$emit('toggle-theme')
    },
  },
}
</script>

<template>
  <aside
    class="flex h-auto w-full flex-col justify-between border-r border-accent-foreground/10 bg-accent p-6 md:h-screen"
  >
    <header class="flex flex-col gap-8">
      <h1 class="overflow-hidden rounded-lg shadow-lg">
        <AppLogo aria-label="Time Tracker" />
      </h1>
      <MainNavigation />
    </header>
    <footer>
      <ToggleTheme @toggle-theme="toggleTheme" />
    </footer>
  </aside>
</template>
