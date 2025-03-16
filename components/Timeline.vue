<template>
  <section id="experience" class="min-h-screen p-8 max-sm:p-4">
    <h2 class="text-3xl font-bold text-center mb-8">Experience & Education</h2>
    <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      <!-- Loop through experiences, showing only the first 4 if 'showAll' is false -->
      <li v-for="(data, index) in displayedExperiences" :key="index">
        <hr />
        <div class="timeline-middle">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
            <path fill-rule="evenodd" class="fill-secondary"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clip-rule="evenodd" />
          </svg>
        </div>
        <div :class="data.type == 'experience' ? 'timeline-end' : 'timeline-start'"
          class="glass-effect shadow-md timeline-box p-0 mb-2 max-md:mb-1">
          <!-- Conditionally pass direction based on screen size -->
          <CardSmall 
            @click="handleOpenModal(data)" 
            class="hover:scale-[1.02]" 
            role="button" 
            :data="data"
            :direction="isSmallScreen ? 'right' : (data.type == 'experience' ? 'right' : 'left')" 
          />
        </div>
        <hr />
      </li>
    </ul>

    <!-- Show 'See More' button if there are more than 4 experiences -->
    <div v-if="listOfExperiences.length > 4" class="text-center mt-4">
      <button @click="toggleShowAll" class="text-info font-semibold hover:underline">
        {{ showAll ? 'Show Less' : 'See All Experiences' }}
      </button>
    </div>

    <!-- Modal -->
    <Modal 
      :isOpen="isModalOpen" 
      :data="selectedCardData" 
      @close-modal="handleCloseModal" 
    />
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import listOfExperiences from '~/assets/timeline.json';

// State to track if all experiences should be shown or not
const showAll = ref(false);

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

// Computed property to display only the first 4 items if showAll is false
const displayedExperiences = computed(() => {
  return showAll.value ? listOfExperiences : listOfExperiences.slice(0, 4);
});

// Method to toggle between showing all or only the first 4 experiences
const toggleShowAll = () => {
  showAll.value = !showAll.value;
};

// Modal logic
const isModalOpen = ref(false);
const selectedCardData = ref(null);

const handleOpenModal = (data) => {
  selectedCardData.value = data;
  isModalOpen.value = true;
};

const handleCloseModal = () => {
  isModalOpen.value = false;
  selectedCardData.value = null;
};
</script>

<style lang="postcss" scoped>
/* Keep your custom styles if necessary */
.glass-effect {
  @apply backdrop-blur-sm bg-primary/30 border border-base-content/10;
}
</style>