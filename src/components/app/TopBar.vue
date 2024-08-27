<script lang="ts">
import TimerController from '@/components/app/TimerController.vue'
import InputField from '@/components/ui/InputField.vue'

export default {
  name: 'TopBar',
  components: {
    InputField,
    TimerController,
  },
  emits: ['add-task'],
  data() {
    return {
      description: '',
    }
  },
  methods: {
    stopTimer(timer: number) {
      this.$emit('add-task', {
        id: Date.now(),
        description: this.description,
        timer,
      })
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
