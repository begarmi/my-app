<template>
    <div>
      <Menu @toggle-sidebar="isSidebarVisible = true" />
      <Sidebar :visible="isSidebarVisible" @close="isSidebarVisible = false">
        <Categories />
      </Sidebar>
      <NuxtPage />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const isSidebarVisible = ref(false)
  </script>
  