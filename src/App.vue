<template>
    <div class="bg-blue-950 h-screen">
        <h2>Seehar Design Vue</h2>
        <hr style="margin: 32px 100px" />
        <img src="/favicon.png" alt="seehar_design_vue" title="seehar_design_vue" />
        <div>
            <ShButton :loading="true">按钮组件</ShButton>
        </div>
        <div class="text-primary">文字</div>
    </div>
</template>

<script lang="ts" setup></script>

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
