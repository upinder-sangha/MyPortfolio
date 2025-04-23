<template>
  <header class="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-base-100/50">
    <nav class="px-4">
      <div class="flex justify-between items-center h-14">
        <!-- Logo / Name -->
        <NuxtLink to="/" class="text-lg sm:text-xl tracking-wide hover:opacity-70 transition-opacity text-base-content">
          Upinder Singh Sangha
        </NuxtLink>

        <!-- Desktop Nav -->
        <div class="hidden md:flex space-x-6 px-4">
          <NuxtLink to="#about" class="nav-link">About</NuxtLink>
          <NuxtLink to="#experience" class="nav-link">Experience</NuxtLink>
          <NuxtLink to="#skills" class="nav-link">Skills</NuxtLink>
          <NuxtLink to="#projects" class="nav-link">Projects</NuxtLink>
          <NuxtLink to="#certificates" class="nav-link">Certificates</NuxtLink>
          <NuxtLink to="#contact" class="nav-link">Contact</NuxtLink>
        </div>

        <!-- Theme + Mobile Toggle -->
        <div class="flex items-center space-x-3">
          <ThemeController />

          <button @click="toggleMenu" class="md:hidden p-2 rounded hover:bg-base-200 transition">
            <svg class="h-6 w-6 text-base-content" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!menuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Nav -->
      <transition name="mobile-menu" @before-enter="onBeforeEnter" @after-leave="onAfterLeave">
  <div
    v-show="menuOpen"
    class="md:hidden pt-6 space-y-6 pb-6 text-center border-t border-b border-base-300"
  >
    <NuxtLink to="#about" @click="toggleMenu" class="block nav-link">About</NuxtLink>
    <NuxtLink to="#experience" @click="toggleMenu" class="block nav-link">Experience</NuxtLink>
    <NuxtLink to="#skills" @click="toggleMenu" class="block nav-link">Skills</NuxtLink>
    <NuxtLink to="#projects" @click="toggleMenu" class="block nav-link">Projects</NuxtLink>
    <NuxtLink to="#certificates" @click="toggleMenu" class="block nav-link">Certificates</NuxtLink>
    <NuxtLink to="#contact" @click="toggleMenu" class="block nav-link">Contact</NuxtLink>
  </div>
</transition>

    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
const toggleMenu = () => {
  // If open, delay close
  if (menuOpen.value) {
    setTimeout(() => {
      menuOpen.value = false
    }, 200) // adjust delay here (ms)
  } else {
    menuOpen.value = true
  }
}
</script>

<style lang="postcss" scoped>
.nav-link {
  @apply relative text-base text-base-content transition-colors duration-300 hover:text-primary;
}

.nav-link::after {
  content: "";
  @apply absolute left-0 -bottom-0.5 w-0 h-0.5 bg-primary transition-all duration-300;
}

.nav-link:hover::after {
  width: 100%;
}
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.mobile-menu-enter-to,
.mobile-menu-leave-from {
  opacity: 1;
  transform: translateY(0);
}

</style>
