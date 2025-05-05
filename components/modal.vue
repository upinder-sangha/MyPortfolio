<template>
  <div v-if="isOpen" class="backdrop-blur-sm bg-base-content/30 fixed inset-0 z-50 flex items-center justify-center p-4" @click.self="closeModal">
    <div class="rounded-xl p-4 max-w-2xl w-full mx-4 bg-base-100 max-sm:p-3 max-sm:mx-2">
      <!-- Modal Header -->
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-2xl font-bold max-sm:text-xl">{{ data.title }}</h2>
        <button @click="closeModal" class="btn btn-ghost" aria-label="Close modal">
          <span class="text-xl max-sm:text-lg">×</span>
        </button>
      </div>

      <!-- Modal Content -->
      <div class="flex flex-col gap-4">
        <!-- Logo and Institution Info -->
        <div class="flex items-center gap-4 max-sm:gap-3">
          <img :src="`/logos/${data.logo}`" alt="Logo" class="w-20 h-20 rounded-full max-sm:w-16 max-sm:h-16" />
          <div>
            <p class="text-lg font-semibold max-sm:text-base">{{ data.institution }}</p>
            <p class="text-sm text-base-content/70 max-sm:text-xs">{{ data.year }}</p>
          </div>
        </div>

        <!-- Details -->
        <p class="text-base-content/80 max-sm:text-sm">{{ data.details }}</p>

        <!-- Visit Website Button -->
        <a :href="data.link" target="_blank" class="btn btn-primary max-sm:btn-sm">Visit Website</a>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  data: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['close-modal']);

const closeModal = () => {
  emit('close-modal');
};
</script>

<style lang="postcss" scoped>
.glass-effect {
  @apply backdrop-blur-xl bg-base-100 border border-base-content/10;
}
</style>



<ul class="flex flex-row flex-wrap gap-2 pt-1" :class="direction === 'left' ? 'justify-end sm:mr-20' : 'sm:ml-20'">
  <li v-for="(item, index) in data.tags" :key="index" class="badge bg-base-300/50 badge-sm">{{ item }}</li>
</ul>