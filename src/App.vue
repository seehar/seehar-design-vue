<template>
  <div class="bg-white dark:bg-slate-900 text-center dark:text-white/80 px-10">
    <h2>Seehar Design Vue</h2>
    <a class="cursor-pointer" @click="toggleDark()">{{ isDark }}</a>
    <hr style="margin: 32px 100px" />

    <img alt="seehar_design_vue" src="/favicon.png" title="seehar_design_vue" />

    <sh-card class="space-x-2 flex">
      <h1 class="dark:text-white/80">按钮</h1>
      <sh-button>default</sh-button>
      <sh-button variant="primary">primary</sh-button>
      <sh-button variant="danger">danger</sh-button>
      <sh-button variant="success">success</sh-button>
      <sh-button variant="warning">warning</sh-button>
      <sh-button variant="info">info</sh-button>
    </sh-card>

    <div class="my-4">
      <div class="h-14 bg-gradient-to-r from-cyan-500 to-blue-500">22</div>
      <div class="bg-gradient-to-r from-primary">333</div>
    </div>

    <div class="text-primary">文字</div>
    <div class="text-primary/20">文字</div>
    <div class="text-secondary">文字</div>
    <div class="text-secondary/90">文字</div>
    <div class="text-black/20">文字</div>

    <demo />
  </div>
</template>

<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core'
import demo from './demo.tsx'

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
