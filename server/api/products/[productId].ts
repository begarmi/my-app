import { products } from '~/server/api/data/products'

export default defineEventHandler((event) => {
  const { productId } = event.context.params
  const product = products.find(p => p.id === Number(productId))
  
  return product || null
})
