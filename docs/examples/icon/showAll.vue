<script setup lang="ts">
import {useDark} from "@vueuse/core/index";
import {computed} from "vue";

const isDark = useDark({
  storageKey: "vitepress-theme-appearance"
})

const currentColor = computed(() => {
  return isDark.value ? '#fff' : ''
})
</script>

<template>
  <div class="grid">
    <div class="bg-black:20 dark:bg-white/20 rounded-md flex justify-center items-center cursor-pointer h-20 w-20">
      <sh-icon name="wode" class="text-white" size="2rem" :color="currentColor" />
    </div>
  </div>
</template>
