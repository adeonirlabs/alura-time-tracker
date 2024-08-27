<script lang="ts">
export default {
  name: 'InputField',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
  },
  emits: ['update:modelValue'],
  computed: {
    value: {
      get() {
        return this.modelValue
      },
      set(value: string) {
        this.$emit('update:modelValue', value)
      },
    },
  },
}
</script>

<template>
  <input
    v-model="value"
    type="text"
    class="block flex-1 rounded border-0 bg-background px-2 py-1 text-foreground outline-none ring-muted transition-all hover:ring-1 focus:ring-1 focus:ring-ring"
    v-bind="$attrs"
  />
</template>
