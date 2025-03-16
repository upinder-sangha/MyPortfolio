<template>
  <svg class="fixed w-6 h-6 opacity-70 animate-float1"
    :style="{ top: `${position.top}%`, left: `${position.left}%`, position: 'fixed' }" viewBox="0 0 40 40">
    <circle cx="20" cy="20" r="18" :class="colorClass" fill="none" stroke-width="2" />
  </svg>

  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
    class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round"
      d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
  </svg>

</template>

<script setup>
defineProps({
  position: Object,
  colorClass: String
});
</script>