<script lang="ts">
import MainContent from '@/components/app/MainContent.vue'
import SideBar from '@/components/app/SideBar.vue'
import TopBar from '@/components/app/TopBar.vue'
import type { Task } from '@/types/task'

export default {
  name: 'App',
  components: {
    MainContent,
    SideBar,
    TopBar,
  },
  data() {
    return {
      tasks: [] as Array<Task>,
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
  <main class="grid grid-cols-1 md:grid-cols-[16rem_1fr]">
    <SideBar />
    <div class="bg-muted">
      <TopBar @add-task="addTask" />
      <MainContent :tasks="tasks" />
    </div>
  </main>
</template>
