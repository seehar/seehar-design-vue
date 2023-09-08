<script lang="ts">
export default {
  name: 'ShButton'
}
</script>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    type?: 'default' | 'primary' | 'danger' | 'success' | 'info' | 'warning' | 'lint'
    size?: 'small' | 'default' | 'large'
    ghost?: boolean
    circle?: boolean
    color?: string
    disabled?: boolean
    icon?: string
    loading?: boolean
    round?: boolean
  }>(),
  {
    type: 'default',
    size: 'default',
    ghost: false,
    circle: false,
    disabled: false,
    loading: false,
    round: false
  }
)

const isBorder = () => {
  if (props.ghost || props.type === 'default') {
    return true
  }
}
</script>

<template>
  <button
    :class="[
      'text-sm',
      `${type}${ghost ? '-ghost' : ''}${disabled ? '-disable' : ''}`,
      {
        'button-border': isBorder()
      },
      circle ? 'rounded-full p-[4px]' : round ? 'rounded-2xl px-4 py-1' : 'rounded px-4 py-1',
      disabled ? 'cursor-not-allowed' : 'cursor-pointer'
    ]"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<style scoped src="./button.css" />
