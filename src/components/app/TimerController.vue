<script lang="ts">
import { Play, Square } from 'lucide-vue-next'

import TimerClock from '@/components/app/TimerClock.vue'
import ActionButton from '@/components/ui/ActionButton.vue'

export default {
  name: 'TimerController',
  components: {
    ActionButton,
    Play,
    Square,
    TimerClock,
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['stop-timer'],
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
      this.$emit('stop-timer', this.timer)
      this.timer = 0
      this.isRunning = false
      clearInterval(this.interval)
    },
  },
}
</script>

<template>
  <TimerClock :timer="timer" />
  <ActionButton
    v-if="isRunning"
    class="w-24"
    variant="destructive"
    :disabled="disabled"
    @click="stopTimer"
  >
    <Square :size="16" />
    Parar
  </ActionButton>
  <ActionButton
    v-else
    class="w-24"
    variant="primary"
    @click="startTimer"
  >
    <Play :size="16" />
    Iniciar
  </ActionButton>
</template>
