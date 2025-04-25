<template>
  <section id="certificates" class="py-12 md:py-20 p-6 md:p-8 bg-base-100/50 backdrop-blur-sm">
    <h2 class="font-light text-3xl sm:text-4xl lg:text-5xl font-raleway text-center md:mb-10">What I’ve Earned</h2>

    <!-- Carousel Container -->
    <div class="relative w-full max-w-6xl mx-auto">
      <!-- Slides Container -->
      <div class="overflow-hidden relative h-96">
        <!-- Mobile view (single slide) -->
        <div class="md:hidden h-full">
          <div 
            v-for="(certificate, index) in listOfCertificates"
            :key="index"
            class="absolute inset-0 transition-transform duration-500 ease-in-out transform"
            :class="{
              'translate-x-0 z-10': index === currentIndex,
              'translate-x-full': index === nextIndex,
              '-translate-x-full': index === prevIndex,
              'hidden': index !== currentIndex && index !== nextIndex && index !== prevIndex
            }"
          >
            <img 
              :src="certificate.image_path" 
              :alt="certificate.title"
              class="w-full h-full object-contain cursor-pointer"
              @click="openModal(certificate)"
            />
          </div>
        </div>
        
       <!-- Desktop view (3 slides) -->
       <div class="hidden md:flex h-full items-center justify-center gap-4 overflow-hidden">
          <div 
            v-for="(certificate, index) in listOfCertificates"
            :key="index"
            class="h-full w-1/3 absolute transition-all duration-500 ease-in-out flex items-center"
            :class="desktopSlideClasses(index)"
          >
            <img 
              :src="certificate.image_path" 
              :alt="certificate.title"
              class="w-full h-full object-contain cursor-pointer"
              @click="openModal(certificate)"
            />
          </div>
        </div>

      </div>

      <!-- Navigation Buttons -->
      <button
        class="btn btn-circle absolute top-1/2 left-4 transform -translate-y-1/2 z-20"
        @click="prevSlide"
      >
        ❮
      </button>
      <button
        class="btn btn-circle absolute top-1/2 right-4 transform -translate-y-1/2 z-20"
        @click="nextSlide"
      >
        ❯
      </button>

      <!-- Dots Indicator -->
      <div class="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
        <div
          v-for="(_, index) in listOfCertificates"
          :key="index"
          class="w-3 h-3 rounded-full cursor-pointer transition-colors"
          :class="index === currentIndex ? 'bg-primary' : 'bg-gray-400'"
          @click="goToSlide(index)"
        />
      </div>
    </div>

    <!-- Modal -->
    <div 
      v-if="selectedCertificate"
      class="fixed inset-0 bg-black/50 backdrop-blur-md z-50 flex items-center justify-center p-4"
      @click.self="closeModal"
    >
      <div class="rounded-box max-w-4xl w-full">
        <button class="btn btn-sm btn-circle btn-ghost absolute top-4 right-4 z-10" @click="closeModal">
          ✕
        </button>
        <img 
          :src="selectedCertificate.image_path" 
          :alt="selectedCertificate.title"
          class="object-contain rounded-box"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

import listOfCertificates from '~/assets/certifications.json'

const currentIndex = ref(0)
const selectedCertificate = ref(null)
let slideInterval = null

// Compute visible certificates for desktop view
const visibleCertificates = computed(() => {
  const prevIndex = (currentIndex.value - 1 + listOfCertificates.length) % listOfCertificates.length
  const nextIndex = (currentIndex.value + 1) % listOfCertificates.length
  
  return [
    listOfCertificates[prevIndex],
    listOfCertificates[currentIndex.value],
    listOfCertificates[nextIndex]
  ]
})

// Compute next and previous indices for mobile
const nextIndex = computed(() => {
  return (currentIndex.value + 1) % listOfCertificates.length
})

const prevIndex = computed(() => {
  return (currentIndex.value - 1 + listOfCertificates.length) % listOfCertificates.length
})

function goToSlide(index) {
  currentIndex.value = index
}

function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % listOfCertificates.length
}

function prevSlide() {
  currentIndex.value = (currentIndex.value - 1 + listOfCertificates.length) % listOfCertificates.length
}

// Auto-slide functionality
const autoSlide = true
const autoSlideInterval = 3000

onMounted(() => {
  if (autoSlide) {
    slideInterval = setInterval(() => {
      nextSlide()
    }, autoSlideInterval)
  }
})

onUnmounted(() => {
  clearInterval(slideInterval)
})

function openModal(cert) {
  selectedCertificate.value = cert
}

function closeModal() {
  selectedCertificate.value = null
}

const desktopSlideClasses = (index) => {
  const prev = (currentIndex.value - 1 + listOfCertificates.length) % listOfCertificates.length
  const next = (currentIndex.value + 1) % listOfCertificates.length
  
  // Current slide
  if (index === currentIndex.value) {
    return 'translate-x-0 scale-100 z-10 opacity-100'
  }
  
  // Previous slide
  if (index === prev) {
    return '-translate-x-[105%] scale-75 z-0 opacity-80'
  }
  
  // Next slide
  if (index === next) {
    return 'translate-x-[105%] scale-75 z-0 opacity-80'
  }
  
  // Edge cases for first/last element
  const total = listOfCertificates.length
  if (currentIndex.value === 0 && index === total - 1) {
    return '-translate-x-[105%] scale-75 z-0 opacity-80'
  }
  
  if (currentIndex.value === total - 1 && index === 0) {
    return 'translate-x-[105%] scale-75 z-0 opacity-80'
  }
  
  // Hidden slides
  return 'scale-50 opacity-0'
}

</script>;