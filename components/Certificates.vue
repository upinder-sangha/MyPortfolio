<template>
  <section id="certificates" class="py-12 md:py-20 p-4 md:p-8 bg-base-100">
    <h2 class="text-4xl font-bold text-center mb-12">🎓 Certifications</h2>

    <!-- Carousel Container with Max Width + Fade Effect -->
    <div class="relative mx-auto max-w-screen-xl overflow-hidden group">
      <!-- Fade left -->
      <div class="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-base-100 to-transparent z-10">
      </div>
      <!-- Fade right -->
      <div
        class="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-base-100 to-transparent z-10">
      </div>

      <!-- Carousel Track -->
      <div class="flex w-max animate-scroll group-hover:[animation-play-state:paused] gap-8 px-4">
        <div v-for="(certificate, index) in listOfCertificates.concat(listOfCertificates)" :key="index"
          @click="openModal(certificate)"
          class="cursor-pointer flex-shrink-0 bg-base-200 rounded-md border border-bg-base-300 p-2 ">
          <img :src="certificate.image_path" :alt="certificate.title"
            class="h-48 object-contain hover:scale-105 transition-transform rounded-md" />
        </div>
      </div>
    </div>


    <!-- Modal -->
    <div v-if="selectedCertificate"
      class="fixed inset-0 bg-black/50 backdrop-blur-md z-50 flex items-center justify-center p-4"
      @click.self="closeModal">
      <div class="rounded-box max-w-4xl w-full">
        <button class="btn btn-sm btn-circle btn-ghost absolute top-4 right-4 z-10" @click="closeModal">✕</button>
        <img :src="selectedCertificate.image_path" :alt="selectedCertificate.title"
          class="object-contain rounded-box" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import listOfCertificates from '~/assets/certifications.json'

const selectedCertificate = ref(null)

function openModal(cert) {
  selectedCertificate.value = cert
}

function closeModal() {
  selectedCertificate.value = null
}
</script>

<style scoped>
/* No custom styles needed thanks to DaisyUI */
</style>
