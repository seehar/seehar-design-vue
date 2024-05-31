<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core'
import demo from './demo'
import ShButton from '../packages/components/button/button'

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

<template>
  <div class="bg-white dark:bg-zinc-900 dark:text-white/80 px-10">
    <div class="text-right py-4">
      <span class="cursor-pointer" @click="toggleDark()">{{ isDark ? '黑暗' : '明亮' }}</span>
    </div>

    <div class="flex justify-center items-center py-4">
      <img alt="seehar_design_vue" src="/favicon.png" title="seehar_design_vue" class="w-12" />
      <h2 class="text-2xl ml-4 font-bold">Seehar Design Vue</h2>
    </div>

    <div class="grid grid-cols-2">
      <sh-card class="space-y-3">
        <h1 class="dark:text-white/80">按钮</h1>
        <div class="space-x-2">
          <sh-button>default</sh-button>
          <sh-button variant="primary">primary</sh-button>
          <sh-button variant="danger">danger</sh-button>
          <sh-button variant="success">success</sh-button>
          <sh-button variant="warning">warning</sh-button>
          <sh-button variant="info">info</sh-button>
        </div>

        <div class="space-x-2">
          <sh-button disabled>default</sh-button>
          <sh-button disabled variant="primary">primary</sh-button>
          <sh-button disabled variant="danger">danger</sh-button>
          <sh-button disabled variant="success">success</sh-button>
          <sh-button disabled variant="warning">warning</sh-button>
          <sh-button disabled variant="info">info</sh-button>
        </div>

        <div class="space-x-2">
          <sh-button outlined>default</sh-button>
          <sh-button outlined variant="primary">primary</sh-button>
          <sh-button outlined variant="danger">danger</sh-button>
          <sh-button outlined variant="success">success</sh-button>
          <sh-button outlined variant="warning">warning</sh-button>
          <sh-button outlined variant="info">info</sh-button>
        </div>

        <div class="space-x-2">
          <sh-button variant="text">default</sh-button>
          <sh-button variant="primary-text">primary</sh-button>
          <sh-button variant="danger-text">danger</sh-button>
          <sh-button variant="success-text">success</sh-button>
          <sh-button variant="warning-text">warning</sh-button>
          <sh-button variant="info-text">info</sh-button>
        </div>
      </sh-card>
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

    <demo />
  </div>
</template>
