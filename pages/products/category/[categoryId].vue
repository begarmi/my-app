<template>
  <div class="page-wrapper">
    <h1>
      Products in: {{ selectedCategory }}
      <span v-if="mergedItems?.length">({{ mergedItems.length }})</span>
    </h1>

    <ProductList v-if="mergedItems?.length" :products="mergedItems" />

    <p v-else>No products found for this category.</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useSelectedCategory } from '~/composables/useSelectedCategory'

const selectedCategory = useSelectedCategory()

const { data: products } = await useFetch('/api/products')
const { data: promotionalSpots } = await useFetch('/api/promotional-spots')

const filteredProducts = computed(() =>
  products.value?.filter(
    (p) =>
      Array.isArray(p.categories) &&
      p.categories.includes(selectedCategory.value)
  ) || []
)

const mergedItems = computed(() => {
  const result = [...filteredProducts.value]

  if (!promotionalSpots.value) return result

  const sortedPromos = [...promotionalSpots.value].sort((a, b) => a.position - b.position)

  sortedPromos.forEach((promo) => {
    const index = Math.min(promo.position, result.length)
    result.splice(index, 0, { ...promo, _isPromo: true })
  })

  return result
})
</script>

<style scoped>
.page-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}
</style>
