<script lang="ts">
/**
 * @name AmIcon
 * @description Componente de ícone que usa o Material Design Icons
 * @link https://fonts.google.com/icons?icon.set=Material+Icons&icon.style=Filled
 */
export default { name: 'AmIcon' }
</script>
<script setup lang="ts">
withDefaults(defineProps<{ name: string; size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' }>(), {
  size: 'md'
})
</script>

<template>
  <i class="am-icon material-icons" :class="size">{{ name }}</i>
</template>

<style lang="scss">
.am-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &.xs {
    width: 0.75rem;
    min-height: 0.75rem;
    font-size: 0.75rem;
  }
  &.sm {
    width: 0.875rem;
    min-height: 0.875rem;
    font-size: 0.875rem;
  }
  &.md {
    width: 1rem;
    min-height: 1rem;
    font-size: 1rem;
  }
  &.lg {
    width: 1.125rem;
    min-height: 1.125rem;
    font-size: 1.125rem;
  }
  &.xl {
    width: 1.25rem;
    min-height: 1.25rem;
    font-size: 1.25rem;
  }
  &.xxl {
    width: 1.5rem;
    min-height: 1.5rem;
    font-size: 1.5rem;
  }
}
</style>
