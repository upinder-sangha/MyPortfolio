<template>
  <section id="experience" class="min-h-screen p-8">
    <h2 class="text-3xl font-bold text-center mb-8">Experience & Education</h2>
    <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      <!-- Loop through experiences, showing only the first 4 if 'showAll' is false -->
      <li v-for="(data, index) in displayedExperiences" :key="index">
        <hr />
        <div class="timeline-middle">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
            <path fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clip-rule="evenodd" />
          </svg>
        </div>
        <div v-if="data.type == 'experience'" class="shadow-md bg-base-200/30 timeline-box p-0 mb-1 timeline-end max-md:mb-1">
          <CardSmallRight :data="data" />
          <Modal :data="data" />
        </div>
        <div v-else class="bg-base-200/30 shadow-md md:text-end timeline-box p-0 timeline-start mb-1 max-md:mb-1">
          <CardSmallLeft :data="data" />
          <Modal :data="data" />
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
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import listOfExperiences from '~/assets/timeline.json';

// State to track if all experiences should be shown or not
const showAll = ref(false);

// Computed property to display only the first 4 items if showAll is false
const displayedExperiences = computed(() => {
  return showAll.value ? listOfExperiences : listOfExperiences.slice(0, 4);
});

// Method to toggle between showing all or only the first 4 experiences
const toggleShowAll = () => {
  showAll.value = !showAll.value;
};
</script>

<style scoped>
/* Keep your custom styles if necessary */
</style>
