<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Button from 'primevue/button'
import AmIcon from '@/components/AmIcon.vue'
</script>

<template>
  <div class="flex gap-2 items-center">
    <Button id="go-back-btn" :as="RouterLink" to="/" rounded size="small" style="padding: 0.25rem">
      <AmIcon name="keyboard_arrow_left" size="lg" />
    </Button>
    <h1 class="lg:text-2xl text-xl font-normal text-gray-700">
      <slot></slot>
    </h1>
  </div>
</template>
