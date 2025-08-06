<template>
  <div class="-z-1 relative overflow-hidden">
    <!-- Floating Shapes -->
    <template v-for="(shape, index) in shapes" :key="'shape-' + index">
      <svg
        :class="[shape.animationClass, shape.sizeClass]"
        xmlns="http://www.w3.org/2000/svg"
        class="fixed"
        :style="{
          top: `${shape.position.top}%`,
          left: `${shape.position.left}%`,
          position: 'fixed'
        }"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          :class="shape.colorClass"
          fill="none"
          stroke-width="2"
          :d="shape.path"
        />
      </svg>
    </template>

    <!-- Navbar -->
    <Navbar />

    <!-- Main Content -->
    <main class="relative z-1">
        <div class="relative">
    <!-- About Section -->
    <About />

    <!-- Other Sections -->
    <div class="relative z-10" style="margin-top: 100vh; pointer-events: none;">
      <div style="pointer-events: auto;">
        <Timeline />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </div>
    </div>
  </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// ===== Shape Data =====
const shapePathsMap = {
  hash: "M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5",
  htmltag: "M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5",
  codebox: "M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z",
  code: "M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25",
  curlybraces: "M9.5 5H9a2 2 0 0 0-2 2v2c0 1-.6 3-3 3 1 0 3 .6 3 3v2a2 2 0 0 0 2 2h.5m5-14h.5a2 2 0 0 1 2 2v2c0 1 .6 3 3 3-1 0-3 .6-3 3v2a2 2 0 0 1-2 2h-.5",
  brackets: "M9 3H5V21H9M15 21H19V3H15"
}
const shapeKeys = Object.keys(shapePathsMap)
const number_of_shapes = 5
const total_shapes = number_of_shapes * shapeKeys.length

const colorClasses = [
  'stroke-info/40',
  'stroke-accent-content/40',
  'stroke-info-content/40',
  'stroke-success-content/40',
  'stroke-error/40'
]
const animationClasses = ['animate-float1', 'animate-float2', 'animate-float3']
const sizeClasses = [
  'w-[3.5vw] h-[3.5vw] sm:w-[2.5vw] sm:h-[2.5vw] md:w-[1.5vw] md:h-[1.5vw]',
  'w-[4vw] h-[4vw] sm:w-[3vw] sm:h-[3vw] md:w-[2vw] md:h-[2vw]',
  'w-[5vw] h-[5vw] sm:w-[3.5vw] sm:h-[3.5vw] md:w-[2.5vw] md:h-[2.5vw]',
  'w-[6vw] h-[6vw] sm:w-[4vw] sm:h-[4vw] md:w-[2.5vw] md:h-[2.5vw]',
]

// ===== Halton Function for Quasi-Random Positions =====
function halton(index, base) {
  let result = 0
  let f = 1
  let i = index
  while (i > 0) {
    f /= base
    result += f * (i % base)
    i = Math.floor(i / base)
  }
  return result
}

// ===== Runtime Reactive State =====
const shapes = ref([])

onMounted(() => {
  const script = document.createElement('script');
  script.src = 'http://10.0.0.233:3000/docative-widget.js';
  script.async = true;
  script.setAttribute('data-bot-id', '02401979-b302-4f64-9a71-6d488626da61');
  script.setAttribute('data-name', 'Upinder Singh Sangha');
  document.body.appendChild(script);

  const startOffset = Math.floor(Math.random() * shapeKeys.length)
  const positions = []

  for (let i = 1; i <= total_shapes; i++) {
    const top = Math.floor(halton(i, 11) * 100)
    const left = Math.floor(halton(i, 7) * 100)
    const key = shapeKeys[(i + startOffset) % shapeKeys.length]

    positions.push({
      position: { top, left },
      path: shapePathsMap[key],
      colorClass: colorClasses[Math.floor(Math.random() * colorClasses.length)],
      animationClass: animationClasses[Math.floor(Math.random() * animationClasses.length)],
      sizeClass: sizeClasses[Math.floor(Math.random() * sizeClasses.length)],
    })
  }

  shapes.value = positions
})
</script>

<style scoped>
/* Floating Animations */
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(20px); }
  100% { transform: translateY(0px); }
}

.animate-float1 { animation: float 2s ease-in-out infinite; }
.animate-float2 { animation: float 3s ease-in-out infinite; }
.animate-float3 { animation: float 5s ease-in-out infinite; }
</style>
