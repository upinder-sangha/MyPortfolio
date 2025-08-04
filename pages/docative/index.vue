<!-- pages/docative.vue -->
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
    <section id="home" class="relative pt-32 pb-20 md:pt-40 md:pb-32">
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
import { onMounted } from 'vue';

onMounted(() => {
  const script = document.createElement('script');
  script.src = 'http://localhost:3000/docative-widget.js';
  script.async = true;
  script.setAttribute('data-bot-id', '42d6454c-feb8-4da2-abba-a3fa889d2aa9');
  script.setAttribute('data-name', 'Docative');
  document.body.appendChild(script);
});

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
</script>