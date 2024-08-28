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
  computed: {
    isDescriptionEmpty() {
      return this.description.trim() === ''
    },
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
  <header class="w-full">
    <div class="flex items-center gap-8 rounded-lg bg-background p-3 shadow">
      <InputField v-model="description" placeholder="No que você está trabalhando?" />
      <TimerController :disabled="isDescriptionEmpty" @stop-timer="stopTimer" />
    </div>
  </header>
</template>
