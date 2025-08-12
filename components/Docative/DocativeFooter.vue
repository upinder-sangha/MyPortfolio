<template>
  <div class="max-w-7xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      <!-- Logo and Description -->
      <div class="md:col-span-2">
        <div class="flex items-center space-x-2 mb-6">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
            <span class="text-white font-bold text-xl">D</span>
          </div>
          <span class="text-2xl font-bold">Docative</span>
        </div>
        <p class="text-gray-400 mb-6 max-w-md">
          Transform your static documents and websites into interactive chatbots that engage your audience and provide instant answers.
        </p>
        <div class="flex space-x-4">
          <a v-for="social in socialLinks" :key="social.name" 
             :href="social.href" target="_blank"
             class="text-gray-400 hover:text-white transition-colors duration-300">
            <span class="sr-only">{{ social.name }}</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path :d="social.iconPath"></path>
            </svg>
          </a>
        </div>
      </div>
      
      <!-- Quick Links -->
      <div>
        <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">Quick Links</h3>
        <ul class="space-y-2">
          <li v-for="link in quickLinks" :key="link.text">
            <a :href="link.href" class="text-gray-300 hover:text-white transition-colors duration-300">
              {{ link.text }}
            </a>
          </li>
        </ul>
      </div>
      
      <!-- Legal -->
      <div>
        <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">Legal</h3>
        <ul class="space-y-2">
          <li v-for="link in legalLinks" :key="link.text">
            <a :href="link.href" class="text-gray-300 hover:text-white transition-colors duration-300">
              {{ link.text }}
            </a>
          </li>
        </ul>
      </div>
    </div>
    
    <div class="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
      <p>&copy; {{ currentYear }} Docative. All rights reserved.</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const currentYear = computed(() => new Date().getFullYear())
const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/upinder-sangha',
    iconPath: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/upinder-sangha/',
    iconPath: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
  }
]
const quickLinks = [
  { text: 'Home', href: '#home' },
  { text: 'Features', href: '#features' },
  { text: 'How It Works', href: '#how-it-works' },
  { text: 'Pricing', href: '#pricing' },
  { text: 'FAQ', href: '#faq' }
]
const legalLinks = [
  { text: 'Privacy Policy', href: '#' },
  { text: 'Terms of Service', href: '#' },
  { text: 'Cookie Policy', href: '#' }
]
</script>