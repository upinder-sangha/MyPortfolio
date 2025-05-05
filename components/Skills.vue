<template>
  <section id="skills" class="py-12 md:py-20 p-6 md:p-8 bg-base-100/60 backdrop-blur-2xl">
    <h2 class="text-accent-content font-light text-3xl sm:text-4xl lg:text-5xl font-raleway text-center mb-12 md:mb-20">
      My Areas of Expertise</h2>
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto justify-items-center place-content-center">
        <!-- Loop through skill categories -->
        <div v-for="(category, index) in listOfSkillCategories" :key="index"
          class="animated-gradient-border-hover card transition-transform hover:scale-[1.01] w-full max-w-xl md:max-w-2xl">
          <div class="bg-base-300 rounded-lg card-body flex flex-col items-center p-2 py-4">
            <!-- Center the category name -->
            <h3 class="text-success-content card-title font-normal text-xl md:text-2xl lg:text-3xl mb-4 text-center">{{
              category.category }}</h3>

            <!-- Loop through skills within each category -->
            <div class="flex flex-wrap gap-2 md:gap-6 justify-center">
              <div v-for="(skill, skillIndex) in category.skills" :key="skillIndex"
                class="card pb-1 p-2 items-center flex-1 min-w-[5rem] max-w-[6rem]  text-center">
                <img :src="`/icons/${skill.icon}.svg`" :alt="skill.name" class="w-12 h-12 mb-4" />
                <span class="font-light text-sm md:text-md">{{ skill.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import listOfSkillCategories from '~/assets/skills.json';  // Import JSON file containing skill categories
</script>
