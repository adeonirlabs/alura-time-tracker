<script lang="ts">
import TaskList from '@/components/app/TaskList.vue'
import TopBar from '@/components/app/TopBar.vue'
import type { Task } from '@/types/task'

export default {
  name: 'HomePage',
  components: {
    TaskList,
    TopBar,
  },
  data() {
    return {
      tasks: [] as Task[],
    }
  },
  methods: {
    addTask(task: Task) {
      this.tasks.push(task)
    },
  },
}
</script>

<template>
  <TopBar @add-task="addTask" />
  <section class="p-6 pt-0">
    <TaskList :tasks="tasks" />
  </section>
</template>
