<template>
  <div v-if="direction === 'left'"
    class="flex flex-col p-3 max-sm:py-1 max-sm:px-2 pr-4 max-md:w-[80vw] md:w-[40vw] xl:w-[30vw]">
    <div class="flex justify-end items-center max-md:gap-2 gap-4 text-right">
      <div class="flex flex-col gap-1">
        <span class="max-sm:text-xs text-sm text-base-content/70">{{ data.year }}</span>
        <div>
          <div class="text-primary-content max-sm:text-sm text-lg font-bold max-sm:leading-tight max-sm:inline-block">
            {{ data.title }}
          </div>
          <div class="max-sm:text-xs text-sm text-base-content/70 max-sm:leading-tight max-sm:inline-block">
            {{ data.institution }}
          </div>
        </div>
      </div>
      <img alt="Profile" :src="`/logos/${data.logo}`" class="w-16 rounded-full bg-transparent" />
    </div>
  </div>

  <div v-else class="flex flex-col p-3 max-sm:py-1 max-sm:px-2 pr-4 max-md:w-[80vw] md:w-[40vw] xl:w-[30vw]">
    <div class="flex justify-start items-center max-md:gap-2 gap-4 text-left">
      <img alt="Profile" :src="`/logos/${data.logo}`" class="w-16 rounded-full bg-transparent" />
      <div class="flex flex-col gap-1">
        <span class="max-sm:text-xs text-sm text-base-content/70">{{ data.year }}</span>
        <div>
          <div class="text-primary-content max-sm:text-sm text-lg font-bold max-sm:leading-tight max-sm:inline-block">
            {{ data.title }}
          </div>
          <div class="max-sm:text-xs text-sm text-base-content/70 max-sm:leading-tight max-sm:inline-block">
            {{ data.institution }}
            put tags tags tags tags tags tags tags
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
// Define the item prop
defineProps({
  data: Object,
  direction: String
});

</script>

<style></style>









<!-- 
<template>

<div class="flex flex-col p-2 pr-4 max-md:w-[80vw] md:w-[40vw] xl:w-[35vw]">

    <div class="flex justify-between items-center">
      <img alt="Profile" :src="`/logos/${data.logo}`" class="w-16 rounded-full" />
      <span class="text-sm text-base-content/70">{{ data.year }}</span>
    </div>

    <div class="flex flex-col gap-2 ">
      <div>
        <a class="text-lg font-bold">
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

<style></style> -->
