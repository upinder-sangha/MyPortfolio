<!-- components/docative/DocativeLoading.vue -->
<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white rounded-2xl p-8 max-w-sm w-full mx-4 shadow-2xl">
      <div class="flex flex-col items-center">
        <div class="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mb-4"></div>
        <h3 class="text-xl font-bold text-gray-900 mb-2">Processing Your Document</h3>
        <p class="text-gray-600 text-center">This may take a few moments. Please don't close this page.</p>
      </div>
    </div>
  </div>
</template>