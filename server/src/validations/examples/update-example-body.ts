import { z } from 'zod'

export const updateExampleBody = z.object({
  message: z.string()
})
