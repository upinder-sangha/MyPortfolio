<template>
  <div
    :class="['hover:scale-105 transition-transform relative flex flex-col p-2 max-sm:py-1 max-sm:px-2 pr-4 max-w-lg']"
    @click="toggleExpand"
  >
    <!-- Left-aligned Card -->
    <template v-if="direction === 'left'">
      <!-- Top Section -->
      <div class="flex justify-end items-center max-md:gap-2 gap-4 text-right">
        <div class="flex flex-col">
          <span class="font-light max-sm:text-xs leading-tight text-sm text-base-content/70">{{ data.year }}</span>
          <div class="text-base-content max-sm:text-xs text-lg  leading-tight break-words whitespace-normal">
            {{ data.title }}
          </div>
          <div class="font-light flex flex-wrap flex-row-reverse gap-1 max-sm:text-xs text-sm text-base-content/70
            max-sm:leading-tight break-words whitespace-normal">
            <a class="hover:underline" v-if="data.link" :href="data.link" target="_blank">
              {{ data.institution }}
            </a>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
              stroke="currentColor" class="size-4">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
            </svg>
          </div>
        </div>
        <img :src="`/logos/${data.logo}`" alt="Profile"
          class="w-16 h-16 max-sm:w-12 max-sm:h-12 rounded-full bg-transparent" />
      </div>

      <!-- Details -->
      <div
        :class="['overflow-hidden transition-max-height duration-300 ease-in-out', isExpanded ? 'max-h-[500px]' : 'max-h-0']">
        <ul class="flex flex-wrap flex-row-reverse gap-2 px-4 pt-2 pr-20">
          <li v-for="(item, index) in data.tags" :key="index" class="badge bg-base-300/50 badge-sm">{{ item }}</li>
        </ul>
        <p class="font-light text-base-content/70 max-sm:text-xs sm:pr-20 text-sm p-2 pl-4 text-justify pb-8">{{ data.details }}</p>
      </div>

      <!-- Arrow (Bottom Left) -->
      <div class="absolute bottom-1 left-1">
        <div class="transition-transform duration-300" :class="{ 'rotate-180': isExpanded }">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 stroke-base-content/50" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </template>

    <!-- Right-aligned Card -->
    <template v-else>
      <!-- Top Section -->
      <div class="flex justify-start items-center gap-4 text-left">
        <img :src="`/logos/${data.logo}`" alt="Profile"
          class="w-16 h-16 max-sm:w-12 max-sm:h-12 rounded-full bg-transparent" />
        <div class="flex flex-col">
          <span class="font-light max-sm:text-xs leading-tight text-sm text-base-content/70">{{ data.year }}</span>
          <div class="text-base-content max-sm:text-xs text-lg leading-tight break-words whitespace-normal">
            {{ data.title }}
          </div>

          <div class="font-light flex flex-wrap gap-1 max-sm:text-xs text-sm text-base-content/70 max-sm:leading-tight break-words whitespace-normal">
            <a class="hover:underline" v-if="data.link" :href="data.link" target="_blank">
              {{ data.institution }}
            </a>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
              stroke="currentColor" class="size-4">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Details -->
      <div
        :class="['overflow-hidden transition-max-height duration-300 ease-in-out', isExpanded ? 'max-h-[500px]' : 'max-h-0']">
        <ul class="flex flex-wrap gap-2 px-2 pt-2 sm:pl-20">
          <li v-for="(item, index) in data.tags" :key="index" class="badge bg-base-300/50 badge-sm">{{ item }}</li>
        </ul>
        <p class="font-light text-base-content/70 max-sm:text-xs sm:pl-20 text-sm p-2 pr-4 text-justify pb-8">{{ data.details }}</p>
      </div>

      <!-- Arrow (Bottom Right) -->
      <div class="absolute bottom-1 right-1">
        <div class="transition-transform duration-300" :class="{ 'rotate-180': isExpanded }">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 stroke-base-content/50" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  data: Object,
  direction: String,
});

const isExpanded = ref(false);
const isMobile = ref(false);

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value;
};

const checkScreenSize = () => {
  isMobile.value = window.innerWidth < 640;
};

onMounted(() => {
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize);
});
</script>

<style scoped>
.transition-max-height {
  transition: max-height 0.3s ease-in-out;
}
</style>
