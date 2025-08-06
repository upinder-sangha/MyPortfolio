<!-- components/docative/DocativeMockupBrowser.vue -->
<template>
  <div class="relative transform transition-transform duration-1000 hover:rotate-1 hover:scale-105">
    <!-- Mockup Browser -->
    <div class="bg-gray-800 rounded-t-2xl p-4 flex items-center space-x-2">
      <div class="w-3 h-3 rounded-full bg-red-500"></div>
      <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
      <div class="w-3 h-3 rounded-full bg-green-500"></div>
      <div class="text-gray-400 text-sm ml-2">your-website.com</div>
    </div>
    
    <!-- Mockup Content with Messy Background -->
    <div class="bg-white rounded-b-2xl shadow-2xl overflow-hidden border-8 border-gray-800 relative" style="min-height: 400px;">
      <!-- Messy Background -->
      <div class="absolute inset-0">
        <!-- Base gradient -->
        <div class="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 opacity-70"></div>
        
        <!-- Random shapes to simulate content -->
        <div class="absolute top-4 left-4 w-32 h-4 bg-gray-300 rounded opacity-60"></div>
        <div class="absolute top-4 right-4 w-24 h-4 bg-gray-300 rounded opacity-60"></div>
        <div class="absolute top-12 left-4 w-48 h-3 bg-gray-200 rounded opacity-50"></div>
        <div class="absolute top-20 left-4 w-56 h-3 bg-gray-200 rounded opacity-50"></div>
        <div class="absolute top-28 left-4 w-40 h-3 bg-gray-200 rounded opacity-50"></div>
        
        <div class="absolute top-40 left-4 w-full h-32 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-50"></div>
        <div class="absolute top-40 left-4 w-20 h-20 bg-white rounded-lg shadow-sm opacity-70"></div>
        <div class="absolute top-40 left-28 w-20 h-20 bg-white rounded-lg shadow-sm opacity-70"></div>
        <div class="absolute top-40 left-52 w-20 h-20 bg-white rounded-lg shadow-sm opacity-70"></div>
        
        <div class="absolute top-80 left-4 w-64 h-3 bg-gray-200 rounded opacity-50"></div>
        <div class="absolute top-88 left-4 w-56 h-3 bg-gray-200 rounded opacity-50"></div>
        
        <div class="absolute bottom-20 left-4 right-4 h-16 bg-gradient-to-r from-green-50 to-emerald-50 opacity-50"></div>
        
        <!-- Blur overlay -->
      </div>
      
      <!-- Floating Chat Button (scaled down) -->
      <div class="absolute bottom-4 right-4">
        <button class="relative w-10 h-10 flex items-center justify-center rounded-full text-white p-2 shadow-lg hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 animate-bounce" style="background-color: #467ee5;">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
          </svg>
          <span class="absolute -top-1 -right-1 flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
        </button>
      </div>
      
      <!-- Chat Modal (scaled down) -->
      <div class="absolute bottom-16 right-4 w-[280px] sm:w-[320px] rounded-xl shadow-xl flex flex-col backdrop-blur-sm bg-opacity-95 border border-gray-200 transform scale-90" style="background-color: #FFFFFF;">
        <!-- Chat Header -->
        <div class="p-3 flex justify-between items-center rounded-t-xl" style="background-color: #10b98130; border-color: #E5E7EB;">
          <div class="flex items-center gap-2">
            <div class="w-6 h-6 rounded-full flex items-center justify-center" style="background-color: #10B981;">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
            </div>
            <div>
              <h3 class="m-0 font-sans text-sm font-semibold" style="color: #1F2937;">John's Assistant</h3>
              <p class="m-0 text-xs" style="color: #6B7280;">Digital representative</p>
            </div>
          </div>
          <div class="flex gap-1">
            <button class="bg-transparent border-none cursor-pointer transition-colors duration-200 p-1" style="color: #6B7280;" aria-label="Clear conversation">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
              </svg>
            </button>
            <button class="bg-transparent border-none cursor-pointer transition-colors duration-200 p-1" style="color: #6B7280;" aria-label="Close Virtual Assistant">✕</button>
          </div>
        </div>
        
        <!-- Chat Messages -->
        <div class="flex-1 p-3 overflow-y-auto max-h-[200px] space-y-2" style="background-color: #FFFFFF;">
          <!-- Bot Message -->
          <div class="flex flex-row items-start gap-2 mb-2 animate-slide-in">
            <div class="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style="background-color: #10B981;">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
            </div>
            <div class="p-2 rounded-xl text-xs rounded-bl-none relative max-w-[80%]" style="background-color: #10b98130; color: #1F2937;">
              <div class="message-content">Hi there! I'm John's Virtual Assistant. Feel free to ask me anything about John.</div>
              <div class="absolute bottom-0 left-[-6px] border-l-6 border-b-6 border-l-transparent" style="border-bottom-color: #10b98130;"></div>
              <button class="absolute top-1 right-1 p-0.5 rounded-full bg-transparent hover:bg-black/10 transition-colors duration-200" style="color: #6B7280;">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                </svg>
              </button>
            </div>
          </div>
          
          <!-- Timestamp for bot message -->
          <div class="text-xs text-left ml-8" style="color: #6B7280;">10:30 AM</div>
          
          <!-- User Message -->
          <div class="flex flex-row-reverse items-start gap-2 mb-2 animate-slide-in">
            <div class="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style="background-color: #467ee5;">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
            </div>
            <div class="p-2 rounded-xl text-xs rounded-br-none relative max-w-[80%] text-white" style="background-color: #467ee5;">
              <div class="message-content">What can he do for me?</div>
              <div class="absolute bottom-0 right-[-6px] border-r-6 border-b-6 border-r-transparent" style="border-bottom-color: #467ee5;"></div>
            </div>
          </div>
          
          <!-- Timestamp for user message -->
          <div class="text-xs text-right mr-8" style="color: #6B7280;">10:31 AM</div>
          
          <!-- Bot Message with typing indicator -->
          <div class="flex flex-row items-start gap-2 mb-2 typing-indicator-container">
            <div class="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style="background-color: #10B981;">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
            </div>
            <div class="p-2 rounded-xl text-xs rounded-bl-none relative" style="background-color: #10b98130;">
              <div class="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Chat Input -->
        <div class="p-3 flex gap-2 border-t" style="border-color: #E5E7EB;">
          <input
            type="text"
            placeholder="Ask about John..."
            class="flex-1 p-2 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all duration-200"
            style="background-color: #FFFFFF; color: #1F2937; border-color: #E5E7EB;"
            aria-label="Type your question"
          />
          <button
            class="px-3 py-2 text-white rounded-lg hover:scale-105 transition-all duration-200 text-xs shadow-sm"
            style="background-color: #467ee5;"
            aria-label="Send message"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No props needed for now as the content is static
</script>

<style lang="postcss" scoped>
/* Typing indicator animation */
.typing-indicator span {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #10B981;
  margin: 0 1px;
  animation: pulse 1.4s infinite ease-in-out both;
}
.typing-indicator span:nth-child(1) {
  animation-delay: -0.32s;
}
.typing-indicator span:nth-child(2) {
  animation-delay: -0.16s;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.05); }
}

/* Slide-in animation for messages */
.animate-slide-in {
  animation: slide-in 0.3s ease-out;
}

@keyframes slide-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Bounce animation for chat button */
.animate-bounce {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
</style>