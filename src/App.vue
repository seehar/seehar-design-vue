<template>
  <div class="bg-white dark:bg-slate-900 h-screen">
    <h2>Seehar Design Vue</h2>
    <a class="cursor-pointer" @click="toggleDark()">{{ isDark }}</a>
    <hr style="margin: 32px 100px" />

    <img alt="seehar_design_vue" src="/favicon.png" title="seehar_design_vue"/>

    <div class="space-x-2">
      <h1 class="dark:text-white/80">按钮</h1>
      <sh-button type="default">default</sh-button>
      <sh-button>default</sh-button>
      <sh-button type="primary">primary</sh-button>
    </div>

    <div class="my-4">
      <div class="h-14 bg-gradient-to-r from-cyan-500 to-blue-500">22</div>
      <div class="bg-gradient-to-r from-primary">333</div>
    </div>

    <div class="text-primary">文字</div>
    <div class="text-secondary">文字</div>
  </div>
</template>

<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

withDefaults(
  defineProps<{
    size?: number
    labels?: string[]
  }>(),
  {
    size: 3,
    labels: () => ['default label']
  }
)
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
