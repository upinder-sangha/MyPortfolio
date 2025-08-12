<!-- components/docative/DocativeGetStarted.vue -->
<template>
  <div class="max-w-4xl mx-auto px-2 sm:px-6 lg:px-8 relative z-10">
    <div class="relative">
      <div class="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur-3xl opacity-20">
      </div>
      <div class="relative bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl shadow-xl p-0">
        <div class="bg-white rounded-3xl p-0 border-2 border-indigo-300">
          <div class="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl px-4 py-8 md:p-12">
            <div class="text-center mb-10">
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get Your Docative</h2>
              <p class="text-lg text-gray-700 max-w-2xl mx-auto">
                Upload your document or provide a website URL and get your personalized chatbot in seconds. It's free to get started!
              </p>
            </div>
            <form @submit.prevent="submitForm" class="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
              <!-- Step 1: Form Input -->
              <div v-if="currentStep === 'form'">
                <!-- Upload Type Selection -->
                <div class="mb-8">
                  <label class="block text-gray-700 font-medium mb-4">Content Source</label>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <!-- File Upload Card -->
                    <div 
                      @click="uploadType = 'file'"
                      class="border-2 rounded-xl p-6 cursor-pointer transition-all duration-300 h-full flex flex-col"
                      :class="uploadType === 'file' ? 'border-indigo-500 bg-indigo-50 shadow-sm' : 'border-gray-200 hover:border-indigo-300'"
                    >
                      <div class="flex items-center mb-4">
                        <div class="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                          <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                          </svg>
                        </div>
                        <h3 class="text-lg font-semibold text-gray-900">Upload Document</h3>
                      </div>
                      <p class="text-gray-600 text-sm mb-4 flex-grow">Upload a PDF, DOCX, or TXT file (up to 5MB)</p>
                      <div v-if="uploadType === 'file'" class="mt-auto">
                        <div class="text-xs font-medium text-indigo-600 flex items-center">
                          <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Selected
                        </div>
                      </div>
                    </div>
                    
                    <!-- Website URL Card -->
                    <div 
                      @click="uploadType = 'url'"
                      class="border-2 rounded-xl p-6 cursor-pointer transition-all duration-300 h-full flex flex-col"
                      :class="uploadType === 'url' ? 'border-indigo-500 bg-indigo-50 shadow-sm' : 'border-gray-200 hover:border-indigo-300'"
                    >
                      <div class="flex items-center mb-4">
                        <div class="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                          <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                          </svg>
                        </div>
                        <h3 class="text-lg font-semibold text-gray-900">Website URL</h3>
                      </div>
                      <p class="text-gray-600 text-sm mb-4 flex-grow">We'll scrape content from your website (up to 20 pages)</p>
                      <div v-if="uploadType === 'url'" class="mt-auto">
                        <div class="text-xs font-medium text-indigo-600 flex items-center">
                          <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Selected
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- File Upload Area -->
                <div v-if="uploadType === 'file'" class="mb-6">
                  <label class="block text-gray-700 font-medium mb-2">Upload Your Document</label>
                  <div @dragover.prevent="dragOver = true" @dragleave.prevent="dragOver = false"
                    @drop.prevent="handleFileDrop"
                    class="border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-300"
                    :class="dragOver ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300 hover:border-indigo-400'"
                    @click="$refs.fileInput.click()">
                    <input ref="fileInput" type="file" class="hidden" @change="handleFileChange"
                      accept=".pdf,.docx,.txt">
                    <div class="flex flex-col items-center justify-center">
                      <svg class="mx-auto h-12 w-12 text-gray-400 mb-3" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12">
                        </path>
                      </svg>
                      <p class="text-sm text-gray-600">
                        <span class="font-medium text-indigo-600">Click to upload</span> or drag and drop
                      </p>
                      <p class="text-xs text-gray-500 mt-1">PDF, DOCX, TXT up to 5MB</p>
                    </div>
                  </div>
                  <div v-if="selectedFile" class="mt-2 flex items-center text-sm text-gray-600">
                    <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-500" fill="none" stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {{ selectedFile.name }}
                  </div>
                  <p v-if="errors.file" class="mt-1 text-sm text-red-600">{{ errors.file }}</p>
                </div>
                
                <!-- URL Input -->
                <div v-if="uploadType === 'url'" class="mb-6">
                  <label for="url" class="block text-gray-700 font-medium mb-2">Website URL</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                      </svg>
                    </div>
                    <input 
                      id="url" 
                      v-model="form.url" 
                      type="text" 
                      class="w-full pl-10 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                      placeholder="www.example.com"
                    >
                  </div>
                  <p class="mt-1 text-sm text-gray-500">
                    We'll scrape content from this URL and its subpages (up to 20 pages)
                  </p>
                  <p v-if="errors.url" class="mt-1 text-sm text-red-600">{{ errors.url }}</p>
                </div>
                
                <!-- Name Input -->
                <div class="mb-6">
                  <label for="name" class="block text-gray-700 font-medium mb-2">Name</label>
                  <input id="name" v-model="form.name" type="text"
                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                    placeholder="Your Name or Company Name (The name you want to display)">
                  <p v-if="errors.name" class="mt-1 text-sm text-red-600">{{ errors.name }}</p>
                </div>
                
                <!-- Email Input -->
                <div class="mb-8">
                  <label for="email" class="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input id="email" v-model="form.email" type="email"
                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                    placeholder="you@example.com">
                  <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
                </div>
                
                <!-- Submit Button -->
                <div class="text-center">
                  <button type="submit"
                    class="relative px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-xl w-full md:w-auto"
                    :disabled="isSubmitting">
                    <span v-if="isSubmitting" class="flex items-center justify-center">
                      <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                        </circle>
                        <path class="opacity-75" fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                        </path>
                      </svg>
                      Processing...
                    </span>
                    <span v-else class="relative z-10">Generate My Chatbot</span>
                    <span
                      class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 hover:opacity-100 transition-opacity duration-500"></span>
                  </button>
                </div>
              </div>
              
              <!-- Step 2: OTP Verification -->
              <div v-else-if="currentStep === 'otp'" class="text-center py-6">
                <div class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z">
                    </path>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-2">One Last Step!</h3>
                <p class="text-gray-600 mb-6">
                  We've sent a verification code to <span class="font-semibold">{{ form.email }}</span>.
                  Please enter the code below to complete your chatbot creation.
                </p>
                <div class="mb-6">
                  <label for="otp" class="block text-gray-700 font-medium mb-2">Verification Code</label>
                  <input id="otp" v-model="otpCode" type="text" maxlength="6"
                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 text-center text-lg tracking-widest"
                    placeholder="000000">
                  <p v-if="errors.otp" class="mt-1 text-sm text-red-600">{{ errors.otp }}</p>
                </div>
                <div class="flex flex-col sm:flex-row gap-4 justify-center mb-4">
                  <button type="button" @click="verifyOTP"
                    class="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    :disabled="isProcessing || !otpCode.trim()">
                    <span v-if="isVerifying" class="flex items-center justify-center">
                      <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                        </circle>
                        <path class="opacity-75" fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                        </path>
                      </svg>
                      Verifying...
                    </span>
                    <span v-else>Verify & Create Chatbot</span>
                  </button>
                  <button type="button" @click="resendOTP"
                    class="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors duration-300"
                    :disabled="otpResendDisabled">
                    <span v-if="otpResendDisabled">Resend in {{ otpCountdown }}s</span>
                    <span v-else>Resend Code</span>
                  </button>
                </div>
                <button type="button" @click="goBackToForm"
                  class="text-sm text-indigo-600 hover:text-indigo-800 transition-colors duration-300">
                  ← Back to form
                </button>
              </div>
              
              <!-- Step 3: Processing -->
              <div v-else-if="currentStep === 'processing'" class="text-center py-10">
                <div class="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg class="animate-spin h-10 w-10 text-white" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-4">Creating Your Chatbot</h3>
                <div class="bg-gray-50 rounded-xl p-6 mb-6 max-w-md mx-auto">
                  <p class="text-gray-700 mb-4">
                    We're now processing your {{ uploadType === 'file' ? 'document' : 'website' }} and creating your personalized chatbot. This may take a moment.
                  </p>
                  <p class="text-gray-700">
                    You can safely leave this page. We'll send your chatbot instructions to <span class="font-semibold">{{ form.email }}</span> once it's ready.
                  </p>
                </div>
                <div v-if="processingProgress" class="w-full max-w-md mx-auto bg-gray-200 rounded-full h-2.5 mb-4">
                  <div class="bg-indigo-600 h-2.5 rounded-full transition-all duration-500" :style="{ width: processingProgress + '%' }"></div>
                </div>
                <p v-if="processingProgress" class="text-sm text-gray-600">{{ processingProgress }}% complete</p>
              </div>
              
              <!-- Step 4: Success Message -->
              <div v-else-if="currentStep === 'success'" class="text-center py-8">
                <div
                  class="w-20 h-20 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-3">Check Your Email!</h3>
                <p class="text-gray-700 mb-6 max-w-md mx-auto">
                  We've sent your personalized script tag to <span class="font-semibold">{{ form.email }}</span> along
                  with the instructions to integrate it with your website.
                  Simply add it to your website to activate your chatbot.
                </p>
                <div class="bg-gray-50 rounded-xl p-4 mb-6 max-w-md mx-auto">
                  <div class="flex justify-between items-center mb-2">
                    <span class="text-sm font-medium text-gray-700">Your Script Tag:</span>
                    <button type="button" @click="copyScriptTag"
                      class="flex items-center text-sm text-indigo-600 hover:text-indigo-800 transition-colors duration-200">
                      <svg v-if="!copied" class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z">
                        </path>
                      </svg>
                      <svg v-else class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {{ copied ? 'Copied!' : 'Copy' }}
                    </button>
                  </div>
                  <div
                    class="text-xs font-mono text-gray-700 overflow-x-auto p-3 bg-gray-100 rounded-lg border border-gray-200">
                    {{ scriptTag }}
                  </div>
                </div>
                <button type="button" @click="resetForm"
                  class="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Create Another Chatbot
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Confirmation Modal -->
    <div v-if="showConfirmation" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div
        class="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 transform transition-all duration-300 scale-95 animate-scaleIn">
        <div class="text-center">
          <div class="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z">
              </path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">Replace Your Existing Chatbot?</h3>
          <p class="text-gray-600 mb-6">
            You already have a Docative chatbot. Creating a new one will replace your existing bot, which will no longer
            work. Are you sure you want to continue?
          </p>
          <div class="flex flex-col sm:flex-row gap-3 justify-center">
            <button @click="cancelReplace"
              class="px-5 py-2.5 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors duration-300">
              Cancel
            </button>
            <button @click="proceedWithUpload"
              class="px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300">
              Yes, Replace My Chatbot
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
// Change the base URL here to point to your API server
// const API_BASE_URL = 'http://127.0.0.1:8000'
// const API_BASE_URL = 'http://13.222.155.33:8000'
const API_BASE_URL = 'https://docative.duckdns.org'

