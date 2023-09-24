<script setup lang="ts">
import { useDark } from '@vueuse/core'
import { computed } from 'vue'

const isDark = useDark({
  storageKey: 'vitepress-theme-appearance'
})

const currentColor = computed(() => {
  return isDark.value ? '#fff' : ''
})

const iconSymbolArray = [
  'location',
  'notebook',
  'mine',
  'setting',
  'star',
  'close',
  'arrowRight',
  'arrowDown',
  'arrowLeft',
  'arrawUp',
  'circlePlus',
  'circleMinus'
]
</script>

<template>
  <div class="flex flex-wrap">
    <div
      class="bg-black:10 hover:bg-black/20 mr-4 mb-4 dark:bg-white/10 dark:hover:bg-white/20 rounded-md inline-flex justify-center items-center cursor-pointer h-20 w-20 flex-col"
      v-for="symbol in iconSymbolArray"
      :key="symbol"
    >
      <sh-icon :name="symbol" class="text-white" size="2rem" :color="currentColor" />
      <span class="text-xs mt-1">{{ symbol }}</span>
    </div>
  </div>
</template>
