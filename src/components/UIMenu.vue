<script setup lang="ts">
interface Props {
  list: string[]
  size?: 'xs' | 'sm' | 'md' | 'lg'
  isDrawerMenu?: boolean
}

defineEmits(['select'])
withDefaults(defineProps<Props>(), {
  size: 'md',
  isDrawerMenu: false,
})

</script>

<template>
  <ul class="menu"
    :class="{
      'menu-xs': size === 'xs',
      'menu-sm': size === 'sm',
      'menu-md': size === 'md',
      'menu-lg': size === 'lg',
    }"
  >
    <slot v-if="isDrawerMenu" name="content-top"/>
    <li v-for="(item, index) in list" :key="index" @click="$emit('select', item)">
      <a>

        {{ item }}
      </a>
    </li>
    <slot v-if="isDrawerMenu" name="content-bottom"/>
  </ul>
</template>