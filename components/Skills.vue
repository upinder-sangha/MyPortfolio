<template>
  <section id="skills" class="p-4 md:p-8">
    <h2 class="text-4xl font-bold text-center mb-12">Skills</h2>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto">
      <!-- Loop through skill categories -->
      <div v-for="(category, index) in listOfSkillCategories" :key="index" class="card bg-base-200 shadow-sm border border-info/20 hover:border-info/50">
        <div class="card-body flex flex-col items-center p-2 py-4">
          <!-- Center the category name -->
          <h3 class="card-title text-xl md:text-3xl mb-4 text-center">{{ category.category }}</h3>

          <!-- Loop through skills within each category -->
          <div class="flex flex-wrap gap-2 md:gap-6 justify-center">
            <div v-for="(skill, skillIndex) in category.skills" :key="skillIndex"
              class="card hover:border border-info/50 pb-1 p-2 md:pb-2 md:p-4 items-center flex-1 min-w-[5rem] max-w-[6rem] md:min-w-[6rem] md:max-w-[10rem] text-center">
              <img :src="`/icons/${skill.icon}.svg`" alt="abc" class="w-12 h-12 md:w-16 md:h-16 mb-4" />
              <span class="text-sm md:text-lg">{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import listOfSkillCategories from '~/assets/skills.json';  // Import your JSON file containing skill categories
</script>