const form = ref({
  file: null,
  url: '',
  name: '',
  email: ''
})
const selectedFile = ref(null)
const dragOver = ref(false)
const isSubmitting = ref(false)
const isVerifying = ref(false)
const isProcessing = ref(false) // Track overall processing state
const scriptTag = ref('') // Store script tag from API response
const copied = ref(false) // Track if script tag has been copied
const showConfirmation = ref(false) // Track if confirmation modal should be shown
const existingBotId = ref('') // Store existing bot ID
const currentStep = ref('form') // Track current step: 'form', 'otp', 'processing', 'success'
const otpCode = ref('') // Store OTP code entered by user
const otpResendDisabled = ref(false) // Track if resend button is disabled
const otpCountdown = ref(60) // Countdown for resend button
const uploadType = ref('file') // Track upload type: 'file' or 'url'
const processingProgress = ref(0) // Track processing progress
const errors = ref({
  file: '',
  url: '',
  name: '',
  email: '',
  otp: ''
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

const normalizeUrl = (url) => {
  if (!url) return url
  url = url.trim()
  
  // Add protocol if missing
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = 'https://' + url
  }
  
  // Remove trailing slash if present
  if (url.endsWith('/')) {
    url = url.slice(0, -1)
  }
  
  return url
}

const validateForm = () => {
  let isValid = true
  // Reset errors
  errors.value = {
    file: '',
    url: '',
    name: '',
    email: '',
    otp: ''
  }
  
  // Validate based on upload type
  if (uploadType.value === 'file') {
    if (!form.value.file) {
      errors.value.file = 'Please upload a file'
      isValid = false
    }
  } else {
    if (!form.value.url.trim()) {
      errors.value.url = 'Please enter a website URL'
      isValid = false
    } else {
      // Normalize URL for validation
      let urlToValidate = normalizeUrl(form.value.url)
      try {
        new URL(urlToValidate)
        // Update the form value with normalized URL
        form.value.url = urlToValidate
      } catch {
        errors.value.url = 'Please enter a valid URL (e.g., www.example.com)'
        isValid = false
      }
    }
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

const validateOTP = () => {
  // Reset OTP error
  errors.value.otp = ''
  // Validate OTP (6 digits)
  if (!otpCode.value.trim()) {
    errors.value.otp = 'Please enter the verification code'
    return false
  }
  if (!/^\d{6}$/.test(otpCode.value)) {
    errors.value.otp = 'Please enter a valid 6-digit code'
    return false
  }
  return true
}

const checkExistingBot = async () => {
  try {
    const response = await $fetch(`${API_BASE_URL}/check-existing-bot`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        email: form.value.email
      })
    })
    if (response.has_existing_bot) {
      existingBotId.value = response.bot_id
      showConfirmation.value = true
      return true
    }
    return false
  } catch (error) {
    console.error('Error checking existing bot:', error)
    return false
  }
}

