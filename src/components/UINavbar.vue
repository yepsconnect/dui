<script setup lang="ts"></script>

<template>
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <slot name="start" />
    </div>
    <div class="navbar-center">
      <slot name="center" />
    </div>
    <div class="navbar-end">
      <slot name="end" />
    </div>
  </div>
</template>