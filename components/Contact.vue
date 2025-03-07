<template>
  <section id="contact" class="min-h-screen p-8">
    <h2 class="text-3xl font-bold text-center mb-8">Contact Me</h2>
    <form class="max-w-md mx-auto">
      <div class="form-control">
        <label class="label">
          <span class="label-text">Name</span>
        </label>
        <input type="text" placeholder="Your Name" class="input input-bordered" />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Email</span>
        </label>
        <input type="email" placeholder="Your Email" class="input input-bordered" />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Message</span>
        </label>
        <textarea class="textarea textarea-bordered" placeholder="Your Message"></textarea>
      </div>
      <div class="form-control mt-6">
        <button type="submit" class="btn btn-primary">Send Message</button>
      </div>
    </form>
  </section>
</template>

<script setup>
// No reactive state needed for now
</script>