const submitForm = async () => {
  if (!validateForm()) return
  isSubmitting.value = true
  try {
    // Send OTP to email
    const response = await $fetch(`${API_BASE_URL}/send-otp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        email: form.value.email
      })
    })
    // Move to OTP verification step
    currentStep.value = 'otp'
    // Start countdown for resend button
    startOTPCountdown()
  } catch (error) {
    console.error('Error sending OTP:', error)
    alert('There was an error sending the verification code. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}

const verifyOTP = async () => {
  if (!validateOTP()) return
  isVerifying.value = true
  isProcessing.value = true  // Set overall processing state
  try {
    // Verify OTP
    const response = await $fetch(`${API_BASE_URL}/verify-otp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: form.value.email,
        otp: otpCode.value
      })
    })
    // Check if user already has a bot
    const hasExistingBot = await checkExistingBot()
    if (hasExistingBot) {
      // Don't reset isProcessing here since we're still in the process
      return // Wait for user confirmation
    }
    // Proceed with upload
    proceedWithUpload()
  } catch (error) {
    console.error('Error verifying OTP:', error)
    errors.value.otp = 'Invalid or expired verification code'
    isVerifying.value = false
    isProcessing.value = false  // Reset processing state on error
  }
  // Note: Don't reset isProcessing in finally block since proceedWithUpload will handle it
}

