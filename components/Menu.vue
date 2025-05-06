<template>
  <nav class="menu" ref="menuRef">
    <NuxtLink to="/" class="menu-link">Home</NuxtLink>

    <button @click="toggleCategories" class="menu-button" :aria-expanded="showCategories.toString()">
      Categories
    </button>

    <button @click="$emit('toggle-sidebar')" class="menu-button">
      Open Sidebar
    </button>

    <div v-if="showCategories" class="dropdown">
      <Categories />
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useClickOutside } from '~/composables/useClickOutside'

defineEmits(['toggle-sidebar'])

const showCategories = ref(false)
const menuRef = ref(null)

const toggleCategories = () => {
  showCategories.value = !showCategories.value
}

useClickOutside(menuRef, () => {
  showCategories.value = false
})

const handleEscape = (e) => {
  if (e.key === 'Escape') showCategories.value = false
}
onMounted(() => window.addEventListener('keydown', handleEscape))
onUnmounted(() => window.removeEventListener('keydown', handleEscape))
</script>
