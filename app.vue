<template>
    <NuxtPage />
</template>

<script setup>
useHead({
  titleTemplate: (title) => title ? `${title} | Upinder Singh Sangha` : 'Upinder Singh Sangha | Portfolio',
  meta: [
    { name: 'description', content: 'Software Developer and Data Analyst specializing in full-stack, cloud, and AI.' },
    { name: 'keywords', content: 'Upinder, Portfolio, Software Developer, Full-Stack, AI, Data Analyst, Cloud' },
    { property: 'og:image', content: 'https://www.upindersangha.com/images/Preview.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'apple-mobile-web-app-title', content: 'MyWebSite' },
  ],
  link: [
    { rel: 'canonical', href: 'https://upindersangha.com/' },
    { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'shortcut icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
    {
      rel: 'stylesheet',
      href: "https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap",
    },
    {
      rel: 'stylesheet',
      href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap",
    },
    {
      rel: 'stylesheet',
      href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Manrope:wght@200..800&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap",
    },
    {
      rel: 'stylesheet',
      href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Manrope:wght@200..800&family=Raleway:ital,wght@0,100..900;1,100..900&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap",
    },
    {
      rel: 'stylesheet',
      href: "https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Manrope:wght@200..800&family=Raleway:ital,wght@0,100..900;1,100..900&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap",
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        'name': 'Upinder Singh Sangha',
        'url': 'https://upindersangha.com',
        'sameAs': [
          'https://www.linkedin.com/in/upinder-sangha',
          'https://github.com/upinder-sangha',
        ],
        'jobTitle': 'Software Developer / Data Analyst',
      }),
    },
  ],
  __dangerouslyDisableSanitizers: ['script'],
})
</script>