<script setup>
const { data: categories } = await useFetch('/api/categories')
const router = useRouter()

function handleSelect(id) {
  router.push(`/products/category/${id}`)
}
</script>

<template>
  <div>
    <div>
      <CategoryTree
        v-for="cat in categories"
        :key="cat.id"
        :category="cat"
        @select="handleSelect"
      />
    </div>
  </div>
</template>
