<template>
  <nav class="menu" ref="menuRef">
    <button @click="toggleSidebar" class="menu-button">
      Open Sidebar
    </button>
    <NuxtLink to="/" class="menu-link">Home</NuxtLink>

    <Sidebar :visible="showSidebar" @close="showSidebar = false">
      <Categories />
    </Sidebar>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useClickOutside } from '~/composables/useClickOutside'
import Sidebar from './Sidebar.vue'

const showSidebar = ref(false)
const menuRef = ref(null)

const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value
}

useClickOutside(menuRef, () => {
  if (showSidebar.value) {
    showSidebar.value = false
  }
})
</script>
