<script lang="ts">
export default {
  name: 'ShButton'
}
</script>

<script lang="ts" setup>
import { IComponentWithRootType, SHButtonOptions } from '../../types/component/component'
import { useVariants } from '../../hooks/useVariants'
import { Component } from '../../model/enum/component'
import { computed } from 'vue'

const props = defineProps<SHButtonOptions>()

const variant = computed(() => {
  const customProps: IComponentWithRootType<SHButtonOptions> = {
    ...props,
    variant: props.disabled || props.loading ? [props.variant, 'disabled'] : props.variant
  }
  return useVariants<SHButtonOptions>(Component.SHButton, customProps)
})
</script>

<template>
  <button
    :class="[
      variant.root,
      {
        [variant.outlined]: outlined,
        [variant.round]: round,
        [variant.empty]: !$slots.default
      }
    ]"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>
