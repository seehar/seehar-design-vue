<script setup lang="ts">
import { useDark } from '@vueuse/core'
import { computed } from 'vue'

const isDark = useDark({
  storageKey: 'vitepress-theme-appearance'
})

const currentColor = computed(() => {
  return isDark.value ? '#fff' : ''
})
</script>

<template>
  <div class="space-x-3">
    <sh-icon name="mine" class="text-white" size="1rem" :color="currentColor" />
    <sh-icon name="mine" class="text-white" size="20" :color="currentColor" />
  </div>
</template>
