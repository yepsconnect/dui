<script setup lang="ts">
import { computed } from "vue"

const props = withDefaults(defineProps<{
  modelValue?: string | number | null;
  color?: 'primary' | 'secondary' | 'success' | 'accent' | 'info' | 'warning' | 'error';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  bordered?: boolean;
  ghost?: boolean
}>(), {
  bordered: true,
  ghost: false
});

const emit = defineEmits(["update:modelValue"]);

const inputValue = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});
</script>

<template>
  <input
    v-model="inputValue"
    class="input w-full"
    :class="{ 
      'input-bordered': bordered,
      'input-ghost': ghost,
      // size
      'input-xs': size === 'xs',
      'input-sm': size === 'sm',
      'input-md': size === 'md',
      'input-lg': size === 'lg',
      // color
      'input-primary': color === 'primary',
      'input-secondary': color === 'secondary',
      'input-success': color === 'success',
      'input-accent': color === 'accent',
      'input-info': color === 'info',
      'input-warrning': color === 'warning',
      'input-error': color === 'error',
    }"
  />
</template>
