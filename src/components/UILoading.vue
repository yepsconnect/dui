<script setup lang="ts">
interface Props {
  size?: 'xs' | 'sm' | 'md' | 'lg'
  type?: 'spinner' | 'dots' | 'ring'| 'ball' | 'bars' | "infinity" 
  color?: 'primary' | 'secondary' | "accent" | 'neutral' | 'info' | 'success' | 'warning' | 'error'
}

withDefaults(defineProps<Props>(), {
  size: 'md',
  type: 'spinner'
})
</script>

<template>
  <span class="loading" :class="{
    'loading-xs': size === 'xs',
    'loading-sm': size === 'sm',
    'loading-md': size === 'md',
    'loading-lg': size === 'lg',
    'loading-spinner': type === 'spinner',
    'loading-dots': type === 'dots',
    'loading-ring': type === 'ring',
    'loading-ball': type === 'ball',
    'loading-bars': type === 'bars',
    'loading-infinity': type === 'infinity',
    'text-primary': color === 'primary',
    'text-secondary': color === 'secondary',
    'text-accent': color === 'accent',
    'text-neutral': color === 'neutral',
    'text-info': color === 'info',
    'text-success': color === 'success',
    'text-warning': color === 'warning',
    'text-error': color === 'error',
  }"/>
</template>