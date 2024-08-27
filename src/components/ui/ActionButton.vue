<script lang="ts">
import type { PropType } from 'vue'

export default {
  name: 'ActionButton',
  props: {
    variant: {
      type: String as PropType<'primary' | 'secondary'>,
      required: true,
    },
  },
  computed: {
    buttonClass() {
      return {
        'bg-primary text-primary-foreground hover:not:disabled:bg-primary/90 focus-visible:outline-primary':
          this.variant === 'primary',
        'bg-destructive text-destructive-foreground hover:not:disabled:bg-destructive/90 focus-visible:outline-destructive':
          this.variant === 'secondary',
      }
    },
  },
}
</script>

<template>
  <button
    :class="buttonClass"
    class="flex w-24 items-center justify-center gap-2 rounded p-2 text-sm font-medium shadow-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>
