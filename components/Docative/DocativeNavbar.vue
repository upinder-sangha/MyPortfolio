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
        </div>
        
        <!-- Right side buttons -->
        <div class="hidden md:flex items-center space-x-3">
          <!-- User Guide Button - Standout styling -->
          <NuxtLink to="/docative/user-guide" 
                    class="relative px-4 py-2.5 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-medium rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            <span class="relative z-10 flex items-center">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              User Guide
            </span>
            <span class="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 transition-opacity duration-300 hover:opacity-100"></span>
          </NuxtLink>
          
          <!-- CTA Button with gradient and animation -->
          <a href="#get-started" 
             class="relative px-6 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            <span class="relative z-10">Get Started</span>
            <span class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 transition-opacity duration-300 hover:opacity-100"></span>
          </a>
        </div>
        
        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button @click="toggleMobileMenu" 
                  class="text-gray-700 hover:text-indigo-600 focus:outline-none p-2 rounded-lg transition-colors duration-300">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Mobile menu with glassmorphism and improved animations -->
    <transition name="mobile-menu" @before-enter="onBeforeEnter" @after-leave="onAfterLeave">
      <div v-show="mobileMenuOpen" 
           class="text-center md:hidden backdrop-blur-xl bg-transparent min-h-screen mt-2 pt-6 pb-6">
        <div class="px-2 space-y-6 sm:px-3">
          <a v-for="link in navLinks" :key="link.name" 
             :href="link.href" 
             @click="toggleMobileMenu"
             class="block px-3 py-3 text-lg text-gray-700 hover:text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-all duration-300 nav-link">
            {{ link.name }}
          </a>
          
          <!-- Special User Guide Link for mobile -->
          <NuxtLink to="/docative/user-guide" 
                    @click="toggleMobileMenu"
                    class="block px-3 py-3.5 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-medium rounded-lg mt-4 text-center text-lg">
            <span class="flex items-center justify-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              User Guide
            </span>
          </NuxtLink>
          
          <a href="#get-started" 
             @click="toggleMobileMenu"
             class="block px-3 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-lg mt-2 text-center text-lg">
            Get Started
          </a>
        </div>
      </div>
    </transition>
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

const toggleMobileMenu = () => {
  // If open, delay close to allow for transition
  if (mobileMenuOpen.value) {
    setTimeout(() => {
      mobileMenuOpen.value = false
    }, 200) // adjust delay here (ms)
  } else {
    mobileMenuOpen.value = true
  }
}

const onBeforeEnter = () => {
  // This function is called before the enter transition starts
  document.body.style.overflow = 'hidden' // Prevent background scrolling when menu is open
}

const onAfterLeave = () => {
  // This function is called after the leave transition ends
  document.body.style.overflow = '' // Restore scrolling
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="postcss" scoped>
.nav-link {
  @apply relative transition-all duration-300;
}
.nav-link::after {
  content: "";
  @apply absolute left-0 -bottom-0.5 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300;
}
.nav-link:hover::after {
  width: 100%;
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.mobile-menu-enter-to,
.mobile-menu-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>