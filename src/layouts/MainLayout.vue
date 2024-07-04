<script setup lang="ts">
import { RouterView } from 'vue-router'
import AmHeader from '@/components/AmHeader.vue'
import AmSidebar from '@/components/AmSidebar.vue'
</script>

<template>
  <div class="main-layout flex min-h-svh bg-surface-50">
    <AmSidebar />
    <div class="mx-auto w-full py-8">
      <AmHeader />
      <main class="px-8">
        <div class="lg:bg-white lg:p-8 lg:shadow-sm lg:rounded-lg">
          <RouterView />
        </div>
      </main>
    </div>
  </div>
</template>
