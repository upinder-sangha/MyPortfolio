<template>
  <div class="mockup-code w-[90vw] bg-base-200 max-w-3xl mx-auto p-4 text-sm max-sm:text-xs">
      <pre data-prefix="$"
        class="text-base-content/50"><code class="text-base-content">Hey, I'm Upinder - I make lives easier through code.</code></pre>
      <pre data-prefix="/*"
        class="text-base-content/50"><code>I build clean, efficient, and user-focused software,</code></pre>
      <pre data-prefix=""
        class="text-base-content/50"><code>and automate the boring stuff (often the slightly interesting too).</code></pre>
      <pre data-prefix=""
        class="text-base-content/50"><code>Perpetually learning, breaking things, and turning ideas into experiments.</code><code class="text-base-content/30"> */</code></pre>
      <pre data-prefix="" class="text-base-content/50"><code></code></pre>
      <pre data-prefix="//" class="text-base-content/50"><code>This function? It's just formatted text.</code></pre>
      <pre data-prefix=">"
        class="text-base-content/50"><code class="text-success">function</code><code class="text-info"> welcomeUser() </code><code class="text-success">{</code></pre>
      <pre data-prefix=">"
        class="text-base-content/50"><code class="text-info">  console.log(</code><code class="text-base-content">"Welcome to my portfolio!"</code><code class="text-info">)</code><code class="text-base-content">;</code></pre>
      <pre data-prefix=">" class="text-base-content/50"><code class="text-success">}</code></pre>
      <pre data-prefix="" class="text-base-content/50"><code class="text-success"></code></pre>
      <pre data-prefix="/*"
        class="text-base-content/50"><code id="typing-text"></code><code id="second-typing-text"></code><code class="text-base-content/30"> */</code></pre>
    </div>
</template>


<script setup>
import TypeIt from 'typeit';
import { onMounted, ref } from 'vue';

const typingContainer = ref(null);

onMounted(() => {
  new TypeIt("#typing-text", {
    speed: 50,
    lifeLike:true,
    deleteSpeed: 100,
    waitUntilVisible: true,
    afterComplete: (instance) => {
      instance.destroy()
      // Start the second animation after the first one completes
      new TypeIt("#second-typing-text", {
        speed: 50, // Different speed for the second animation
        waitUntilVisible: true,
        loop: true,
      })
        .type('Do i look cool now.')
        .pause(200)
        .delete(1)
        .type('?')
        .pause(3000)
        .delete('Do i look cool now?'.length)
        .pause(200)
        .type("If so, Let's connect!")
        .pause(3000)
        .go();
    },
  })
    .type('Typing animation?')
    .pause(500)
    .type('.')
    .pause(100)
    .type(".")
    .pause(100)
    .type(".")
    .pause(1000)
    .delete(3)
    .pause(750)
    .type(' But it\'s so cliche.')
    .pause(200)
    .delete(1)
    .type('!')
    .pause(1000)
    .break()
    .type('Ughh Sure...')
    .pause(100) // Short pause before "going back"
    .move(-12)
    .type('      ')
    .move(null, { to: 'END' })
    .pause(1000)
    .type(' Is that okay')
    .pause(200)
    .type('? ')
    .pause(500)
    .delete(1)
    .pause(500)
    .type(' ')
    .go(); // Start the first animation
});
</script>

<style >
/* Optional: Style the cursor */
.ti-cursor {
  color: oklch(var(--color-base-content)) !important; 
  /* Adjust cursor color */
  font-size: inherit;
  line-height: inherit;
}
</style>