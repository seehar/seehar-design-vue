<template>
    <button
        class="px-4 py-1 rounded cursor-pointer text-sm border border-gray-800/20 active:border-primary/70 focus:border-primary/70 dark:border-white/30 bg-white/0 dark:text-white/80 hover:bg-primary/5 hover:border-primary/60 hover:text-primary dark:hover:bg-primary/5 dark:hover:border-primary/60 dark:hover:text-primary"
    >
        <slot />
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'ShButton'
})
</script>
