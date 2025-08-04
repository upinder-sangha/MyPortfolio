<!-- components/docative/DocativeWhoIsItFor.vue -->
<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Who Is Docative For?</h2>
      <p class="text-lg text-gray-700 max-w-3xl mx-auto">
        Docative is designed for anyone who wants to create an interactive chatbot from their documents. Here are some of our most common use cases:
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      <div v-for="(useCase, index) in useCases" :key="index" 
           class="group relative">
        <div class="absolute -inset-1 rounded-2xl blur opacity-25 transition duration-1000 group-hover:opacity-50"
             :class="useCase.bgBlurClass"></div>
        <div class="relative bg-white rounded-2xl shadow-lg p-8 h-full border border-white">
          <div class="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
               :class="useCase.bgClass">
            <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="useCase.iconPath"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">{{ useCase.title }}</h3>
          <p class="text-gray-600">{{ useCase.description }}</p>
        </div>
      </div>
    </div>
    
      <div class="max-w-3xl mx-auto text-center">
        <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Basically, It's For Everyone!</h3>
        <p class="text-lg text-gray-700 mb-6">
          Whether you're an individual, small business, or enterprise, if you have a website and need a chatbot that knows your content, Docative is for you.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <div v-for="(tag, index) in universalTags" :key="index" 
               class="px-4 py-2 rounded-full text-sm font-medium"
               :class="tag.bgClass">
            {{ tag.text }}
          </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const useCases = [
  {
    title: 'Personal Websites',
    description: 'Upload your resume, CV, or portfolio to create a chatbot that represents you. Perfect for freelancers, job seekers, and professionals who want to make a strong impression.',
    iconPath: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
    bgClass: 'bg-gradient-to-r from-indigo-500 to-purple-600',
    bgBlurClass: 'bg-gradient-to-r from-indigo-500 to-purple-600'
  },
  {
    title: 'Small Businesses',
    description: 'Create a chatbot that knows your products, services, and business hours. Provide instant customer support without hiring additional staff.',
    iconPath: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    bgClass: 'bg-gradient-to-r from-purple-500 to-pink-600',
    bgBlurClass: 'bg-gradient-to-r from-purple-500 to-pink-600'
  },
  {
    title: 'Product Documentation',
    description: 'Turn your product manuals and user guides into interactive chatbots. Help users find answers quickly and reduce support tickets.',
    iconPath: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    bgClass: 'bg-gradient-to-r from-pink-500 to-rose-600',
    bgBlurClass: 'bg-gradient-to-r from-pink-500 to-rose-600'
  },
  {
    title: 'API & Library Documentation',
    description: 'Make your technical documentation interactive. Developers can ask questions and get code examples or explanations instantly.',
    iconPath: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    bgClass: 'bg-gradient-to-r from-teal-500 to-cyan-600',
    bgBlurClass: 'bg-gradient-to-r from-teal-500 to-cyan-600'
  },
  {
    title: 'Educational Content',
    description: 'Transform course materials, textbooks, or study guides into interactive learning experiences. Students can ask questions and get answers based on the content.',
    iconPath: 'M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z',
    bgClass: 'bg-gradient-to-r from-amber-500 to-orange-600',
    bgBlurClass: 'bg-gradient-to-r from-amber-500 to-orange-600'
  },
  {
    title: 'Event Information',
    description: 'For conferences, webinars, or any event, create a chatbot that provides details about schedules, speakers, and FAQs.',
    iconPath: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    bgClass: 'bg-gradient-to-r from-emerald-500 to-teal-600',
    bgBlurClass: 'bg-gradient-to-r from-emerald-500 to-teal-600'
  }
]

const universalTags = [
  {
    text: 'Content Creators',
    bgClass: 'bg-indigo-100 text-indigo-800'
  },
  {
    text: 'Developers',
    bgClass: 'bg-purple-100 text-purple-800'
  },
  {
    text: 'Marketers',
    bgClass: 'bg-pink-100 text-pink-800'
  },
  {
    text: 'Educators',
    bgClass: 'bg-teal-100 text-teal-800'
  },
  {
    text: 'Support Teams',
    bgClass: 'bg-amber-100 text-amber-800'
  },
  {
    text: 'E-commerce',
    bgClass: 'bg-emerald-100 text-emerald-800'
  }
]
</script>