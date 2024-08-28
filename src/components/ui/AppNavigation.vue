<script lang="ts">
import { FolderGit2, LayoutList } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'

export default {
  name: 'AppNavigation',
  components: {
    FolderGit2,
    LayoutList,
    RouterLink,
  },
}
</script>

<template>
  <nav class="flex flex-1 flex-col">
    <ul role="list" class="-mx-2 space-y-1">
      <RouterLink
        active-class="bg-background/10"
        class="flex items-center gap-2 rounded-lg px-3 py-2 text-foreground hover:bg-background/10"
        to="/"
      >
        <LayoutList :size="16" />Tarefas
      </RouterLink>
      <RouterLink
        active-class="bg-background/10"
        class="flex items-center gap-2 rounded-lg px-3 py-2 text-foreground hover:bg-background/10"
        to="/projects"
      >
        <FolderGit2 :size="16" /> Projetos
      </RouterLink>
    </ul>
  </nav>
</template>
