<template>
  <section id="contact" class="min-h-svh flex flex-col justify-between">
    <section
      class="py-12 md:py-20 p-6 md:p-10 bg-base-300/60 backdrop-blur-2xl grow flex flex-col justify-evenly items-center">
      <h2
        class="text-accent-content font-light text-3xl sm:text-4xl lg:text-5xl font-raleway text-center">
        Let’s Connect</h2>

      <div class="w-full max-w-md my-20">
        <form @submit.prevent="handleSubmit" class="grid grid-cols-1 gap-2">
          <span class="label-text ml-2 text-success-content">Name</span>
          <div class="form-control">
            <label class="bg-secondary input rounded-xl flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                class="h-4 w-4 opacity-70">
                <path
                  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input type="text" class="grow" name="name" v-model="form.name" placeholder="Your Name" required />
            </label>
          </div>
          <span class="label-text ml-2 text-success-content">Email</span>
          <div class="form-control">
            <label class="bg-secondary input rounded-xl flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                class="h-4 w-4 opacity-70">
                <path
                  d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path
                  d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="email" class="grow" name="email" v-model="form.email" placeholder="Your Email" required />
            </label>
          </div>
          <span class="label-text ml-2 text-success-content">Message</span>
          <div class="form-control">
            <textarea class="bg-secondary textarea rounded-xl" name="message" v-model="form.message"
              placeholder="Your Message" required></textarea>
          </div>
          <div class="form-control">
            <button type="submit" class="rounded-md border-success-content/50 !text-success-content btn btn-success btn-outline font-normal mt-2 rounded-xl" :disabled="loading">
              {{ loading ? "Sending..." : "Send Message" }}
            </button>
          </div>
        </form>
      </div>
    </section>
    <Footer class="z-10"></Footer>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const submitted = ref(false)
const loading = ref(false)

const handleSubmit = async () => {
  loading.value = true

  try {
    await fetch("https://formsubmit.co/ajax/upindersangha01@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        name: form.value.name,
        email: form.value.email,
        message: form.value.message,
        _captcha: false,
        _template: "table",
        _subject: "Someone sent a message from your portfolio website!",
        _autoresponse: "Thanks for reaching out! I’ll get back to you shortly."
      })
    })

    submitted.value = true
    alert("Thanks for reaching out! I’ll get back to you as soon as possible at " + form.value.email);
    form.value = { name: '', email: '', message: '' }
  } catch (err) {
    console.error("Submission error:", err)
    alert("Something went wrong. Please try again later.")
  } finally {
    loading.value = false
  }
}
</script>
