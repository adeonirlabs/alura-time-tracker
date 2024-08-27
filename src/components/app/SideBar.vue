<script lang="ts">
import { Moon, Sun } from 'lucide-vue-next'

import AppLogo from '@/components/ui/AppLogo.vue'

export default {
  name: 'SideBar',
  components: {
    AppLogo,
    Moon,
    Sun,
  },
  emits: ['toggleDarkMode'],
  data() {
    return {
      isDarkMode: false,
    }
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode
      this.$emit('toggleDarkMode')
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
    <button v-if="isDarkMode" class="text-foreground" title="Mudar para o tema escuro" @click="toggleDarkMode">
      <Sun />
    </button>
    <button v-else class="text-background" title="Mudar para o tema claro" @click="toggleDarkMode"><Moon /></button>
  </aside>
</template>
