<script lang="ts">
export default {
  name: 'ShButton'
}
</script>

<script lang="ts" setup>
withDefaults(
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
</script>

<template>
  <button
    :class="[
      'cursor-pointer px-2 py-1 text-sm',
      ghost ? `${type}-ghost` : type,
      circle ? 'rounded-full' : 'rounded'
    ]"
  >
    <slot />
  </button>
</template>

<style scoped>
.button-border {
  @apply border border-solid;
}

.default {
  @apply button-border border-gray-200 dark:border-gray-600 hover:border-primary dark:hover:border-primary hover:text-primary hover:bg-primary/10;
}

.default-ghost {
  @apply button-border border-gray-200 dark:border-gray-600 hover:border-primary dark:hover:border-primary hover:text-primary hover:bg-primary/10;
}

.primary {
  @apply bg-primary text-white hover:bg-primary/80;
}

.primary-ghost {
  @apply button-border border-primary dark:border-primary hover:border-primary dark:hover:border-primary hover:bg-primary bg-primary/10 text-primary hover:text-white;
}

.danger {
  @apply bg-red-500 text-white hover:bg-red-500/80;
}

.danger-ghost {
  @apply button-border bg-red-500/10 text-red-500 hover:text-white hover:bg-red-500/80 border-red-500 dark:border-red-500;
}

.success {
  @apply bg-green-500 text-white hover:bg-green-500/80;
}

.success-ghost {
  @apply button-border bg-green-500/10 text-green-500 hover:text-white hover:bg-green-500 border-green-500 dark:border-green-500;
}

.info {
  @apply bg-gray-400 text-white hover:bg-gray-400/80;
}

.info-ghost {
  @apply button-border bg-gray-400/10 text-gray-400 hover:text-white hover:bg-gray-400 border-gray-400 dark:border-gray-400;
}

.warning {
  @apply bg-orange-400 text-white hover:bg-orange-400/80;
}

.warning-ghost {
  @apply button-border bg-orange-400/10 text-orange-400 hover:text-white hover:bg-orange-400 dark:border-orange-400;
}
</style>
