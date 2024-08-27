<script lang="ts">
export default {
  name: 'TimerClock',
  props: {
    timer: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  computed: {
    formattedTimer() {
      return new Date(this.timer * 1000).toISOString().substr(11, 8)
    },
  },
}
</script>

<template>
  <p class="w-[68px] font-medium text-foreground">{{ formattedTimer }}</p>
</template>
