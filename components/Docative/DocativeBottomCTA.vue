<!-- components/docative/DocativeBottomCTA.vue -->
<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div class="text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Ready to make your docs docative?</h2>
      <p class="text-lg md:text-xl text-indigo-100 mb-10 max-w-3xl mx-auto">
        Join thousands of users who are transforming their static documents into interactive experiences.
      </p>
      
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <a v-for="cta in ctas" :key="cta.text" 
           :href="cta.href"
           class="group px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center"
           :class="cta.bgClass">
          {{ cta.text }}
          <svg class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const ctas = [
  {
    text: 'Get Started',
    href: '#get-started',
    bgClass: 'bg-white text-indigo-600 hover:bg-indigo-50'
  },
  {
    text: 'See Live Demo',
    href: '#demo',
    bgClass: 'bg-transparent text-white border-2 border-white/50 hover:bg-white/10'
  }
]
</script>