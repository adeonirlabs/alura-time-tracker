<script lang="ts">
import type { ClassValue } from 'clsx'
import type { PropType } from 'vue'

import { cn } from '@/utils/classname'

export default {
  name: 'ActionButton',
  props: {
    variant: {
      type: String as PropType<'primary' | 'secondary' | 'destructive'>,
      required: true,
    },
  },
  computed: {
    buttonVariants() {
      return cn(
        'flex items-center justify-center gap-2 text-nowrap rounded p-2 text-sm font-medium',
        'shadow-sm transition-all focus-visible:outline focus-visible:outline-2',
        'focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-70',
        {
          'bg-primary text-primary-foreground enabled:hover:bg-primary/90': this.variant === 'primary',
          'bg-secondary text-secondary-foreground ring-1 ring-inset ring-secondary-foreground hover:bg-secondary/50':
            this.variant === 'secondary',
          'bg-destructive text-destructive-foreground enabled:hover:bg-destructive/90': this.variant === 'destructive',
        },
        this.$attrs.class as ClassValue,
      )
    },
  },
}
</script>

<template>
  <button
    :class="buttonVariants"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>
