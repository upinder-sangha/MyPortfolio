<!-- components/docative/DocativeHowItWorks.vue -->
<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
      <p class="text-lg text-gray-700 max-w-3xl mx-auto">
        Creating your own docative is as easy as 1-2-3. Get started in minutes with our simple process.
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
      <!-- Connecting line -->
      <div class="hidden md:block absolute top-24 left-1/4 right-1/4 h-1 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 rounded-full"></div>
      
      <div v-for="(step, index) in steps" :key="index" class="relative group">
        <div class="absolute -inset-1 rounded-2xl blur opacity-25 transition duration-1000 group-hover:opacity-50"
             :class="step.bgBlurClass"></div>
        <div class="relative bg-white rounded-2xl shadow-xl p-8 h-full border border-white">
          <div class="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto shadow-lg"
               :class="step.bgClass">
            {{ index + 1 }}
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-4 text-center">{{ step.title }}</h3>
          <p class="text-gray-700 text-center mb-6">{{ step.description }}</p>
          <div class="flex justify-center">
            <div :class="step.contentClass">
              <div v-if="index === 0" class="flex flex-col items-center justify-center">
                <svg class="w-8 h-8 mb-2" :class="step.iconColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="step.iconPath"></path>
                </svg>
                <p class="text-sm" :class="step.textColor">{{ step.contentText }}</p>
                <p class="text-xs" :class="step.subTextColor">{{ step.subText }}</p>
              </div>
              
              <div v-else-if="index === 1" class="flex items-center mb-2">
                <svg class="w-6 h-6 mr-2" :class="step.iconColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="step.iconPath"></path>
                </svg>
                <span class="text-sm" :class="step.textColor">{{ step.contentText }}</span>
              </div>
              
              <div v-else class="bg-white rounded-lg shadow-sm p-3 mb-3 border">
                <div class="flex items-center mb-2">
                  <div class="w-6 h-6 rounded-lg flex items-center justify-center mr-2" :class="step.iconBgClass">
                    <span class="text-white text-xs font-bold">D</span>
                  </div>
                  <div class="text-sm font-semibold text-gray-900">AI Assistant</div>
                </div>
                <div class="rounded-lg p-2 text-xs text-gray-800 mb-2" :class="step.messageBgClass">
                  {{ step.contentText }}
                </div>
                <div class="flex items-center">
                  <input type="text" placeholder="Ask a question..." class="flex-1 p-1 border rounded text-xs">
                  <button class="ml-1 p-1 rounded" :class="step.buttonClass">
                    <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                    </svg>
                  </button>
                </div>
              </div>
              
              <p v-if="index === 2" class="text-xs mt-2 text-center" :class="step.subTextColor">{{ step.subText }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const steps = [
  {
    title: 'Upload Your Content',
    description: 'Upload your PDF, DOCX, or TXT file, or provide a website URL containing the content you want your chatbot to know.',
    iconPath: 'M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12',
    iconColor: 'text-indigo-400',
    textColor: 'text-indigo-600',
    subTextColor: 'text-indigo-500',
    contentText: 'Drag & drop your file or enter URL',
    subText: 'PDF, DOCX, TXT, or Website',
    contentClass: 'bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-4 w-full max-w-xs border-2 border-dashed border-indigo-200',
    bgClass: 'bg-gradient-to-r from-indigo-500 to-purple-600',
    bgBlurClass: 'bg-gradient-to-r from-indigo-500 to-purple-600'
  },
  {
    title: 'Receive Your Script',
    description: 'Enter your email and name, then receive a personalized script tag via email to embed on your site.',
    iconPath: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    iconColor: 'text-purple-400',
    textColor: 'text-purple-600',
    contentText: 'you@example.com',
    contentClass: 'bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 w-full max-w-xs',
    bgClass: 'bg-gradient-to-r from-purple-500 to-pink-600',
    bgBlurClass: 'bg-gradient-to-r from-purple-500 to-pink-600'
  },
  {
    title: 'Embed and Start Chatting',
    description: 'Add the script to your website and immediately start interacting with your content through the chatbot.',
    iconPath: 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8',
    iconColor: 'text-pink-500',
    textColor: 'text-pink-500',
    subTextColor: 'text-pink-500',
    contentText: 'Hello! How can I help you today?',
    subText: 'Your chatbot is now live!',
    contentClass: 'bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-4 w-full max-w-xs',
    iconBgClass: 'bg-gradient-to-r from-pink-500 to-rose-600',
    messageBgClass: 'bg-pink-50',
    buttonClass: 'bg-gradient-to-r from-pink-500 to-rose-600',
    bgClass: 'bg-gradient-to-r from-pink-500 to-rose-600',
    bgBlurClass: 'bg-gradient-to-r from-pink-500 to-rose-600'
  }
]
</script>