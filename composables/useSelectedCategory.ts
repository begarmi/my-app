import { useRoute } from 'vue-router'

export const useSelectedCategory = () => {
  const route = useRoute()
  return computed(() => route.params.categoryId ?? null)
}
