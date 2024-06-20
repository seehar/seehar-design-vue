<script lang="ts" setup>
import { UserIcon } from "@heroicons/vue/24/solid"
</script>

<template>
  <div class="space-y-3">
    <div class="space-x-2">
      <sh-button size="large">Large</sh-button>
      <sh-button>Default</sh-button>
      <sh-button size="small">Small</sh-button>
    </div>

    <div class="space-x-2">
      <sh-button size="large" round>Large</sh-button>
      <sh-button round>Default</sh-button>
      <sh-button size="small" round>Small</sh-button>
    </div>

    <div class="space-x-3">
      <sh-button size="large" round>
        <UserIcon class="w-3" />
      </sh-button>
      <sh-button circle>
        <UserIcon class="w-3" />
      </sh-button>
      <sh-button size="small" round>
        <UserIcon class="w-3" />
      </sh-button>
    </div>
  </div>
</template>
