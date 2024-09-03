<script lang="ts">
import ActionButton from '../components/ui/ActionButton.vue'

export default {
  name: 'ProjectsPage',
  components: {
    ActionButton,
  },
}
</script>

<template>
  <section class="p-6">
    <header class="flex items-center justify-between">
      <h1 class="text-3xl text-muted-foreground">Projects</h1>
      <ActionButton variant="secondary">Criar novo projeto</ActionButton>
    </header>
  </section>
</template>
