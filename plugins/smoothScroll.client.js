// plugins/smoothScroll.client.js
export default defineNuxtPlugin(() => {
  // Only run on client side
  if (process.client) {
    // Wait for DOM to be fully loaded
    window.addEventListener('DOMContentLoaded', () => {
      // Get all anchor links that start with #
      const anchorLinks = document.querySelectorAll('a[href^="#"]')
      
      // Add click event listener to each anchor link
      anchorLinks.forEach(link => {
        link.addEventListener('click', function (e) {
          e.preventDefault()
          
          // Get the target element
          const targetId = this.getAttribute('href')
          const targetElement = document.querySelector(targetId)
          
          if (targetElement) {
            // Calculate offset for fixed navbar
            const navbarHeight = document.querySelector('nav')?.offsetHeight || 0
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight
            
            // Smooth scroll to target
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            })
            
            // Update URL without triggering navigation
            history.pushState(null, null, targetId)
          }
        })
      })
    })
  }
})