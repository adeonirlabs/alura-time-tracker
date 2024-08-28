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
  <div class="flex flex-col gap-6 p-6">
    <TopBar @add-task="addTask" />
    <section>
      <TaskList :tasks="tasks" />
    </section>
  </div>
</template>
