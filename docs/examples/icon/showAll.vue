<script setup lang="ts">
import { useDark } from '@vueuse/core'
import { computed } from 'vue'
import * as solid from '@heroicons/vue/24/solid'

const isDark = useDark({
  storageKey: 'vitepress-theme-appearance'
})

const currentColor = computed(() => {
  return isDark.value ? '#fff' : ''
})
</script>

<template>
  <div class="flex flex-wrap justify-between">
   <div v-for="(iconKey, iconKeyName) in solid" :key="iconKey" class="flex flex-col items-center w-32">
     <div
       class="bg-black:10 flex-grow-0 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20 rounded-md inline-flex justify-center items-center cursor-pointer h-20 w-20 flex-col"
     >
       <component :is="iconKey" class="w-8 h-8" />
     </div>

     <div class="w-11/12 text-xs text-center">
       <p class="line-clamp-1 !mt-0">{{ iconKeyName }}</p>
     </div>
   </div>
  </div>
</template>
