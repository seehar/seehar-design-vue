<script lang="ts">
export default {
  name: 'ShButton'
}
</script>

<script lang="ts" setup>
defineProps<{
  type?: 'default' | 'primary' | 'danger'
}>()
</script>

<template>
  <button :class="['border rounded px-2 py-1', type === 'primary' ? 'bg-primary text-white' : '']">
    <slot />
  </button>
</template>
