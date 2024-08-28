<script lang="ts">
import AppLogo from '@/components/ui/AppLogo.vue'
import ToggleTheme from '@/components/ui/ToggleTheme.vue'

export default {
  name: 'SideBar',
  components: {
    AppLogo,
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
    <h1 class="overflow-hidden rounded-lg shadow-lg">
      <AppLogo />
    </h1>
    <footer>
      <ToggleTheme @toggle-theme="toggleTheme" />
    </footer>
  </aside>
</template>
