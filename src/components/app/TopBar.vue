<script lang="ts">
import { Play, Square } from 'lucide-vue-next'

import ActionButton from '@/components/ui/ActionButton.vue'
import TimerClock from '@/components/ui/TimerClock.vue'

export default {
  name: 'TopBar',
  components: {
    ActionButton,
    Play,
    Square,
    TimerClock,
  },
  data() {
    return {
      timer: 0,
      interval: 0,
      isRunning: false,
    }
  },
  methods: {
    startTimer() {
      this.isRunning = true
      this.interval = setInterval(() => {
        this.timer++
      }, 1000)
    },
    stopTimer() {
      this.isRunning = false
      clearInterval(this.interval)
    },
  },
}
</script>

<template>
  <header class="w-full p-6">
    <div class="flex items-center gap-8 rounded-lg bg-white p-3 shadow">
      <input
        type="text"
        class="block flex-1 rounded border-0 bg-transparent px-2 py-1 text-zinc-900 outline-none ring-zinc-300 transition-all hover:ring-1 focus:ring-1 focus:ring-indigo-600"
        placeholder="No que você está trabalhando?"
      />
      <TimerClock :timer="timer" />
      <ActionButton v-if="isRunning" variant="secondary" @click="stopTimer">
        <Square :size="16" />
        Parar
      </ActionButton>
      <ActionButton v-else variant="primary" @click="startTimer">
        <Play :size="16" />
        Iniciar
      </ActionButton>
    </div>
  </header>
</template>
