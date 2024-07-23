<script setup lang="ts">
import AmReturn from '@/components/AmReturn.vue'
</script>

<template>
  <AmReturn>
    {{ $route.meta.title }}
  </AmReturn>
</template>
