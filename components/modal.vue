<template>
  <div v-if="isOpen" class="backdrop-blur-sm bg-base-content/30 fixed inset-0 z-50 flex items-center justify-center" @click.self="closeModal">
    <div class="rounded-xl p-6 pt-4 max-w-2xl w-full mx-4 bg-base-100">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-2xl font-bold">{{ data.title }}</h2>
        <button @click="closeModal" class="btn btn-ghost" aria-label="Close modal">
          <span class="text-xl">×</span>
        </button>
      </div>
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-4">
          <img :src="`/logos/${data.logo}`" alt="Logo" class="w-20 h-20 rounded-full" />
          <div>
            <p class="text-lg font-semibold">{{ data.institution }}</p>
            <p class="text-sm text-base-content/70">{{ data.year }}</p>
          </div>
        </div>
        <p class="text-base-content/80">{{ data.headline }}</p>
        <a :href="data.link" target="_blank" class="btn btn-primary">Visit Website</a>
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
/* Keep your custom styles if necessary */
.glass-effect {
  @apply backdrop-blur-xl bg-base-100 border border-base-content/10;
}
</style>