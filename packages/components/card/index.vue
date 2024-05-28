<script setup lang="ts">
import { SHCardProps } from './type'
import { computed } from 'vue'
import { useVariants } from '../../hooks/useVariants'
import { Component } from '../../model/enum/component'

defineOptions({
  name: 'ShCard'
})

const props = defineProps<SHCardProps>()

const variant = computed(() => {
  return useVariants<SHCardProps>(Component.SHCard, props)
})
</script>

<template>
  <div :class="[variant.root]">
    <slot />
  </div>
</template>
