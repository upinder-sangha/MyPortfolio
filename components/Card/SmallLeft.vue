<template>
  <!-- Card -->
  <div class="flex flex-col p-2 pr-4 max-md:w-[80vw] md:w-[40vw] xl:w-[35vw]">
    <!-- Header -->
    <div class="flex justify-between items-center">
      <img alt="Profile" :src="`/logos/${data.logo}`" class="w-8 rounded-full" />
      <span class="text-sm text-base-content/70">{{ data.year }}</span>
    </div>

    <!-- Body -->
    <div class="flex flex-col gap-2 ">
      <div>
        <a class="text-xl font-bold">
          {{ data.title }}
        </a>
        <div class="text-sm text-base-content/70">{{ data.institution }}</div>
      </div>
    </div>
    <span>
      {{ data.headline }}
    </span>
  </div>
</template>

<script setup>
// Define the item prop
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>

<style></style>
