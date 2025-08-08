<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-x-hidden">
    <!-- Optimized background elements -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute top-0 left-0 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob">
      </div>
      <div
        class="absolute top-0 right-0 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000">
      </div>
      <div
        class="absolute bottom-0 left-1/2 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-4000">
      </div>
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

    <!-- Get Started Section (Form) -->
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
import DocativeNavbar from '~/components/Docative/DocativeNavbar.vue';
import DocativeHero from '~/components/Docative/DocativeHero.vue';
import DocativeWhoIsItFor from '~/components/Docative/DocativeWhoIsItFor.vue';
import DocativeWhyChoose from '~/components/Docative/DocativeWhyChoose.vue';
import DocativeHowItWorks from '~/components/Docative/DocativeHowItWorks.vue';
import DocativeGetStarted from '~/components/Docative/DocativeGetStarted.vue';
import DocativePricing from '~/components/Docative/DocativePricing.vue';
import DocativeFAQ from '~/components/Docative/DocativeFAQ.vue';
import DocativeBottomCTA from '~/components/Docative/DocativeBottomCTA.vue';
import DocativeFooter from '~/components/Docative/DocativeFooter.vue';

useHead({
  title: 'Docative | Make Your Documents Talk Back',
  meta: [
    { name: 'description', content: 'Turn your documents into interactive AI chatbots with Docative. Upload PDF, DOCX, or TXT and get a custom chatbot for your website in minutes.' },
    { name: 'keywords', content: 'AI chatbot, Docative, embeddable chatbot, document chatbot, website chatbot' },
    { property: 'og:title', content: 'Docative | Make Your Documents Talk Back' },
    { property: 'og:description', content: 'Turn your documents into interactive AI chatbots with Docative. Upload PDF, DOCX, or TXT and get a custom chatbot for your website in minutes.' },
    { property: 'og:url', content: 'https://www.upindersangha.com/docative' },
    { property: 'og:image', content: 'https://www.upindersangha.com/images/docative-og.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: 'https://www.upindersangha.com/images/docative-og.png' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Docative',
        applicationCategory: 'BusinessApplication',
        description: 'Docative lets you create an AI chatbot by uploading PDF, DOCX, or TXT files.',
        url: 'https://www.upindersangha.com/docative',
        operatingSystem: 'Web',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
      }),
    },
  ],
  __dangerouslyDisableSanitizers: ['script'],
});

const chatbotLoaded = ref(false);

function loadChatbotScript() {
  return new Promise((resolve, reject) => {
    if (document.querySelector('script[data-bot-id="f5bd4351-58df-419e-8b4d-00cf6ac7c898"]')) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://www.upindersangha.com/docative-widget.js'; // Update to production URL
    script.async = true;
    script.setAttribute('data-bot-id', 'f5bd4351-58df-419e-8b4d-00cf6ac7c898');
    script.setAttribute('data-name', 'Docative');
    script.onload = () => {
      setTimeout(() => {
        chatbotLoaded.value = true;
        resolve();
      }, 500);
    };
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

const activateChatbot = async () => {
  try {
    if (!chatbotLoaded.value) {
      await loadChatbotScript();
    }
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
    alert('There was an error activating the chatbot. Please try again.');
  }
};

onMounted(() => {
  loadChatbotScript().catch(error => {
    console.error('Failed to load chatbot script:', error);
  });
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
@keyframes blob {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>