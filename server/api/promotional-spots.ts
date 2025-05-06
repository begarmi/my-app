import { promotionalSpots } from "~/server/api/data/promotional-spots"

export default defineEventHandler(() => {
    return promotionalSpots;
  })
  