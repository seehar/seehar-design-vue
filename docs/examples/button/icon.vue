<script lang="ts" setup>
import { UserIcon } from "@heroicons/vue/24/solid"
</script>

<template>
  <div class="space-x-3">
    <sh-button>
      <UserIcon class="w-3" />
    </sh-button>
    <sh-button type="primary">
      <UserIcon class="w-3" />
    </sh-button>
    <sh-button type="danger">
      <UserIcon class="w-3" />
    </sh-button>
    <sh-button type="success">
      <UserIcon class="w-3" />
    </sh-button>
    <sh-button type="warning">
      <UserIcon class="w-3" />
    </sh-button>
    <sh-button type="info">
      <UserIcon class="w-3" />
    </sh-button>
  </div>
</template>
