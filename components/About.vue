<template>
  <section id="about" class="relative pt-24 xl:pt-28 min-h-svh md:px-20 max-w-[96rem] mx-auto">
    <div
      class="xl:min-h-[70vh] flex flex-col xl:items-center xl:flex-row-reverse max-xl:items-center justify-between gap-8 md:gap-12">

      <!-- Right: Image & Social Icons -->
      <div class="lg:w-1/3 flex flex-col items-center gap-2 sm:gap-4">
        <div class="w-48 h-48 sm:w-56 sm:h-56 xl:w-full xl:h-full rounded-full overflow-hidden shadow-lg">
          <img :src="'/images/upinder.png'" alt="Upinder Singh Sangha" class="w-full h-full object-cover" />
        </div>

        <!-- Social Icons under image -->
        <div class="flex justify-center gap-3 md:gap-4 items-center">
          <a href="https://www.linkedin.com/in/upinder-sangha" target="_blank"
            class="hover:scale-110 transition-transform">
            <img :src="'/icons/linkedin.svg'" alt="LinkedIn" class="w-6 h-6 md:w-8 md:h-8 xl:w-10 xl:h-10" />
          </a>
          <a href="https://github.com/upinder-sangha" target="_blank" class="hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-5 h-5 md:w-7 md:h-7 xl:w-9 xl:h-9" width="24"
              height="24" viewBox="0 0 24 24">
              <path
                d="M12.001 2c-5.525 0-10 4.475-10 10a9.99 9.99 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.687c-.1-.25-.45-1.275.1-2.65c0 0 .837-.263 2.75 1.024a9.3 9.3 0 0 1 2.5-.337c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.02 10.02 0 0 0 22 12c0-5.525-4.475-10-10-10" />
            </svg>
          </a>
          <a href="https://Wa.me/+14385220120" target="_blank" class="hover:scale-110 transition-transform">
            <img :src="'/icons/whatsapp.svg'" alt="WhatsApp" class="w-6 h-6 md:w-8 md:h-8 xl:w-10 xl:h-10" />
          </a>
          <a href="mailto:upindersangha01@gmail.com" target="_blank" class="hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
              class="fill-current w-5 h-5 md:w-7 md:h-7 xl:w-9 xl:h-9">
              <path
                d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
            </svg>
          </a>
        </div>
      </div>

      <!-- Left: Text & Code Block -->
      <div class="sm:w-[90VW] xl:w-2/3 max-w-3xl">
        <div class="text-center xl:text-left md:space-y-4 pb-4 md:pb-8">
          <p class="font-urbanist text-md md:text-lg md:text-xl font-extrabold">👋 Hi, I'm</p>
          <h1 class="font-urbanist text-4xl sm:text-5xl xl:text-7xl font-extrabold">Upinder Sangha</h1>
          <p class="hidden sm:inline-block text-lg">
            Developer | Analyst | Learner
          </p>
          <p class="sm:hidden text-lg">
            <span id="role-text" class="inline-block"></span>
          </p>
        </div>

        <div
          class="sm:hidden text-center xl:text-left bg-gradient-to-t from-transparent via-base-100 to-transparent">
          <div class="text-info bg-gradient-to-t from-transparent via-base-100 to-transparent py-4">
            <p class="font-caveat font-semibold text-2xl px-4">
              I make lives easier through code.
            </p>
          </div>

          <div
            class="text-sm text-base-content/70 bg-gradient-to-t from-transparent via-base-100 to-transparent ">
            <p class="px-4">
              I build clean, efficient, and user-focused software,
              and automate the boring stuff (often the slightly interesting too).
            </p>
          </div>
        </div>
        <div class="hidden sm:block">
          <CodeBlock />
        </div>
      </div>
    </div>
    <div class="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-base-content/50" fill="none" viewBox="0 0 24 24"
        stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </section>
</template>


<script setup lang="ts">
import { onMounted } from 'vue'
import TypeIt from 'typeit'

onMounted(() => {
  new TypeIt('#role-text', {
    speed: 70,      // typing speed in ms per char
    lifeLike: true,
    deleteSpeed: 50, // deletion speed
    loop: true,      // repeat forever
    waitUntilVisible: true,
  })
    .type('Developer ')
    .pause(1500)       // show each word for 2 s
    .delete(10)
    .pause(200)
    .type('Analyst ')
    .pause(1500)
    .delete(8)
    .pause(200)// remove “Analyst”
    .type('Learner ')
    .pause(1500)
    .delete(8)
    .pause(200)// remove “Learner”
    .go()
})
</script>

<style scoped>
.text-glow-info {
  text-shadow:
    0 0 20px
}
</style>
