<script setup lang="ts">
import CodeBlock from './CodeBlock.vue';
</script>

<template>
  <section id="about" class="min-h-screen px-6 md:px-20 xl:py-12 max-w-[96rem] mx-auto">
    <div class="xl:min-h-[70vh] flex flex-col xl:items-center xl:flex-row-reverse max-xl:items-center justify-between gap-8 md:gap-12">

      <!-- Right: Image & Social Icons -->
      <div class="lg:w-1/3 flex flex-col items-center gap-4">
        <div class="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 xl:w-full xl:h-full rounded-full overflow-hidden shadow-lg">
          <img :src="'/images/upinder.png'" alt="Upinder Singh Sangha" class="w-full h-full object-cover" />
        </div>

        <!-- Social Icons under image -->
        <div class="flex justify-center gap-3 md:gap-4">
          <a href="https://www.linkedin.com/in/upinder-sangha" target="_blank"
            class="hover:scale-110 transition-transform">
            <img :src="'/icons/linkedin.svg'" alt="LinkedIn" class="w-6 h-6 md:w-8 md:h-8 xl:w-10 xl:h-10" />
          </a>
          <a href="https://github.com/upinder-sangha" target="_blank" class="hover:scale-110 transition-transform">
            <img :src="'/icons/github.svg'" alt="GitHub" class="w-6 h-6 md:w-8 md:h-8 xl:w-10 xl:h-10" />
          </a>
          <a href="https://Wa.me/+14385220120" target="_blank"
            class="hover:scale-110 transition-transform">
            <img :src="'/icons/whatsapp.svg'" alt="WhatsApp" class="w-6 h-6 md:w-8 md:h-8 xl:w-10 xl:h-10" />
          </a>
        </div>
      </div>

      <!-- Left: Text & Code Block -->
      <div class="w-[90VW] xl:w-2/3 max-w-3xl" >
        <div class="text-center xl:text-left space-y-2 md:space-y-4 pb-4 md:pb-8">
          <p class="text-md md:text-lg md:text-xl font-bold">👋 Hi, I'm</p>
          <h1 class="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold">Upinder Sangha</h1>
          <p class="text-md sm:text-lg sm:text-xl">
            Developer | Analyst | Learner
          </p>
        </div>
        <CodeBlock/>
      </div>
    </div>
  </section>
</template>
