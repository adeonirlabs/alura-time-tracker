<script lang="ts">
import TaskItem from '@/components/ui/TaskItem.vue'

export default {
  name: 'TaskList',
  components: {
    TaskItem,
  },
}
</script>

<template>
  <article class="flex flex-col rounded-lg bg-white shadow">
    <!-- <header class="rounded-t-lg bg-indigo-200 px-4 py-2 font-semibold text-indigo-900">Today</header> -->
    <TaskItem />
    <TaskItem />
  </article>
</template>
