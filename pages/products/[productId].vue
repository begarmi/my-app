<template>
  <div class="product-page">
    <h1>Product Details</h1>

    <div v-if="product">
      <ProductCard :product="product" />
    </div>

    <div v-else>
      <p>Product not found.</p>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const { data: product } = await useFetch(`/api/products/${route.params.productId}`)

</script>

<style scoped>
.product-page {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
}
</style>
