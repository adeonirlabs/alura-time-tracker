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
        'bg-indigo-600 hover:not:disabled:bg-indigo-700 focus-visible:outline-indigo-600': this.variant === 'primary',
        'bg-red-600 hover:not:disabled:bg-red-700 focus-visible:outline-red-600': this.variant === 'secondary',
      }
    },
  },
}
</script>

<template>
  <button
    :class="buttonClass"
    class="flex w-24 items-center justify-center gap-2 rounded p-2 text-sm font-medium text-white shadow-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>
