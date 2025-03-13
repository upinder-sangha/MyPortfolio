<template>
  <div class="grid-bg relative overflow-hidden">
    <!-- Floating Circles -->
    <svg
      v-for="i in number_of_individual_shapes"
      :key="'circle-' + i"
      class="absolute w-6 h-6 opacity-100 animate-float1"
      :style="floatingStyle(randomPosition(), randomPosition())"
      viewBox="0 0 40 40"
    >
      <circle cx="20" cy="20" r="18" :class="randomColorClass()" fill="none" stroke-width="2" />
    </svg>

    <!-- Floating Rectangles -->
    <svg
      v-for="i in number_of_individual_shapes"
      :key="'rect-' + i"
      class="absolute w-8 h-8 opacity-100 animate-float2"
      :style="floatingStyle(randomPosition(), randomPosition())"
      viewBox="0 0 36 36"
    >
      <rect x="3" y="3" width="30" height="30" :class="randomColorClass()" fill="none" stroke-width="2" />
    </svg>

    <!-- Floating Polygons -->
    <svg
      v-for="i in number_of_individual_shapes"
      :key="'polygon-' + i"
      class="absolute w-6 h-6 opacity-100 animate-float3"
      :style="floatingStyle(randomPosition(), randomPosition())"
      viewBox="0 0 30 30"
    >
      <polygon points="15,0 30,30 0,30" :class="randomColorClass()" fill="none" stroke-width="2" />
    </svg>

    <!-- Navbar -->
    <Navbar />

    <!-- Main Content -->
    <main class="pt-20">
      <slot />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { computed } from 'vue';

const number_of_individual_shapes = 10;
const total_number_of_shapes = number_of_individual_shapes * 3;

const custom_styles = [
  'stroke-neutral',
  'stroke-primary',
  'stroke-secondary',
  'stroke-accent',
  'stroke-info',
  'stroke-success',
  'stroke-warning',
  'stroke-error',
  'fill-neutral',
  'fill-primary',
  'fill-secondary',
  'fill-accent',
  'fill-info',
  'fill-success',
  'fill-warning',
  'fill-error'
];


const randomColorClass = () => {
  return custom_styles[Math.floor(Math.random() * custom_styles.length)];
};

const floatingStyle = (top, left) => ({
  top: `${top}%`,
  left: `${left}%`,
});

// Helper function to generate a random position (between 5% and 95%)
const randomPosition = () => Math.floor(Math.random() * 95) + 5;
</script>

<style scoped>
/* Background Grid */
.grid-bg {
  --grid-opacity: 0.1;
  background-image:
    radial-gradient(circle, rgb(var(--bc) / var(--grid-opacity)) 1px, transparent 1px),
    radial-gradient(circle, rgb(var(--bc) / var(--grid-opacity)) 1px, transparent 1px);
  background-size: 20px 20px;
  background-position: 0 0, 20px 20px;
  background-attachment: fixed;
}

/* Floating Animations */
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

.animate-float1 {
  animation: float 5s ease-in-out infinite;
}

.animate-float2 {
  animation: float 7s ease-in-out infinite;
}

.animate-float3 {
  animation: float 6s ease-in-out infinite;
}
</style>
