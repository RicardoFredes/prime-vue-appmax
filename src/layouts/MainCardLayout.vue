<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainSidebar from '@/layouts/partials/MainSidebar.vue'
import MainCard from '@/layouts/partials/MainCard.vue'
import MainHeader from '@/layouts/partials/MainHeader.vue'
import MainBreadcrumb from '@/layouts/partials/MainBreadcrumb.vue'
</script>

<template>
  <MainSidebar>
    <MainHeader />
    <main class="p-8 grid gap-8 md:gap-4">
      <MainBreadcrumb class="lg:min-h-[52px]" />
      <MainCard>
        <RouterView />
      </MainCard>
    </main>
  </MainSidebar>
</template>
