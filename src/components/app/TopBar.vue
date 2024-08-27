<script lang="ts">
import TimerController from '@/components/app/TimerController.vue'
import InputField from '@/components/ui/InputField.vue'

export default {
  name: 'TopBar',
  components: {
    InputField,
    TimerController,
  },
  data() {
    return {
      description: '',
    }
  },
  methods: {
    stopTimer(timer: number) {
      console.log('Timer stopped:', timer)
      console.log('Description:', this.description)
      this.description = ''
    },
  },
}
</script>

<template>
  <header class="w-full p-6">
    <div class="flex items-center gap-8 rounded-lg bg-white p-3 shadow">
      <InputField v-model="description" placeholder="No que você está trabalhando?" />
      <TimerController @stop-timer="stopTimer" />
    </div>
  </header>
</template>
