<template>
  <section id="projects" class="py-12 md:py-20 p-6 md:p-8 bg-base-300/60 backdrop-blur-2xl">
    <h2 class="text-accent-content font-light text-3xl sm:text-4xl lg:text-5xl font-raleway text-center mb-12 md:mb-20">
      What I’ve Built</h2>
    <div class="max-w-[88rem] mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 justify-items-center place-content-center">
        <div v-for="repo in repos" :key="repo.id"
          class="bg-base-100 text-base-content flex flex-col sm:flex-row rounded-xl overflow-hidden  hover:shadow-md transition-transform duration-300 hover:scale-[1.01] w-full max-w-xl md:max-w-2xl">
          <!-- Image -->
          <div class="sm:w-5/12 w-full h-48 sm:h-auto overflow-hidden flex-shrink-0 p-3 sm:p-2 bg-base-100">
            <img loading="lazy" :src="projectImages[repo.name] || '/images/placeholder.png'" :alt="repo.name"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-105 rounded-md " />
          </div>

          <!-- Content -->
          <div class="sm:w-7/12 w-full max-sm:pt-0 p-4 flex flex-col justify-between">
            <div class="flex-1">
              <h3 class="text-info-content text-xl font-normal mb-2">
                {{ repo.name }}
              </h3>
              <p class="font-light text-sm opacity-80">
                {{ repo.description }}
              </p>
            </div>

            <div class="mt-4 text-right">
              <a :href="repo.html_url" target="_blank"
                class="rounded-md border-success-content/50 !text-success-content btn btn-sm btn-success btn-outline font-normal">
                GitHub
              </a>
            </div>

          </div>
        </div>
      </div>

      <div class="mt-6 sm:mt-8 lg:mt-12 text-left sm:text-center group">
        <a href="https://github.com/upinder-sangha?tab=repositories" target="_blank"
          class="inline-flex items-center gap-3 text-info-content text-xl md:text-2xl font-medium transition-transform duration-300 hover:scale-[1.05]">
          <img :src="`/icons/github_creative.svg`" alt="GitHub"
            class="w-10 h-10 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
          <span class="font-light">
            More Projects
          </span>
          <svg class="w-5 h-5 text-info-content transition-transform duration-300 group-hover:translate-x-1" fill="none"
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
  'MyPortfolio': '/images/MyPortfolio.png',
  placeholder: '/images/placeholder.png'
}
</script>
