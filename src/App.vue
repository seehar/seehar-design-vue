<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core'
import demo from './demo'
import ShButton from '../packages/components/button/button'
import ShCard from '../packages/components/card/card'
import * as solid from '@heroicons/vue/24/solid'

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
  <div class="bg-white dark:bg-zinc-900 dark:text-white/80 px-10 min-h-screen">
    <div class="text-right py-4">
      <span class="cursor-pointer" @click="toggleDark()">{{ isDark ? '黑暗' : '明亮' }}</span>
    </div>

    <div class="flex justify-center items-center py-4">
      <img alt="favicon" src="/favicon.png" title="favicon" class="w-12" />
      <h2 class="text-2xl ml-4 font-bold">Seehar Design Vue</h2>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <sh-card class="space-y-3" :shadow="true" title="按钮">
        <!--        <h1 class="dark:text-white/80">按钮</h1>-->
        <div class="space-x-3">
          <sh-button>default</sh-button>
          <sh-button type="primary">primary</sh-button>
          <sh-button type="danger">danger</sh-button>
          <sh-button type="success">success</sh-button>
          <sh-button type="warning" size="large">warning</sh-button>
          <sh-button type="info">info</sh-button>
        </div>

        <div class="space-x-3">
          <sh-button round>default</sh-button>
          <sh-button round type="primary">primary</sh-button>
          <sh-button round type="danger">danger</sh-button>
          <sh-button round type="success">success</sh-button>
          <sh-button round type="warning" size="large">warning</sh-button>
          <sh-button round type="info">info</sh-button>
        </div>

        <div class="space-x-3">
          <sh-button disabled>default</sh-button>
          <sh-button disabled type="primary">primary</sh-button>
          <sh-button disabled type="danger">danger</sh-button>
          <sh-button disabled type="success">success</sh-button>
          <sh-button disabled type="warning">warning</sh-button>
          <sh-button disabled type="info">info</sh-button>
        </div>

        <div class="space-x-3">
          <sh-button outlined>default</sh-button>
          <sh-button outlined type="primary">primary</sh-button>
          <sh-button outlined type="danger">danger</sh-button>
          <sh-button outlined type="success">success</sh-button>
          <sh-button outlined type="warning">warning</sh-button>
          <sh-button outlined type="info">info</sh-button>
        </div>

        <div class="space-x-3">
          <sh-button type="text">default</sh-button>
          <sh-button type="primary-text">primary</sh-button>
          <sh-button type="danger-text">danger</sh-button>
          <sh-button type="success-text">success</sh-button>
          <sh-button type="warning-text">warning</sh-button>
          <sh-button type="info-text">info</sh-button>
        </div>
      </sh-card>

      <sh-card title="icon">
        <div class="flex flex-wrap space-y-1 space-x-1">
          <template v-for="iconKey in solid" :key="iconKey">
            <component :is="iconKey" class="w-10 h-10" />
          </template>
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
