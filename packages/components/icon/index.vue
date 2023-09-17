<script lang="ts">
export default {
  name: 'ShIcon'
}
</script>

<script setup lang="ts">
import '../../assets/icon/iconfont.js'

withDefaults(
  defineProps<{
    name: string
    size: number | string
    color?: string
  }>(),
  {}
)
</script>

<template>
  <svg class="inline-block" aria-hidden="true" :width="size" :height="size">
    <use :xlink:href="`#icon-${name}`" :fill="color"></use>
  </svg>
</template>
