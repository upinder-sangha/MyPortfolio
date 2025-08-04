<!-- components/docative/DocativeGetStarted.vue -->
<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div class="relative">
      <div class="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur-3xl opacity-20"></div>
      <div class="relative bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl shadow-xl p-0">
        <div class="bg-white rounded-3xl p-0 border-2 border-indigo-300">
          <div class="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 md:p-12">
            <div class="text-center mb-10">
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get Your Docative</h2>
              <p class="text-lg text-gray-700 max-w-2xl mx-auto">
                Upload your document and get your personalized chatbot in seconds. It's free to get started!
              </p>
            </div>
            
            <form @submit.prevent="submitForm" class="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
              <div v-if="!formSubmitted">
                <!-- File Upload Area -->
                <div class="mb-6">
                  <label class="block text-gray-700 font-medium mb-2">Upload Your Document</label>
                  <div 
                    @dragover.prevent="dragOver = true"
                    @dragleave.prevent="dragOver = false"
                    @drop.prevent="handleFileDrop"
                    class="border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-300"
                    :class="dragOver ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300 hover:border-indigo-400'"
                    @click="$refs.fileInput.click()"
                  >
                    <input 
                      ref="fileInput"
                      type="file" 
                      class="hidden" 
                      @change="handleFileChange"
                      accept=".pdf,.docx,.txt"
                    >
                    <div class="flex flex-col items-center justify-center">
                      <svg class="mx-auto h-12 w-12 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                      </svg>
                      <p class="text-sm text-gray-600">
                        <span class="font-medium text-indigo-600">Click to upload</span> or drag and drop
                      </p>
                      <p class="text-xs text-gray-500 mt-1">PDF, DOCX, TXT up to 5MB</p>
                    </div>
                  </div>
                  <div v-if="selectedFile" class="mt-2 flex items-center text-sm text-gray-600">
                    <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {{ selectedFile.name }}
                  </div>
                  <p v-if="errors.file" class="mt-1 text-sm text-red-600">{{ errors.file }}</p>
                </div>
                
                <!-- Name Input -->
                <div class="mb-6">
                  <label for="name" class="block text-gray-700 font-medium mb-2">Name</label>
                  <input 
                    id="name"
                    v-model="form.name"
                    type="text" 
                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                    placeholder="Your Name or Company Name (The name you want to display)"
                  >
                  <p v-if="errors.name" class="mt-1 text-sm text-red-600">{{ errors.name }}</p>
                </div>
                
                <!-- Email Input -->
                <div class="mb-8">
                  <label for="email" class="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input 
                    id="email"
                    v-model="form.email"
                    type="email" 
                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                    placeholder="you@example.com"
                  >
                  <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
                </div>
                
                <!-- Submit Button -->
                <div class="text-center">
                  <button 
                    type="submit"
                    class="relative px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-xl w-full md:w-auto"
                    :disabled="isSubmitting"
                  >
                    <span v-if="isSubmitting" class="flex items-center justify-center">
                      <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                    <span v-else class="relative z-10">Generate My Chatbot</span>
                    <span class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 hover:opacity-100 transition-opacity duration-500"></span>
                  </button>
                </div>
              </div>
              
              <!-- Success Message -->
              <div v-else class="text-center py-8">
                <div class="w-20 h-20 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-3">Check Your Email!</h3>
                <p class="text-gray-700 mb-6 max-w-md mx-auto">
                  We've sent your personalized script tag to <span class="font-semibold">{{ form.email }}</span> along with the instructions to integrate it with your website. 
                  Simply add it to your website to activate your chatbot.
                </p>
                <div class="bg-gray-50 rounded-xl p-4 mb-6 max-w-md mx-auto">
                  <div class="flex justify-between items-center mb-2">
                    <span class="text-sm font-medium text-gray-700">Your Script Tag:</span>
                    <button 
                      type="button"
                      @click="copyScriptTag"
                      class="flex items-center text-sm text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
                    >
                      <svg v-if="!copied" class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                      </svg>
                      <svg v-else class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {{ copied ? 'Copied!' : 'Copy' }}
                    </button>
                  </div>
                  <div class="text-xs font-mono text-gray-700 overflow-x-auto p-3 bg-gray-100 rounded-lg border border-gray-200">
                    {{ scriptTag }}
                  </div>
                </div>
                <button 
                  type="button"
                  @click="resetForm"
                  class="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Create Another Chatbot
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  file: null,
  name: '',
  email: ''
})

const selectedFile = ref(null)
const dragOver = ref(false)
const isSubmitting = ref(false)
const formSubmitted = ref(false)
const scriptTag = ref('') // Store script tag from API response
const copied = ref(false) // Track if script tag has been copied
const errors = ref({
  file: '',
  name: '',
  email: ''
})

const handleFileDrop = (e) => {
  dragOver.value = false
  const files = e.dataTransfer.files
  if (files.length) {
    validateAndSetFile(files[0])
  }
}

const handleFileChange = (e) => {
  if (e.target.files.length) {
    validateAndSetFile(e.target.files[0])
  }
}

const validateAndSetFile = (file) => {
  // Reset file error
  errors.value.file = ''
  
  // Check file type
  const validTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain']
  if (!validTypes.includes(file.type)) {
    errors.value.file = 'Please upload a PDF, DOCX, or TXT file'
    return
  }
  
  // Check file size (5MB limit)
  if (file.size > 5 * 1024 * 1024) {
    errors.value.file = 'File size must be less than 5MB'
    return
  }
  
  selectedFile.value = file
  form.value.file = file
}

const validateForm = () => {
  let isValid = true
  
  // Reset errors
  errors.value = {
    file: '',
    name: '',
    email: ''
  }
  
  // Validate file
  if (!form.value.file) {
    errors.value.file = 'Please upload a file'
    isValid = false
  }
  
  // Validate name
  if (!form.value.name.trim()) {
    errors.value.name = 'Please enter your name'
    isValid = false
  }
  
  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!form.value.email.trim()) {
    errors.value.email = 'Please enter your email'
    isValid = false
  } else if (!emailRegex.test(form.value.email)) {
    errors.value.email = 'Please enter a valid email address'
    isValid = false
  }
  
  return isValid
}

const submitForm = async () => {
  if (!validateForm()) return
  
  isSubmitting.value = true
  
  try {
    // Create FormData to send file
    const formData = new FormData()
    formData.append('file', form.value.file)
    formData.append('email', form.value.email)
    formData.append('name', form.value.name)
    
    // Send to API
    const response = await $fetch('http://localhost:8000/upload', {
      method: 'POST',
      body: formData
    })
    
    // Debug: Log the entire response
    console.log('Full API response:', response)
    
    // Store script tag from response
    scriptTag.value = response.script_tag
    console.log('Script tag:', scriptTag.value)
    
    // Handle success
    formSubmitted.value = true
  } catch (error) {
    // Handle error
    console.error('Error submitting form:', error)
    alert('There was an error processing your request. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}

const resetForm = () => {
  form.value = {
    file: null,
    name: '',
    email: ''
  }
  selectedFile.value = null
  formSubmitted.value = false
  scriptTag.value = ''
  copied.value = false
  errors.value = {
    file: '',
    name: '',
    email: ''
  }
}

const copyScriptTag = async () => {
  try {
    await navigator.clipboard.writeText(scriptTag.value)
    copied.value = true
    
    // Reset copied status after 2 seconds
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy script tag:', err)
    // Fallback for older browsers
    const textArea = document.createElement('textarea')
    textArea.value = scriptTag.value
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
    
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  }
}
</script>