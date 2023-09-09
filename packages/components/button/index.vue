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
      disabled ? 'cursor-not-allowed' : 'cursor-pointer',
      `button-size-${size}${round ? '-round' : ''}${circle ? '-circle' : ''}`
    ]"
    :disabled="disabled"
  >
    <svg
      v-if="loading"
      class="animate-spin inline-block -ml-1 mr-2 h-5 w-5 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
        data-darkreader-inline-stroke=""
        style="--darkreader-inline-stroke: currentColor"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        data-darkreader-inline-fill=""
        style="--darkreader-inline-fill: currentColor"
      ></path>
    </svg>
    <slot />
  </button>
</template>

<style scoped src="./button.css" />
