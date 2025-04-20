<template>
  <footer class="glass-effect footer p-10 text-base-content">
    <div class="text-center">
      <p>© 2023 Your Name. All rights reserved.</p>
      <div class="flex justify-center gap-4 mt-4">
        <a href="https://github.com/yourusername" class="btn btn-ghost">GitHub</a>
        <a href="https://linkedin.com/in/yourusername" class="btn btn-ghost">LinkedIn</a>
        <a href="https://twitter.com/yourusername" class="btn btn-ghost">Twitter</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No reactive state needed for now
</script>

<style lang="postcss" scoped>
.glass-effect {
  @apply backdrop-blur-lg bg-base-300 ;
}
</style>