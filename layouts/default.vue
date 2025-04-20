<template>
  <div class=" -z-1 relative overflow-hidden">
    <!-- Floating Shapes -->
    <template v-for="(shape, index) in total_shapes" :key="'shape-' + index">
      <svg :class="[randomAnimationClass(), randomSizeClass()]" xmlns="http://www.w3.org/2000/svg"
        class="fixed"
        :style="{ top: `${randomPosition(index).top}%`, left: `${randomPosition(index).left}%`, position: 'fixed' }"
        viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" :class="randomColorClass()" fill="none" stroke-width="2"
          :d="getShapePath(index).path" />
      </svg>
    </template>


    <!-- Navbar -->
    <Navbar />

    <!-- Main Content -->
    <main class="pt-20 relative z-1">
      <slot />
    </main>

    <!-- Footer -->
    <Footer class="z-1" />
  </div>
</template>

<script setup>

const shapePathsMap = {
  hash: "M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5",
  htmltag: "M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5",
  codebox: "M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z",
  code: "M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25",
  curlybraces: "M9.5 5H9a2 2 0 0 0-2 2v2c0 1-.6 3-3 3 1 0 3 .6 3 3v2a2 2 0 0 0 2 2h.5m5-14h.5a2 2 0 0 1 2 2v2c0 1 .6 3 3 3-1 0-3 .6-3 3v2a2 2 0 0 1-2 2h-.5",
  brackets: "M9 3H5V21H9M15 21H19V3H15"
};

const number_of_shapes = 5;
const total_shapes = number_of_shapes * Object.keys(shapePathsMap).length; // 30 shapes total
const randomPositionsList = generateQuasiRandomPositions(total_shapes);

function halton(index, base) {
  let result = 0;
  let f = 1;
  let i = index;
  while (i > 0) {
    f = f / base;
    result += f * (i % base);
    i = Math.floor(i / base);
  }
  return result;
}

function generateQuasiRandomPositions(n) {
  const positions = [];
  for (let i = 1; i <= n; i++) {
    positions.push({
      top: Math.floor(halton(i, 11) * 100),
      left: Math.floor(halton(i, 7) * 100),
    });
  }
  return positions;
}

const randomPosition = (index) => randomPositionsList[index % total_shapes];

const shapeKeys = Object.keys(shapePathsMap);

const getShapePath = (index) => ({
  
  name: shapeKeys[index % shapeKeys.length],
  path: shapePathsMap[shapeKeys[(index % shapeKeys.length) ]]
});

const custom_styles = [
  'stroke-neutral/50', 'stroke-primary/50', 'stroke-secondary/50', 'stroke-accent/50',
  'stroke-info/50', 'stroke-success/50', 'stroke-warning/50', 'stroke-error/50'
];

const animation_classes = ['animate-float1', 'animate-float2', 'animate-float3'];
const size_classes = [
  'w-[3.5vw] h-[3.5vw] sm:w-[2.5vw] sm:h-[2.5vw] md:w-[1.5vw] md:h-[1.5vw]',
  'w-[3.5vw] h-[3.5vw] sm:w-[2.5vw] sm:h-[2.5vw] md:w-[1.5vw] md:h-[1.5vw]',
  'w-[4vw] h-[4vw] sm:w-[3vw] sm:h-[3vw] md:w-[2vw] md:h-[2vw]',
  'w-[5vw] h-[5vw] sm:w-[3.5vw] sm:h-[3.5vw] md:w-[2.5vw] md:h-[2.5vw]',
  'w-[6vw] h-[6vw] sm:w-[4vw] sm:h-[4vw] md:w-[2.5vw] md:h-[2.5vw]',
];
const randomColorClass = () => custom_styles[Math.floor(Math.random() * custom_styles.length)];
const randomAnimationClass = () => animation_classes[Math.floor(Math.random() * animation_classes.length)];
const randomSizeClass = () => size_classes[Math.floor(Math.random() * size_classes.length)];
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
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(20px);
  }

  100% {
    transform: translateY(0px);
  }
}

.animate-float1 {
  animation: float 2s ease-in-out infinite;
}

.animate-float2 {
  animation: float 3s ease-in-out infinite;
}

.animate-float3 {
  animation: float 5s ease-in-out infinite;
}
</style>
