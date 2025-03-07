<template>
    <div class="min-h-screen bg-base-100 text-base-content">
      <!-- Navbar -->
      <Navbar />
  
      <!-- Main Content -->
      <main class="pt-20"> <!-- Add padding-top to avoid overlap with the fixed navbar -->
        <slot />
      </main>
  
      <!-- Footer -->
      <Footer />
    </div>
  </template>
  
  <script setup>
  // No reactive state needed for now
  </script>