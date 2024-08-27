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
    class="block flex-1 rounded border-0 bg-transparent px-2 py-1 text-zinc-900 outline-none ring-zinc-300 transition-all hover:ring-1 focus:ring-1 focus:ring-indigo-600"
    v-bind="$attrs"
  />
</template>
