<script lang="ts">
import type { PropType } from 'vue'

import type { Task } from '@/types/task'

export default {
  name: 'TaskItem',
  props: {
    task: {
      type: Object as PropType<Task>,
      required: true,
    },
  },
  computed: {
    formattedTimer() {
      return new Date(this.task.timer * 1000).toISOString().substr(11, 8)
    },
  },
}
</script>

<template>
  <div class="flex items-center justify-between gap-3 border-b border-zinc-200 px-4 py-3">
    <p class="text-zinc-800">{{ task.description }}</p>
    <!-- <p class="ml-auto text-zinc-800">09:34 - 10:51</p> -->
    <p class="font-medium text-zinc-800">{{ formattedTimer }}</p>
  </div>
</template>
