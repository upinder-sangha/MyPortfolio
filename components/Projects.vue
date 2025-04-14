<template>
  <section id="projects" class="p-6 md:p-12">
    <h2 class="text-4xl font-bold text-center mb-12">🚀 Projects</h2>

    <div class="grid gap-8 grid-cols-[repeat(auto-fit,minmax(280px,1fr))] justify-center">
      <TransitionGroup name="fade" tag="div" class="contents">
        <div v-for="repo in repos" :key="repo.id"
          class="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group rounded-lg overflow-hidden mx-auto ">

          <!-- 🖼️ Image section with 4:3 aspect ratio and overlay -->
          <div class="relative w-full aspect-[4/3] overflow-hidden group">
            <a :href="repo.html_url" target="_blank" class="block w-full h-full">
              <!-- 🖼 Project Image -->
              <img :src="projectImages[repo.name] || '/logos/CSL.png'" alt="Project screenshot"
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />

              <!-- 🌈 Gradient overlay stretched higher but text stays at bottom -->
              <div
                class="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end px-4 pb-2">
                <h3 class="text-base font-semibold text-white truncate">{{ repo.name }}</h3>
              </div>

              <!-- 💬 Hover Description -->
              <div
                class="absolute inset-0 bg-black/70 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-center px-4 transition-opacity duration-300">
                <p class="text-sm mb-2">{{ repo.description }}</p>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 -960 960 960" fill="currentColor">
                  <path
                    d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
                </svg>
              </div>
            </a>
          </div>

        </div>
      </TransitionGroup>
    </div>
  </section>
</template>



<script setup>
const { error, status, data } = await useFetch(
  'https://api.github.com/users/upinder-sangha/repos'
)

const repos = computed(() =>
  data.value
    .filter((repo) => repo.description && repo.stargazers_count > 0)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
)

// ⬇️ Manually map repo names to images (static in your /public folder)
const projectImages = {
  Blogish: '/images/Blogish.jpeg',
  'Fake-News-Detector-Bot': '/images/Fake-News-Detector-Bot.jpeg',
  Portfolio: '/images/portfolio.png',
  // add more...
}

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
