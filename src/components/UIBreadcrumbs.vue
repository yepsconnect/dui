<script setup lang="ts">
interface Props {
  textSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  items?: {
    label: string
    value: string
  }[]
}

defineEmits(['select'])
defineProps<Props>()
</script>

<template>
  <div class="breadcrumbs" :class="{
    'text-xs': textSize === 'xs',
    'text-sm': textSize === 'sm',
    'text-base': textSize === 'md',
    'text-lg': textSize === 'lg',
    'text-xl': textSize === 'xl',
  }">
    <ul>
      <li v-for="(item, index) in items" :key="index" @click="$emit('select', item.value)">
        <a>
          {{ item.label }}
        </a>
      </li> 
    </ul>
  </div>
</template>