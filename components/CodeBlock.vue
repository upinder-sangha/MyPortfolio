<template>
  <div class="animated-gradient-border-hover rounded-xl">
  <div class="rounded-xl mockup-code bg-base-200 md:p-4 text-xs md:text-sm pointer-events-none">
      <pre data-prefix="$"
        class="text-base-content/50"><code class="text-base-content">I make lives easier through code.</code></pre>
      <pre data-prefix="/*"
        class="text-base-content/50"><code>I build clean, efficient, and user-focused software,</code></pre>
      <pre data-prefix=""
        class="text-base-content/50"><code>and automate the boring stuff (often the slightly interesting too).</code></pre>
      <pre data-prefix=""
        class="text-base-content/50"><code>Perpetually learning, breaking things, and turning ideas into experiments.</code><code class="text-base-content/30"> */</code></pre>
      <pre data-prefix="" class="text-base-content/50"><code></code></pre>
      <pre data-prefix=">"
        class="text-base-content/50"><code class="text-success-content">function</code><code class="text-info-content"> showSomethingCool() </code><code class="text-success-content">{</code></pre>
      <pre data-prefix=">"
        class="text-base-content/50"><code class="text-info-content">  action.go(</code><code class="text-base-content">"Reload the website! Just do it! Seriously."</code><code class="text-info-content">)</code><code class="text-base-content">;</code></pre>
      <pre data-prefix=">" class="text-base-content/50"><code class="text-success-content">}</code></pre>
      <pre data-prefix="" class="text-base-content/50"><code class="text-success-content"></code></pre>
    <pre data-prefix="/*"
      class="text-base-content/50"><code id="typing-text"></code><code id="second-typing-text"></code><code class="text-base-content/30"> */</code></pre>
  </div>
</div>
</template>


<script setup>
import TypeIt from 'typeit';
import { onMounted, ref } from 'vue';

const typingContainer = ref(null);

onMounted(() => {
    new TypeIt("#typing-text", {
      speed: 50,
      lifeLike: true,
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
          .pause(1000)
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

<style>
/* Optional: Style the cursor */
.ti-cursor {
  color: oklch(var(--color-base-content)) !important;
  /* Adjust cursor color */
  font-size: inherit;
  line-height: inherit;
}
</style>
