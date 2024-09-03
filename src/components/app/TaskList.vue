<script lang="ts">
import type { PropType } from 'vue'

import TaskItem from '@/components/app/TaskItem.vue'
import type { Task } from '@/types/task'

export default {
  name: 'TaskList',
  components: {
    TaskItem,
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
  <article
    v-if="tasks.length > 0"
    class="flex flex-col overflow-hidden rounded-lg bg-background shadow"
  >
    <!-- <header class="rounded-t-lg bg-indigo-200 px-4 py-2 font-semibold text-indigo-900">Today</header> -->
    <TaskItem
      v-for="task in tasks"
      :key="task.id"
      :task="task"
    />
  </article>
  <p
    v-else
    class="px-2 text-muted-foreground"
  >
    Your tasks list is empty!
  </p>
</template>
