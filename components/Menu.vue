<template>
  <nav class="menu" ref="menuRef">
    <button @click="$emit('toggle-sidebar')" class="menu-button">
      Open Sidebar
    </button>
    <NuxtLink to="/" class="menu-link">Home</NuxtLink>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

defineEmits(['toggle-sidebar'])

const menuRef = ref(null)
</script>
