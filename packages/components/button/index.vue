<script lang="ts" setup>
import type { IComponentWithRootType } from '../../types/component/component'
import { useVariants } from '../../hooks/useVariants'
import { Component } from '../../model/enum/component'
import { computed } from 'vue'
import type { SHButtonProps } from './type'

defineOptions({
  name: 'ShButton'
})

const props = defineProps<SHButtonProps>()

const variant = computed(() => {
  const customProps: IComponentWithRootType<SHButtonProps> = {
    ...props,
    variant: props.disabled || props.loading ? [props.variant, 'disabled'] : props.variant
  }
  return useVariants<SHButtonProps>(Component.SHButton, customProps)
})
</script>

<template>
  <button
    :class="[
      variant.root,
      {
        [variant.outlined as string]: outlined,
        [variant.round as string]: round,
        [variant.empty as string]: !$slots.default
      }
    ]"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>
