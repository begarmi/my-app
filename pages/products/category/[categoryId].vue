<template>
  <div class="page-wrapper">
    <h1>
      Products in: {{ selectedCategory }}
      <span v-if="filteredProducts?.length">({{ filteredProducts.length }})</span>
    </h1>

    <ProductList v-if="filteredProducts?.length" :products="filteredProducts" />

    <p v-else>No products found for this category.</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useSelectedCategory } from '~/composables/useSelectedCategory'

const selectedCategory = useSelectedCategory()

const { data: products } = await useFetch('/api/products')

const filteredProducts = computed(() =>
  products.value?.filter(
    (p) =>
      Array.isArray(p.categories) &&
      p.categories.includes(selectedCategory.value)
  )
)
</script>

<style scoped>
.page-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}
</style>
