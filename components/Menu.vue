<template>
  <nav class="menu" ref="menuRef">
    <NuxtLink to="/" class="menu-link">Home</NuxtLink>

    <button @click="$emit('toggle-sidebar')" class="menu-button">
      Open Sidebar
    </button>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

defineEmits(['toggle-sidebar'])

const menuRef = ref(null)
</script>
