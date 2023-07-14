<script setup lang="ts">
interface Props {
  label?: string
  color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'
  outline?: boolean,
  size?: 'xs' | 'sm' | 'md' | 'lg'
}

defineProps<Props>()
</script>

<template>
  <div class="badge" :class="{
    'badge-neutral': color === 'neutral',
    'badge-primary': color === 'primary',
    'badge-secondary': color === 'secondary',
    'badge-accent': color === 'accent',
    'badge-info': color === 'info',
    'badge-success': color === 'success',
    'badge-warning': color === 'warning',
    'badge-error': color === 'error',
    'badge-xs': size === 'xs',
    'badge-sm': size === 'sm',
    'badge-md': size === 'md',
    'badge-lg': size === 'lg',
    'badge-outline': outline,
  }">
    {{ label }}
    <slot/>
  </div>
</template>