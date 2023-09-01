<template>
    <div class="bg-white dark:bg-slate-900 h-screen">
        <h2>Seehar Design Vue</h2>
        <a @click="toggleDark()">{{ isDark }}</a>
        <hr style="margin: 32px 100px" />
        <img src="/favicon.png" alt="seehar_design_vue" title="seehar_design_vue" />
        <div class="mx-10">
            <ShButton :loading="true">按钮组件</ShButton>
            <sh-card>111</sh-card>
            <div class="h-14 bg-gradient-to-r from-cyan-500 to-blue-500">22</div>
            <div class="bg-gradient-to-r from-primary">333</div>
        </div>
        <div class="text-primary">文字</div>
        <div class="text-secondary">文字</div>
    </div>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<style>
* {
    padding: 0;
    margin: 0;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
