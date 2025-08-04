<!-- components/docative/DocativeNavbar.vue -->
<template>
  <nav class="fixed top-0 z-50 w-full backdrop-blur-xl bg-opacity-70 transition-all duration-500" 
       :class="scrolled ? 'bg-white/90 shadow-lg py-2' : 'bg-transparent py-4'">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center">
        <!-- Logo with animation -->
        <div class="flex items-center space-x-2">
          <NuxtLink to="/docative" class="flex items-center space-x-2 group">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center transform transition-transform duration-500 group-hover:rotate-12 shadow-lg">
              <span class="text-white font-bold text-xl">D</span>
            </div>
            <span class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Docative
            </span>
          </NuxtLink>
        </div>
        
        <!-- Navigation Links with hover effects -->
        <div class="hidden md:flex items-center space-x-1">
          <a v-for="link in navLinks" :key="link.name" 
             :href="link.href" 
             class="relative px-4 py-2 text-gray-700 hover:text-indigo-600 font-medium transition-all duration-300 group">
            {{ link.name }}
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          
          <!-- Special User Guide Link -->
          <NuxtLink to="/docative/user-guide" 
                    class="relative px-4 py-2 font-medium transition-all duration-300 group ml-2">
            <span class="relative z-10 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              User Guide
            </span>
            <span class="absolute inset-0 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
            <span class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"></span>
          </NuxtLink>
        </div>
        
        <!-- CTA Button with gradient and animation -->
        <div class="hidden md:block">
          <a href="#get-started" 
             class="relative px-6 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            <span class="relative z-10">Get Started</span>
            <span class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 transition-opacity duration-300 hover:opacity-100"></span>
          </a>
        </div>
        
        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button @click="mobileMenuOpen = !mobileMenuOpen" 
                  class="text-gray-700 hover:text-indigo-600 focus:outline-none p-2 rounded-lg transition-colors duration-300">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Mobile menu with glassmorphism -->
    <div v-if="mobileMenuOpen" 
         class="md:hidden backdrop-blur-lg bg-white/80 border-t border-gray-200/50 transition-all duration-300">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a v-for="link in navLinks" :key="link.name" 
           :href="link.href" 
           class="block px-3 py-2 text-gray-700 hover:text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-all duration-300">
          {{ link.name }}
        </a>
        
        <!-- Special User Guide Link for mobile -->
        <NuxtLink to="/docative/user-guide" 
                  class="block px-3 py-2 font-medium rounded-lg transition-all duration-300 mt-1">
          <span class="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            User Guide
          </span>
        </NuxtLink>
        
        <a href="#get-started" 
           class="block px-3 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-lg mt-2 text-center">
          Get Started
        </a>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const mobileMenuOpen = ref(false)
const scrolled = ref(false)
const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Features', href: '#features' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'FAQ', href: '#faq' }
]
const handleScroll = () => {
  scrolled.value = window.scrollY > 10
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>