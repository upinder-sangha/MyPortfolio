<!-- components/docative/DocativeFAQ.vue -->
<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
      <p class="text-lg text-gray-700 max-w-3xl mx-auto">
        Find answers to common questions about Docative.
      </p>
    </div>
    
    <div class="space-y-4">
      <div v-for="(faq, index) in faqs" :key="index"
           class="group relative overflow-hidden rounded-xl bg-white shadow-md transition-all duration-500 hover:shadow-lg">
        <div class="absolute inset-0 rounded-xl blur opacity-0 group-hover:opacity-5 transition-opacity duration-500"
             :class="faq.bgBlurClass"></div>
        <button 
          @click="toggleFAQ(index)"
          class="relative z-10 flex justify-between items-center w-full p-6 text-left focus:outline-none"
        >
          <h3 class="text-lg font-semibold text-gray-900">{{ faq.question }}</h3>
          <svg 
            class="w-5 h-5 text-gray-500 transform transition-transform duration-300"
            :class="{ 'rotate-180': openFAQIndex === index }"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <div 
          class="relative z-10 px-6 pb-6 pt-0 text-gray-700 border-t border-gray-100"
          :class="{ 'hidden': openFAQIndex !== index }"
        >
          <p>{{ faq.answer }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const openFAQIndex = ref(null)

const toggleFAQ = (index) => {
  if (openFAQIndex.value === index) {
    openFAQIndex.value = null
  } else {
    openFAQIndex.value = index
  }
}

const faqs = [
  {
    question: 'What file types work with Docative?',
    answer: 'Docative currently supports PDF, DOCX, and TXT files. We\'re working on adding support for more file types in the future.',
    bgBlurClass: 'bg-gradient-to-r from-indigo-500 to-purple-600'
  },
  {
    question: 'How do I add the chatbot to my site?',
    answer: 'After uploading your document and providing your email, you\'ll receive a personalized script tag via email. Simply copy and paste this script into the HTML of your website, preferably just before the closing </body> tag. The chatbot will automatically appear on your site.',
    bgBlurClass: 'bg-gradient-to-r from-purple-500 to-pink-600'
  },
  {
    question: 'Is my data safe?',
    answer: 'Yes, absolutely. We take data security very seriously. All documents are processed with end-to-end encryption, and we use industry-standard security practices to protect your information. Your documents are only used to train your specific chatbot and are not shared with third parties.',
    bgBlurClass: 'bg-gradient-to-r from-pink-500 to-rose-600'
  }
]
</script>