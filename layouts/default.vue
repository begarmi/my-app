<template>
    <div>
      <Menu :categories="categories" />
      <NuxtPage />
    </div>
  </template>
  
  <script setup>
  const { data: categories } = await useFetch('/api/categories')
  </script>
  