<script setup lang="ts">
interface Props {
  label?: any
  size?: 'xs' | 'sm' | 'md' | 'lg'
  color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'ghost' | 'link' | 'info' | 'success' | 'warning' | 'error'
  capitalize?: boolean
  outline?: boolean
  active?: boolean
  wide?: boolean
  glass?: boolean
  type?: 'button' | 'submit' | 'reset'
  square?: boolean
  circle?: boolean
  block?: boolean
  noAnimation?: boolean
}

withDefaults(defineProps<Props>(), {
  capitalize: true,
  outline: false,
  active: false,
  wide: false,
  glass: false,
  type: 'button',
  square: false,
  circle: false,
  block: false,
  noAnimation: false
});
</script>

<template>
  <button
    :type="type"
    class="btn group"
    :class="{
      'capitalize': capitalize,
      // color
      'btn-neutral': color === 'neutral',
      'btn-primary': color === 'primary',
      'btn-secondary': color === 'secondary',
      'btn-accent': color === 'accent',
      'btn-ghost': color === 'ghost',
      'btn-link': color === 'link',
      'btn-info': color === 'info',
      'btn-success': color === 'success',
      'btn-warning': color === 'warning',
      'btn-error': color === 'error',
      'glass': glass,
      // size
      'btn-xs': size === 'xs',
      'btn-sm': size === 'sm',
      'btn-md': size === 'md',
      'btn-lg': size === 'lg',
      // other
      'btn-outline': outline,
      'btn-active': active,
      
      // shape
      'btn-wide': wide,
      'btn-square': square,
      'btn-circle': circle,
      'btn-block': block,
      // animation
      'no-animation': noAnimation
    }"
  >
    {{ label }}
    <slot />
  </button>
</template>