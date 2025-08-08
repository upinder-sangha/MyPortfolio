<!-- pages/docative/index.vue -->

<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-x-hidden">
    <!-- Continuous flowing background elements -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div class="absolute top-0 right-0 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div class="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
    </div>
    
    <!-- Navbar -->
    <DocativeNavbar />
    
    <!-- Hero Section -->
    <section id="home" class="relative">
      <DocativeHero />
    </section>
    
    <!-- Who Is It For Section -->
    <section id="who-is-it-for" class="relative py-20 md:py-32 bg-gradient-to-br from-purple-50 to-pink-50">
      <DocativeWhoIsItFor />
    </section>
    
    <!-- Features Section -->
    <section id="features" class="relative py-20 md:py-32">
      <DocativeWhyChoose />
    </section>
    
    <!-- How It Works Section -->
    <section id="how-it-works" class="relative py-20 md:py-32 bg-gradient-to-br from-purple-50 to-pink-50">
      <DocativeHowItWorks />
    </section>
    
    <!-- Get Started Section -->
    <section id="get-started" class="relative py-20 md:py-32">
      <DocativeGetStarted />
    </section>
    
    <!-- Pricing Section -->
    <section id="pricing" class="relative py-20 md:py-32 bg-gradient-to-br from-purple-50 to-pink-50">
      <DocativePricing />
    </section>
    
    <!-- FAQ Section -->
    <section id="faq" class="relative py-20 md:py-32">
      <DocativeFAQ />
    </section>
    
    <!-- Bottom CTA -->
    <section class="relative py-20 md:py-32 bg-gradient-to-br from-pink-400 to-purple-600">
      <DocativeBottomCTA />
    </section>
    
    <!-- Footer -->
    <footer class="relative bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
      <DocativeFooter />
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Import components
import DocativeNavbar from '~/components/Docative/DocativeNavbar.vue'
import DocativeHero from '~/components/Docative/DocativeHero.vue'
import DocativeWhoIsItFor from '~/components/Docative/DocativeWhoIsItFor.vue'
import DocativeWhyChoose from '~/components/Docative/DocativeWhyChoose.vue'
import DocativeHowItWorks from '~/components/Docative/DocativeHowItWorks.vue'
import DocativeGetStarted from '~/components/Docative/DocativeGetStarted.vue'
import DocativePricing from '~/components/Docative/DocativePricing.vue'
import DocativeFAQ from '~/components/Docative/DocativeFAQ.vue'
import DocativeBottomCTA from '~/components/Docative/DocativeBottomCTA.vue'
import DocativeFooter from '~/components/Docative/DocativeFooter.vue'

// Set page metadata
useHead({
  title: 'Docative | Make Your Documents Talk Back',
  meta: [
    { name: 'description', content: 'Turn your documents into interactive chatbots with Docative. Upload a file and get a custom chatbot for your website in minutes.' },
    { property: 'og:title', content: 'Docative | Make Your Documents Talk Back' },
    { property: 'og:description', content: 'Turn your documents into interactive chatbots with Docative. Upload a file and get a custom chatbot for your website in minutes.' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
})

// Demo activation state
const chatbotLoaded = ref(false);

// Function to load the chatbot script
function loadChatbotScript() {
  return new Promise((resolve, reject) => {
    // Check if script is already loaded
    if (document.querySelector('script[data-bot-id="f5bd4351-58df-419e-8b4d-00cf6ac7c898"]')) {
      resolve();
      return;
    }
    
    // Create and load the script
    const script = document.createElement('script');
    script.src = 'http://10.0.0.233:3000/docative-widget.js';
    script.async = true;
    script.setAttribute('data-bot-id', 'f5bd4351-58df-419e-8b4d-00cf6ac7c898');
    script.setAttribute('data-name', 'Docative');
    
    script.onload = () => {
      // Wait a bit for the script to initialize and create the button
      setTimeout(() => {
        chatbotLoaded.value = true;
        resolve();
      }, 500);
    };
    
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

// Function to activate the chatbot
const activateChatbot = async () => {
  try {
    // Make sure the chatbot script is loaded
    if (!chatbotLoaded.value) {
      await loadChatbotScript();
    }
    
    // Wait for the button to be available
    let attempts = 0;
    const maxAttempts = 10;
    
    const checkForButton = setInterval(() => {
      const chatbotButton = document.getElementById('chatbot-toggle-btn');
      
      if (chatbotButton) {
        clearInterval(checkForButton);
        chatbotButton.click();
        
      } else {
        attempts++;
        if (attempts >= maxAttempts) {
          clearInterval(checkForButton);
        }
      }
    }, 200);
  } catch (error) {
    console.error('Error activating chatbot:', error);
    // Show error message
    alert('There was an error activating the chatbot. Please try again.');
  }
};

// Event listener for demo buttons
onMounted(() => {
  // Load the chatbot script immediately
  loadChatbotScript().catch(error => {
    console.error('Failed to load chatbot script:', error);
  });
  
  // Add event listeners to all demo buttons
  const demoButtons = document.querySelectorAll('a[href="#demo"]');
  demoButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      activateChatbot();
    });
  });
});
</script>

<style scoped>
@keyframes slide-down {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-down {
  animation: slide-down 0.3s ease-out;
}
</style>