<template>
  <footer class="glass-effect footer p-10 text-base-content">
    <div class="w-full mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
      <!-- Social Links -->
      <div class="flex flex-col items-center md:items-start gap-4">
        <h3 class="text-lg">My Socials</h3>
        <div class="flex gap-6 flex-wrap justify-center md:justify-start items-center">
          <a href="https://www.linkedin.com/in/upinder-sangha" target="_blank"
            class="flex items-center gap-1 hover:scale-110 transition-transform hover:underline decoration-gray-400 underline-offset-2 text-base-content/80">
            <img :src="'/icons/linkedin.svg'" alt="LinkedIn" class="w-5 h-5" />
            <span class="hidden sm:inline text-sm">LinkedIn</span>
          </a>
          <a href="https://github.com/upinder-sangha" target="_blank"
            class="flex items-center gap-1 hover:scale-110 transition-transform hover:underline decoration-gray-400 underline-offset-2 text-base-content/80">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
              <path
                d="M12.001 2c-5.525 0-10 4.475-10 10a9.99 9.99 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.687c-.1-.25-.45-1.275.1-2.65c0 0 .837-.263 2.75 1.024a9.3 9.3 0 0 1 2.5-.337c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.02 10.02 0 0 0 22 12c0-5.525-4.475-10-10-10" />
            </svg>
            <span class="hidden sm:inline text-sm">GitHub</span>
          </a>
          <a href="https://wa.me/+14385220120" target="_blank"
            class="flex items-center gap-1 hover:scale-110 transition-transform hover:underline decoration-gray-400 underline-offset-2 text-base-content/80">
            <img :src="'/icons/whatsapp.svg'" alt="WhatsApp" class="w-5 h-5" />
            <span class="hidden sm:inline text-sm">WhatsApp</span>
          </a>
          <a href="mailto:upindersangha01@gmail.com"
            class="flex items-center gap-1 hover:scale-110 transition-transform hover:underline decoration-gray-400 underline-offset-2 text-base-content/80">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="fill-current w-5 h-5"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
            <span class="hidden sm:inline text-sm">Email</span>
          </a>
        </div>
      </div>

      <!-- Signature and Contact -->
      <div class="text-center md:text-right space-y-2">
        <p>
          Made with
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
            class="fill-current inline-block w-4 h-4 text-red-500">
            <path
              d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z" />
          </svg>
          by Upinder
        </p>
        <p class="text-sm text-gray-500">© {{ new Date().getFullYear() }} Upinder Singh Sangha. All rights reserved.</p>
        <p class="text-sm text-gray-500">
          <a href="mailto:upindersangha01@gmail.com" class="hover:underline">upindersangha01@gmail.com</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No reactive state needed for now
</script>

<style lang="postcss" scoped>
.glass-effect {
  @apply backdrop-blur-lg bg-base-300;
}
</style>