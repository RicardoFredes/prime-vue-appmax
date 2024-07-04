<script setup lang="ts">
import AmLogo from '@/components/AmLogo.vue'

const BLANK_IMG_SOURCE = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
</script>

<template>
  <div class="h-full flex flex-col justify-between items-center md:items-start w-full">
    <div class="w-full py-5 md:p-0 md:mt-20 bg-white drop-shadow-md md:drop-shadow-none">
      <AmLogo class="h-8 md:h-20" />
    </div>
    <h1
      class="mt-20 md:mb-20 sm:text-3xl text-2xl md:text-4xl max-w-[400px] leading-snug font-medium text-center md:text-left"
    >
      Soluções que <strong class="text-primary-500">maximizam</strong> o resultado do seu negócio
      online
    </h1>
    <picture>
      <source
        media="(min-width: 768px)"
        height="326"
        width="280"
        srcset="/img/auth-bg-element.svg"
      />
      <img :src="BLANK_IMG_SOURCE" height="0" width="0" />
    </picture>
  </div>
</template>
