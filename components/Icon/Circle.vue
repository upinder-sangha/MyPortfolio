<template>
  <svg class="fixed w-6 h-6 opacity-70"
    :style="{ top: `${position.top}%`, left: `${position.left}%`, position: 'fixed' }" viewBox="0 0 40 40">
    <circle cx="20" cy="20" r="18" :class="colorClass" fill="none" stroke-width="2" />
  </svg>
</template>

<script setup>
defineProps({
  position: Object,
  colorClass: String
});
</script>