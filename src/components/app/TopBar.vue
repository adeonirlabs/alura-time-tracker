<script lang="ts">
import { Play, Square } from 'lucide-vue-next'

import ActionButton from '@/components/ui/ActionButton.vue'

export default {
  name: 'TopBar',
  components: {
    ActionButton,
    Play,
    Square,
  },
}
</script>

<template>
  <header class="w-full p-6">
    <div class="flex items-center gap-8 rounded-lg bg-white p-3 shadow">
      <input
        type="text"
        class="block flex-1 rounded border-0 bg-transparent px-2 py-1 text-zinc-900 outline-none ring-zinc-300 transition-all hover:ring-1 focus:ring-1 focus:ring-indigo-600"
        placeholder="No que você está trabalhando?"
      />
      <strong class="font-medium text-zinc-800">00:00:00</strong>
      <ActionButton variant="primary">
        <Play :size="16" />
        Iniciar
      </ActionButton>
      <ActionButton variant="secondary">
        <Square :size="16" />
        Parar
      </ActionButton>
    </div>
  </header>
</template>
