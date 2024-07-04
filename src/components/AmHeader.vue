<script setup lang="ts">
import Button from 'primevue/button'
import AmIcon from '@/components/AmIcon.vue'
import AmReturn from '@/components/AmReturn.vue'

const toggleMenu = () => {
  const isMenuOpen = document.body.dataset.menuOpen === 'true'
  document.body.dataset.menuOpen = String(!isMenuOpen)
}
</script>

<template>
  <header class="flex gap-2 items-center justify-between px-8 mb-4">
    <AmReturn class="mt-16 mb-2 lg:mt-0 lg:mb-0">
      {{ $route.meta.title }}
    </AmReturn>
    <nav
      :class="[
        'bg-white px-4 py-4 shadow-sm',
        'flex items-center justify-between',
        'fixed top-0 left-0 right-0 z-10',
        'lg:static lg:py-2 lg:rounded-lg'
      ]"
    >
      <div class="lg:hidden">
        <Button size="small" text plain style="padding: 0.5rem" @click="toggleMenu">
          <AmIcon name="menu" size="xxl" />
        </Button>
      </div>
      <div class="flex items-center gap-3 text-gray-500">
        <AmIcon name="notifications" size="xxl" />
        <AmIcon name="store" size="xxl" />
        <span class="h-[24px] lg:inline-block border-r border-gray-300 hidden"></span>
        <AmIcon name="account_circle" size="xxl" />
        <div class="hidden lg:block">
          <p class="text-sm">admin@appmax.com</p>
          <p class="text-xs text-gray-400">Produtor</p>
        </div>
      </div>
    </nav>
  </header>
</template>
