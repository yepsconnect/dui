<script setup lang="ts">
import { computed, watch } from "vue";

interface Props {
  modelValue: boolean
}

const emit = defineEmits(['update:modelValue'])
const props = defineProps<Props>()

const drawerActivator = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

// add html class to body
watch(drawerActivator, (value) => {
  if (value) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
});

</script>

<template>
  <div class="drawer">
  <input v-model="drawerActivator" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <slot name="content"/>
  </div> 
  <div class="drawer-side">
    <label for="my-drawer" class="drawer-overlay" @click="$emit('update:modelValue', false)"></label>
    <slot name="menu"/>
  </div>
</div>
</template>