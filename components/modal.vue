<template>
  <!-- Modal -->
  <dialog :id="`modal-${data.id}`" class="modal">
    <div class="modal-box">
      <h3 class="font-bold text-lg">{{ data.title }}</h3>
      <p class="py-4">{{ data.description }}</p>
      <div class="modal-action">
        <form method="dialog">
          <button class="btn">Close</button>
        </form>
      </div>
    </div>
  </dialog>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>