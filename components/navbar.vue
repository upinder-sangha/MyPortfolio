<template>
  <div class="navbar bg-base-100/40 fixed top-0 w-full py-0 z-50 border-b border-base-content/10 min-h-12">
    <div class="navbar-start">
      <details class="dropdown">
        <summary role="button" class="btn btn-circle btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </summary>
        <ul class="menu menu-md dropdown-content glass-effect rounded-box w-52 my-2">
          <li>
            <NuxtLink to="#about">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#experience">Experience</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#skills">Skills</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#projects">Projects</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#contact">Contact</NuxtLink>
          </li>
        </ul>
      </details>
      <a class="btn btn-ghost text-xl font-normal">Upinder Singh Sangha</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li>
          <NuxtLink to="#about">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="#experience">Experience</NuxtLink>
        </li>
        <li>
          <NuxtLink to="#skills">Skills</NuxtLink>
        </li>
        <li>
          <NuxtLink to="#projects">Projects</NuxtLink>
        </li>
        <li>
          <NuxtLink to="#contact">Contact</NuxtLink>
        </li>
      </ul>
    </div>
    <div class="navbar-end">
      <ThemeController/>
    </div>
  </div>
</template>



<style lang="postcss" scoped>
.navbar {
  position: fixed;
  /* Ensure the navbar is fixed */
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  /* Ensure it stays on top of other content */
}

.navbar::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(16px);
  z-index: -1;
}

.glass-effect {
  @apply backdrop-blur-lg bg-base-100/50 border border-base-content/10;
}
</style>