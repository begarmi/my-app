import { categories } from "~/server/api/data/categories"

export default defineEventHandler(() => {
    return categories;
  })
  