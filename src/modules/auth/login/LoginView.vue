<script setup lang="ts">
import LoginCover from './LoginCover.vue'
import LoginForm from './LoginForm.vue'
</script>

<template>
  <div class="grid md:grid-cols-2 itens-center sm:h-screen bg-white">
    <div class="h-full flex justify-end bg-white md:drop-shadow-2xl">
      <div class="md:px-10 h-full flex items-center justify-center w-full md:max-w-[600px]">
        <LoginCover />
      </div>
    </div>
    <div class="h-full flex justify-start md:bg-surface-50">
      <div class="p-10 h-full flex items-center justify-center w-full md:max-w-[600px]">
        <LoginForm />
      </div>
    </div>
  </div>
</template>
