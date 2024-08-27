<script lang="ts">
export default {
  name: 'InputField',
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      inputValue: this.value,
    }
  },
}
</script>

<template>
  <input
    v-model="inputValue"
    type="text"
    class="block flex-1 rounded border-0 bg-transparent px-2 py-1 text-zinc-900 outline-none ring-zinc-300 transition-all hover:ring-1 focus:ring-1 focus:ring-indigo-600"
    v-bind="$attrs"
  />
</template>
