<script setup lang="ts">
interface Props {
  title?: string
  content?: string
  type?: 'success' | 'warning' | 'error' | 'info'
}

defineProps<Props>()
</script>

<template>
  <div class="alert" :class="{
    'alert-success': type === 'success',
    'alert-warning': type === 'warning',
    'alert-error': type === 'error',
    'alert-info': type === 'info',
  }">
  <slot name="icon"/>
  <div class="flex-1">
    <h3 v-if="title" class="font-bold">
      {{ title }}
    </h3>
    <div v-if="content" class="text-xs">
      {{ content }}
    </div>
  </div>
  <slot name="action"/>
</div>
</template>