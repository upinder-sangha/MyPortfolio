<!-- components/docative/DocativeWhyChoose.vue -->
<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Docative?</h2>
      <p class="text-lg text-gray-700 max-w-3xl mx-auto">
        Our innovative tool transforms your static documents into interactive chatbots that enhance user engagement.
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div v-for="(feature, index) in features" :key="index" 
           class="group relative">
        <div class="absolute -inset-1 rounded-2xl blur opacity-25 transition duration-1000 group-hover:opacity-50"
             :class="feature.bgBlurClass"></div>
        <div class="relative bg-white rounded-2xl shadow-lg p-8 h-full border border-white">
          <div class="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
               :class="feature.bgClass">
            <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feature.iconPath"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">{{ feature.title }}</h3>
          <p class="text-gray-600">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const features = [
  {
    title: 'Personalized AI',
    description: 'Get answers based on your actual content, not generic responses. The AI understands your documents.',
    iconPath: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z',
    bgClass: 'bg-gradient-to-r from-indigo-500 to-purple-600',
    bgBlurClass: 'bg-gradient-to-r from-indigo-500 to-purple-600'
  },
  {
    title: 'Easy Embedding',
    description: 'Simply copy and paste a single script tag into your website. No complex installations required.',
    iconPath: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    bgClass: 'bg-gradient-to-r from-purple-500 to-pink-600',
    bgBlurClass: 'bg-gradient-to-r from-purple-500 to-pink-600'
  },
  {
    title: 'Free Access',
    description: 'Get started with our free plan. No credit card required.',
    iconPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    bgClass: 'bg-gradient-to-r from-pink-500 to-rose-600',
    bgBlurClass: 'bg-gradient-to-r from-pink-500 to-rose-600'
  },
  {
    title: 'Secure Data',
    description: 'Your documents are processed with end-to-end encryption. We prioritize your privacy and security.',
    iconPath: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    bgClass: 'bg-gradient-to-r from-teal-500 to-cyan-600',
    bgBlurClass: 'bg-gradient-to-r from-teal-500 to-cyan-600'
  }
]
</script>