const resendOTP = async () => {
  try {
    // Send OTP again
    const response = await $fetch(`${API_BASE_URL}/send-otp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        email: form.value.email
      })
    })
    // Start countdown for resend button
    startOTPCountdown()
    // Clear OTP input
    otpCode.value = ''
    errors.value.otp = ''
  } catch (error) {
    console.error('Error resending OTP:', error)
    alert('There was an error resending the verification code. Please try again.')
  }
}

const startOTPCountdown = () => {
  otpResendDisabled.value = true
  otpCountdown.value = 60
  const countdownInterval = setInterval(() => {
    otpCountdown.value--
    if (otpCountdown.value <= 0) {
      clearInterval(countdownInterval)
      otpResendDisabled.value = false
    }
  }, 1000)
}

const goBackToForm = () => {
  currentStep.value = 'form'
  otpCode.value = ''
  errors.value.otp = ''
}

const proceedWithUpload = async () => {
  isSubmitting.value = true
  showConfirmation.value = false
  isVerifying.value = false
  // Move to processing step
  currentStep.value = 'processing'
  // Simulate progress
  simulateProgress()
  
  try {
    // Create FormData to send data
    const formData = new FormData()
    if (uploadType.value === 'file') {
      formData.append('file', form.value.file)
    } else {
      // Normalize URL before sending
      const normalizedUrl = normalizeUrl(form.value.url)
      formData.append('url', normalizedUrl)
    }
    formData.append('email', form.value.email)
    formData.append('name', form.value.name)
    formData.append('replace', 'true') // Always set replace to true when proceeding
    
    // Send to API
    const response = await $fetch(`${API_BASE_URL}/upload`, {
      method: 'POST',
      body: formData
    })
    
    // Store script tag from response
    scriptTag.value = response.script_tag
    // Handle success
    currentStep.value = 'success'
  } catch (error) {
    // Handle error
    console.error('Error submitting form:', error)
    console.error('Error response data:', error.data)
    
    // Check if it's an existing bot error
    if (error.data && error.data.error === 'existing_bot') {
      existingBotId.value = error.data.bot_id
      showConfirmation.value = true
      currentStep.value = 'form'
    } else if (error.data && error.data.error === 'email_not_verified') {
      // Go back to OTP step
      currentStep.value = 'otp'
      errors.value.otp = 'Email verification required. Please request a new code.'
    } else {
      // Show more detailed error message if available
      let errorMessage = 'There was an error processing your request. Please try again.'
      
      if (error.data && error.data.detail) {
        errorMessage = error.data.detail
      } else if (error.status === 422) {
        errorMessage = 'Invalid form data. Please check your inputs and try again.'
      } else if (error.status === 400) {
        // Handle specific URL errors
        if (error.data && error.data.detail) {
          if (error.data.detail.includes("Unable to connect")) {
            errorMessage = "Unable to connect to the provided URL. Please check if the website is accessible."
          } else if (error.data.detail.includes("timed out")) {
            errorMessage = "The request to the website timed out. Please try again later."
          } else if (error.data.detail.includes("robots.txt")) {
            errorMessage = "This website does not allow scraping according to its robots.txt file."
          } else if (error.data.detail.includes("Unable to extract content")) {
            errorMessage = "Unable to extract content from the provided URL. The website might be empty, blocked, or not accessible."
          } else {
            errorMessage = error.data.detail
          }
        } else {
          errorMessage = 'Bad request. Please check your inputs and try again.'
        }
      }
      
      alert(errorMessage)
      currentStep.value = 'form'
    }
  } finally {
    isSubmitting.value = false
    isProcessing.value = false  // Reset all processing states when done
  }
}

const simulateProgress = () => {
  processingProgress.value = 0
  const interval = setInterval(() => {
    processingProgress.value += 10
    if (processingProgress.value >= 90) {
      clearInterval(interval)
    }
  }, 500)
}

const cancelReplace = () => {
  showConfirmation.value = false
  isSubmitting.value = false
  isVerifying.value = false
  isProcessing.value = false  // Reset all processing states when canceling
}

const resetForm = () => {
  form.value = {
    file: null,
    url: '',
    name: '',
    email: ''
  }
  selectedFile.value = null
  uploadType.value = 'file'
  currentStep.value = 'form'
  scriptTag.value = ''
  copied.value = false
  showConfirmation.value = false
  existingBotId.value = ''
  otpCode.value = ''
  processingProgress.value = 0
  // Reset all processing states
  isSubmitting.value = false
  isVerifying.value = false
  isProcessing.value = false
  errors.value = {
    file: '',
    url: '',
    name: '',
    email: '',
    otp: ''
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

<style scoped>
/* Add animation for modal */
@keyframes scaleIn {
  from {
    transform: scale(0.95);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
.animate-scaleIn {
  animation: scaleIn 0.3s ease-out forwards;
}
</style>