<template>
  <section id="experience" class="bg-base-300/60 backdrop-blur-2xl py-12 md:py-20 md:px-4 px-2 pr-4">
    <h2 class="font-raleway font-light text-3xl sm:text-4xl lg:text-5xl text-center mb-12 md:mb-20 text-accent-content">My Milestones</h2>
    <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      <!-- Loop through experiences, showing only the first 4 if 'showAll' is false -->
      <li v-for="(data, index) in listOfExperiences" :key="index"">
        <hr v-if="index > 0" class="!w-[2px] bg-accent-content"/>
        <div class="timeline-middle">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"  class="h-5 w-5">
            <path fill-rule="evenodd" class="fill-accent-content"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clip-rule="evenodd" />
          </svg>
        </div>
        <div role="button" :class="data.type == 'experience' ? 'timeline-end' : 'timeline-start'"
          class="animated-gradient-border-hover p-0">
          <div class="glass-effect bg-base-100/70 timeline-box">
          <TimelineCard class=""
            :data="data"
            :direction="isSmallScreen ? 'right' : (data.type == 'experience' ? 'right' : 'left')" 
          />
        </div>
        </div>
        <hr class="!w-[2px] bg-accent-content"/>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import listOfExperiences from '~/assets/timeline.json';

// State to track if the screen is smaller than md (768px)
const isSmallScreen = ref(false);

// Function to update isSmallScreen based on window size
const updateScreenSize = () => {
  isSmallScreen.value = window.matchMedia('(max-width: 767px)').matches;
};

// Add event listener for window resize
onMounted(() => {
  updateScreenSize(); // Initial check
  window.addEventListener('resize', updateScreenSize);
});

// Remove event listener when component is unmounted
onUnmounted(() => {
  window.removeEventListener('resize', updateScreenSize);
});

</script>

<style lang="postcss" scoped>
.glass-effect {
  @apply rounded-md border border-transparent shadow-none hover:shadow-md;
}
</style>