<template>
  <aside v-if="visible" class="sidebar">
    <button class="close-btn" @click="$emit('close')">×</button>
    <slot />
  </aside>
</template>

<script setup>
defineProps({
  visible: {
    type: Boolean,
    required: true,
  },
})
defineEmits(['close'])
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  background-color: #f4f4f4;
  border-right: 1px solid #ddd;
  padding: 1rem;
  box-shadow: 2px 0 6px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  z-index: 1000;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
</style>
