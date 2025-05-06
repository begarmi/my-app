<template>
  <ul class="category-tree">
    <li>
      <NuxtLink
        :to="`/products/category/${category.id}`"
        class="category-link"
        @click="$emit('select', category.id)"
      >
        {{ category.name.en }}
      </NuxtLink>

      <CategoryTree
        v-for="sub in category.categories || []"
        :key="sub.id"
        :category="sub"
        @select="$emit('select', $event)"
      />
    </li>
  </ul>
</template>

<script setup>
defineProps({ category: Object })
defineEmits(['select'])
</script>


<style scoped>
.category-tree {
  padding-left: 1rem; /* less indentation */
  margin: 0;
  list-style-type: none; /* cleaner look */
}

.category-tree > li {
  margin: 0.3rem 0;
  line-height: 1.4;
}

.category-link {
  color: #333;
  text-decoration: none;
  font-size: 0.95rem;
  display: inline-block;
  transition: color 0.2s ease;
}

.category-link:hover {
  color: #007bff;
  text-decoration: underline;
}
</style>
