<!-- components/docative/DocativeHero.vue -->
<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <!-- Left content -->
      <div class="space-y-8">
        <div class="space-y-6">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span class="block">Make Your</span>
            <span class="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 animate-gradient">
              Docs
            </span>
            <span class="block">Talkative</span>
          </h1>
          <p class="text-lg md:text-xl text-gray-700 max-w-2xl">
            Transform your static content into interactive conversations. Upload, customize, and embed AI-powered chatbot in minutes.
          </p>
        </div>
        
        <div class="flex flex-col sm:flex-row gap-4">
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
        <div class="flex flex-wrap gap-6 pt-4">
          <div v-for="indicator in trustIndicators" :key="indicator.text" class="flex items-center text-gray-600">
            <svg class="w-5 h-5 mr-2" :class="indicator.iconColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="indicator.iconPath"></path>
            </svg>
            <span>{{ indicator.text }}</span>
          </div>
        </div>
      </div>
      
      <!-- Right content with floating mockup -->
      <div class="relative">
        <div class="relative transform transition-transform duration-1000 hover:rotate-1 hover:scale-105">
          <!-- Mockup Browser -->
          <div class="bg-gray-800 rounded-t-2xl p-4 flex items-center space-x-2">
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
            <div class="text-gray-400 text-sm ml-2">your-website.com</div>
          </div>
          
          <!-- Mockup Content -->
          <div class="bg-white rounded-b-2xl shadow-2xl overflow-hidden border-8 border-gray-800">
            <div class="p-6 bg-gradient-to-r from-indigo-50 to-purple-50">
              <div class="bg-white rounded-xl shadow-lg p-5 border border-gray-100">
                <!-- Chat Header -->
                <div class="flex items-center mb-4 pb-3 border-b border-gray-100">
                  <div class="w-10 h-10 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mr-3 shadow-md">
                    <span class="text-white font-bold">D</span>
                  </div>
                  <div>
                    <div class="font-semibold text-gray-900">John's Assistant</div>
                    <div class="text-xs text-gray-500">Digital Representative</div>
                  </div>
                </div>
                
                <!-- Chat Messages -->
                <div class="space-y-4 mb-4">
                  <div v-for="(message, index) in chatMessages" :key="index" 
                       :class="['flex items-start', message.sender === 'user' ? 'justify-end' : '']">
                    <div v-if="message.sender !== 'user'" class="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-2 flex-shrink-0">
                      <svg class="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    <div :class="[
                      'rounded-2xl p-3 max-w-[80%]',
                      message.sender === 'user' 
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-tr-none' 
                        : 'bg-indigo-50 rounded-tl-none'
                    ]">
                      <p class="text-sm">{{ message.text }}</p>
                    </div>
                  </div>
                </div>
                
                <!-- Chat Input -->
                <div class="flex items-center bg-gray-50 rounded-xl p-2 border border-gray-200">
                  <input type="text" placeholder="Ask me anything..." class="flex-1 bg-transparent border-none focus:outline-none px-2 py-1 text-sm">
                  <button class="p-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
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
</template>

<script setup>
const trustIndicators = [
  {
    text: 'Secure & Private',
    iconColor: 'text-green-500',
    iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
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
  {
    text: 'Pro Coming Soon!',
    position: '-top-4 -right-4 rotate-3',
    bgClass: 'bg-gradient-to-r from-yellow-400 to-orange-500'
  }
]

const chatMessages = [
  {
    sender: 'bot',
    text: 'Hi there! I\'m John\'s Virtual Assistant. Feel free to ask me anything about John.'
  },
  {
    sender: 'user',
    text: 'What can he do for me?'
  },
  {
    sender: 'bot',
    text: 'John Doe is a Junior Data Analyst with strong skills in data analytics, statistical modeling, and dashboard development. He specializes in using Python, SQL, Power BI, and has experience in AWS. John can provide valuable insights from your data to support decision-making.'
  }
]
</script>