<script lang="ts">
export default {
  name: 'ShButton'
}
</script>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    type?: 'default' | 'primary' | 'danger' | 'success' | 'info' | 'warning' | 'lint'
  }>(),
  {
    type: 'default'
  }
)
</script>

<template>
  <button :class="['cursor-pointer rounded px-2 py-1 text-sm', type]">
    <slot />
  </button>
</template>

<style scoped>
.default {
  @apply border border-gray-200 dark:border-gray-600 border-solid hover:border-primary dark:hover:border-primary hover:text-primary hover:bg-primary/20;
}

.primary {
  @apply bg-primary text-white hover:bg-primary/80;
}

.danger {
  @apply bg-red-500 text-white hover:bg-red-500/80;
}

.success {
  @apply bg-green-500 text-white hover:bg-green-500/80;
}

.info {
  @apply bg-gray-400 text-white hover:bg-gray-400/80;
}

.warning {
  @apply bg-orange-400 text-white hover:bg-orange-400/80;
}
</style>
