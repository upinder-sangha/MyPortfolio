<template>
  <div class="min-h-screen flex items-center py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
      <!-- Modified grid layout for centering on small screens -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Left content -->
        <div class="space-y-8 text-center lg:text-left">
          <div class="space-y-6">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span class="block">Make Your</span>
              <span class="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 animate-gradient">
                Content
              </span>
              <span class="block">Talkative</span>
            </h1>
            <p class="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto lg:mx-0">
              Transform your documents or static content into interactive conversations. Upload a document or provide a website URL, customize, and embed AI-powered chatbot in minutes.
            </p>
          </div>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#get-started" class="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-2xl overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
              <span class="relative z-10 flex items-center justify-center">
                Get Your Chatbot Now
                <svg class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
              <span class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </a>
            <a href="#demo" class="group relative px-8 py-4 bg-white text-indigo-600 font-semibold rounded-2xl border-2 border-indigo-200 overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:border-indigo-300">
              <span class="relative z-10 flex items-center justify-center">
                See Live Demo
                <svg class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </span>
              <span class="absolute inset-0 bg-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </a>
          </div>
          
          <!-- Trust indicators -->
          <div class="flex flex-wrap gap-6 pt-4 justify-center lg:justify-start">
            <div v-for="indicator in trustIndicators" :key="indicator.text" class="flex items-center text-gray-600">
              <svg class="w-5 h-5 mr-2" :class="indicator.iconColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="indicator.iconPath"></path>
              </svg>
              <span>{{ indicator.text }}</span>
            </div>
          </div>
        </div>
        
        <!-- Right content with floating mockup - centered on small screens -->
        <div class="relative w-full lg:w-auto lg:max-w-none mx-auto lg:mx-0">
          <!-- Using the new mockup browser component -->
          <DocativeMockupBrowser />
          
          <!-- Floating badges -->
          <div v-for="badge in floatingBadges" :key="badge.text" 
               :class="[
                 'absolute py-2 px-4 rounded-xl shadow-lg transform animate-pulse',
                 badge.position,
                 badge.bgClass
               ]">
            <span class="text-sm font-semibold text-white">{{ badge.text }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import DocativeMockupBrowser from './DocativeMockupBrowser.vue'

const trustIndicators = [
  {
    text: 'Secure & Private',
    iconColor: 'text-green-500',
    iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2-052-.382-3.016z'
  },
  {
    text: 'Setup in Minutes',
    iconColor: 'text-blue-500',
    iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    text: 'Free to Start',
    iconColor: 'text-purple-500',
    iconPath: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z'
  }
]
const floatingBadges = [
  // {
  //   text: 'Pro Coming Soon!',
  //   position: '-bottom-4 -right-4 -rotate-3',
  //   bgClass: 'bg-gradient-to-r from-pink-400 to-purple-600'
  // }
]
</script>