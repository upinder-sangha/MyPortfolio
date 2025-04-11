<template>
  <div
    :class="['flex flex-col p-2 max-sm:py-1 max-sm:px-2 pr-4 max-md:w-[85vw] md:w-[45vw] lg:w-[40vw] xl:w-[35vw]', { 'cursor-pointer': !isExpanded }]"
    @click="toggleExpand">
    <!-- Card Content -->
    <div class="flex justify-end items-center max-md:gap-2 gap-4 text-right" v-if="direction === 'left'">
      <div class="flex flex-col">
        <span class="max-sm:text-xs leading-tight text-sm text-base-content/70">{{ data.year }}</span>
        <div>
          <div
            class="text-primary-content max-sm:text-xs text-lg font-bold leading-tight break-words whitespace-normal">
            {{ data.title }}
          </div>
          <div class="max-sm:text-xs text-sm text-base-content/70 max-sm:leading-tight break-words whitespace-normal">
            {{ data.institution }}
          </div>
        </div>
      </div>
      <img alt="Profile" :src="`/logos/${data.logo}`"
        class="w-16 h-16 max-sm:w-12 max-sm:h-12 rounded-full bg-transparent" />
    </div>

    <div class="flex flex-col max-sm:gap-2" v-else>
      <!-- Logo and Text Section -->
      <div class="flex justify-start items-center gap-4 text-left">
        <img alt="Profile" :src="`/logos/${data.logo}`"
          class="w-16 h-16 max-sm:w-12 max-sm:h-12 rounded-full bg-transparent" />
        <div class="flex flex-col">
          <span class="max-sm:text-xs leading-tight text-sm text-base-content/70">{{ data.year }}</span>
          <div>
            <div
              class="text-primary-content max-sm:text-xs text-lg font-bold leading-tight break-words whitespace-normal">
              {{ data.title }}
            </div>
            <div
              class="max-sm:text-xs text-sm mt-0 text-base-content/70 max-sm:leading-tight break-words whitespace-normal">
              {{ data.institution }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Badges and Arrow Section -->
    <div class="flex justify-between items-center pt-1" :class="direction === 'left' ? 'sm:mr-20' : 'sm:ml-20'">
      <!-- Badges -->
      <ul class="flex flex-row flex-wrap gap-2">
        <li v-for="(item, index) in data.tags" :key="index" class="badge bg-base-300/50 badge-sm">{{ item }}</li>
      </ul>

      <!-- Upper Arrow (only visible when collapsed) -->
      <div v-if="!isExpanded" class="transition-transform duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 stroke-base-content/50" fill="none" viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>

    <!-- Expandable Details Section -->
    <div v-if="isExpanded" class="">
      <p class="text-base-content/70 max-sm:text-xs sm:pl-20 text-sm p-2 text-justify">{{ data.details }}</p>
      <div class="flex justify-between items-center sm:pl-20">
        <a v-if="data.link" :href="data.link" target="_blank" class="btn btn-primary mt-4">Visit Website</a>
        <!-- Arrow (moved to the same level as the button) -->
        <div class="transition-transform duration-300" :class="{ 'rotate-180': isExpanded }">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 stroke-base-content/50" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  data: Object,
  direction: String,
});

const isExpanded = ref(false);

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value;
};
</script>

<style scoped>
/* Add smooth transition for expanding/collapsing */
div {
  transition: all 0.3s ease;
}
</style>