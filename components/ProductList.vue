<template>
  <div v-if="products?.length" class="product-grid">
    <NuxtLink
      v-for="product in products"
      :key="product.id"
      :to="product._isPromo ? product.link :`/products/${product.id}`"
      class="card-link"
    >
      <PromoCard v-if="product._isPromo" :product="product" />
      <ProductCard v-else :product="product" />
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  products: {
    type: Array,
    required: true,
  },
})

</script>

<style scoped>
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
  padding: 1rem 0;
}

.card-link {
  text-decoration: none;
  color: inherit;
}
</style>