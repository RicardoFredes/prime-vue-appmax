<script setup lang="ts">
import AmSidebar from '@/components/AmSidebar.vue'
</script>

<template>
  <div class="main-layout flex min-h-svh bg-surface-50">
    <AmSidebar />
    <div class="mx-auto w-full">
      <slot></slot>
    </div>
  </div>
</template>
