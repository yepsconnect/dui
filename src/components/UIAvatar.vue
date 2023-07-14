<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  src?: string
  alt?: string
  online?: boolean
  isOnline?: boolean
  isRing?: boolean
  ringColor?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'
  mask?: 'none' | 'squircle' | 'hexagon' | 'triangle'
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
  placeholder?: string | number | null
  placeholderSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

withDefaults(defineProps<Props>(), {
  online: false,
  isOnline: false,
  isRing: false,
  placeholder: null,
  placeholderSize: 'md',
})

// state
const isError = ref(false);
</script>

<template>
  <div class="avatar w-full" :class="{
    'online': online && isOnline,
    'offline': !online && isOnline,
    'placeholder': isError || !src,
    'w-8': size === 'xs',
    'w-16': size === 'sm',
    'w-24': size === 'md',
    'w-32': size === 'lg',
    'w-64': size === 'xl',
    'w-full': size === 'full',
  }">
    <div class="w-full mask bg-gray-100" :class="{
    'mask-squircle': mask === 'squircle',
    'mask-hexagon': mask === 'hexagon',
    'mask-triangle': mask === 'triangle',
    'rounded-sm': rounded === 'sm',
    'rounded-md': rounded === 'md',
    'rounded-lg': rounded === 'lg',
    'rounded-xl': rounded === 'xl',
    'rounded-full': rounded === 'full',
    'ring ring-offset-base-100 ring-offset-2': isRing,
    'ring-neutral': isRing && ringColor === 'neutral',
    'ring-primary': isRing && ringColor === 'primary',
    'ring-secondary': isRing && ringColor === 'secondary',
    'ring-accent': isRing && ringColor === 'accent',
    'ring-info': isRing && ringColor === 'info',
    'ring-success': isRing && ringColor === 'success',
    'ring-warning': isRing && ringColor === 'warning',
    'ring-error': isRing && ringColor === 'error'
  }">
      <slot v-if="isError || !src" />
      <img v-else :src="src" :alt="alt" @error="isError = true" />
      <span v-if="placeholder" :class="{
        'text-xs': placeholderSize === 'xs',
        'text-sm': placeholderSize === 'sm',
        'text-base': placeholderSize === 'md',
        'text-lg': placeholderSize === 'lg',
        'text-xl': placeholderSize === 'xl',
      }">
        {{ placeholder }}
      </span>
    </div>
  </div>
</template>