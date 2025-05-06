<template>
  <div class="card">
    <pre>{{ JSON.stringify(product, null, 2) }}</pre>
  </div>
</template>

<script setup>
  defineProps({
    product: Object
  })
</script>

<style scoped>
  .card {
    width: 100%;
    max-height: 440px;
    min-height: 440px;
    overflow: auto;
    border: 1px solid red;
    padding: 1rem;
    border-radius: 6px;
    background-color: #f9f9f9;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
  }
</style>
