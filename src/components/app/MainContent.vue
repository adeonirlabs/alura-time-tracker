<script lang="ts">
import type { PropType } from 'vue'

import TaskList from '@/components/app/TaskList.vue'
import type { Task } from '@/types/task'

export default {
  name: 'MainContent',
  components: {
    TaskList,
  },
  props: {
    tasks: {
      type: Array as PropType<Task[]>,
      required: true,
    },
  },
}
</script>

<template>
  <section class="p-6 pt-0">
    <TaskList :tasks="tasks" />
  </section>
</template>
