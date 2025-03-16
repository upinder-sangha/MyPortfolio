<template>
    <svg
      class="fixed w-8 h-8 opacity-70"
      :style="{ top: `${position.top}%`, left: `${position.left}%`, position: 'fixed' }"
      viewBox="0 0 36 36"
    >
      <rect x="3" y="3" width="30" height="30" :class="colorClass" fill="none" stroke-width="2" />
    </svg>
  </template>
  
  <script setup>
  defineProps({
    position: Object,
    colorClass: String
  });
  </script>
  