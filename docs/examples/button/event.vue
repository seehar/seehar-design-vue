<template>
  <div>
    <sh-button @click="handleClick">点击</sh-button>
  </div>
</template>

<script lang="ts" setup>
const handleClick = () => {
  alert('click me')
}
</script>
