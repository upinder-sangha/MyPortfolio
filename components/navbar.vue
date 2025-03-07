<template>
  <nav class="navbar bg-base-200 shadow-lg fixed top-0 w-full z-50">
    <div class="navbar-start">
      <NuxtLink to="/" class="btn btn-ghost text-xl">Your Name</NuxtLink>
    </div>
    <div class="navbar-end">
      <NuxtLink to="#about" class="btn btn-ghost">About</NuxtLink>
      <NuxtLink to="#experience" class="btn btn-ghost">Experience</NuxtLink>
      <NuxtLink to="#skills" class="btn btn-ghost">Skills</NuxtLink>
      <NuxtLink to="#projects" class="btn btn-ghost">Projects</NuxtLink>
      <NuxtLink to="#contact" class="btn btn-ghost">Contact</NuxtLink>
    </div>
  </nav>
</template>

<script setup>
// No reactive state needed for now
</script>