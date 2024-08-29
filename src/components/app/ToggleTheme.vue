<script lang="ts">
import { Moon, Sun } from 'lucide-vue-next'

export default {
  name: 'ToggleTheme',
  components: {
    Moon,
    Sun,
  },
  emits: ['toggleTheme'],
  data() {
    return {
      isDarkMode: false,
    }
  },
  methods: {
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode
      this.$emit('toggleTheme')
    },
  },
}
</script>

<template>
  <button v-if="isDarkMode" class="text-foreground" title="Mudar para o tema escuro" @click="toggleTheme">
    <Sun />
  </button>
  <button v-else class="text-foreground/70" title="Mudar para o tema claro" @click="toggleTheme">
    <Moon />
  </button>
</template>
