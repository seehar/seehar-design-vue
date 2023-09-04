<template>
  <div class="bg-white dark:bg-slate-900 text-center dark:text-white/80">
    <h2>Seehar Design Vue</h2>
    <a class="cursor-pointer" @click="toggleDark()">{{ isDark }}</a>
    <hr style="margin: 32px 100px" />

    <img alt="seehar_design_vue" src="/favicon.png" title="seehar_design_vue" />

    <div class="space-x-2">
      <h1 class="dark:text-white/80">按钮</h1>
      <sh-button>default</sh-button>
      <sh-button type="primary">primary</sh-button>
      <sh-button type="danger">danger</sh-button>
      <sh-button type="success">success</sh-button>
      <sh-button type="warning">warning</sh-button>
      <sh-button type="info">info</sh-button>
    </div>

    <div class="my-4">
      <div class="h-14 bg-gradient-to-r from-cyan-500 to-blue-500">22</div>
      <div class="bg-gradient-to-r from-primary">333</div>
    </div>

    <div class="text-primary">文字</div>
    <div class="text-primary/20">文字</div>
    <div class="text-secondary">文字</div>
    <div class="text-secondary/90">文字</div>
    <div class="text-black/20">文字</div>
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
