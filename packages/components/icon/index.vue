<script setup lang="ts">
// onMounted(() => {
//   // if (typeof window !== 'undefined') {
//   //   import '../../assets/icon/iconfont.js'
//   // } else {
//   //   console.warn('window is undefined')
//   // }
//   console.log("111");
// })

defineOptions({
  name: 'ShIcon'
})

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
