<template>
  <button class="px-4 py-1 rounded cursor-pointer text-sm border border-gray-800/20">
    <slot />
    <span>{{ type }}</span>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  type?: 'default' | 'primary' | 'danger'
}>()
</script>

<script lang="ts">
export default {
  name: 'ShButton'
}
</script>
