<template>
  <section id="projects" class="py-12 md:py-20 p-4 md:p-8 bg-base-200 ">
    <h2 class="text-4xl font-bold text-center mb-12">🚀 Projects</h2>
    <div class="max-w-[88rem] mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-items-center place-content-center">
        <div v-for="repo in repos" :key="repo.id"
          class="bg-base-100 text-base-content flex flex-col sm:flex-row rounded-xl overflow-hidden  hover:shadow-md transition-transform duration-300 hover:scale-[1.01] w-full max-w-xl md:max-w-2xl">
          <!-- Image -->
          <div class="sm:w-5/12 w-full h-48 sm:h-auto overflow-hidden flex-shrink-0 p-3 sm:p-2 bg-base-100">
            <img :src="projectImages[repo.name] || '/images/placeholder.png'" :alt="repo.name"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-105 rounded-md " />
          </div>

          <!-- Content -->
          <div class="sm:w-7/12 w-full p-4 flex flex-col justify-between">
            <div class="flex-1">
              <h3 class="text-xl font-semibold mb-2">
                {{ repo.name }}
              </h3>
              <p class="text-sm opacity-80">
                {{ repo.description }}
              </p>
            </div>

            <div class="mt-4 text-right">
              <a :href="repo.html_url" target="_blank" class="rounded-md btn btn-neutral btn-sm">
                GitHub
              </a>
            </div>

          </div>
        </div>
      </div>

      <div class="mt-6 sm:mt-8 lg:mt-12 text-left sm:text-center group">
        <a href="https://github.com/upinder-sangha?tab=repositories" target="_blank"
          class="inline-flex items-center gap-3 text-info text-xl md:text-2xl font-medium transition-transform duration-300 hover:scale-[1.03]">
          <img :src="`/icons/github_creative.svg`" alt="GitHub"
            class="w-10 h-10 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
          <span class="hover:underline hover:underline-offset-4 decoration-info/40 hover:decoration-info">
            More Projects
          </span>
          <svg class="w-5 h-5 text-info transition-transform duration-300 group-hover:translate-x-1" fill="none"
            stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>

    </div>

  </section>
</template>


<script setup>
import { ref, computed } from 'vue'

const { data } = await useFetch('https://api.github.com/users/upinder-sangha/repos')

const repos = computed(() =>
  data.value
    .filter((repo) => repo.description && repo.stargazers_count > 0)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
)

const projectImages = {
  Blogish: '/images/Blogish.png',
  'Lease-Management-System': '/images/Lease-Management-System.png',
  'Image-Captioning': '/images/Image-Captioning.png',
  'Hybrid-Stock-Price-Prediction-model-uisng-LSTM': '/images/Hybrid-Stock-Price-Prediction-model-uisng-LSTM.png',
  'Image-Classification-of-Plant-Diseases-Using-CNN': '/images/Image-Classification-of-Plant-Diseases-Using-CNN.png',
  'Fake-News-Detector-Bot': '/images/Fake-News-Detector-Bot.png',
  Portfolio: '/images/portfolio.png',
  placeholder: '/images/placeholder.png'
}
</script>
