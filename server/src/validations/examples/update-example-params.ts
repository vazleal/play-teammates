import { z } from 'zod'

export const updateExampleParams = z.object({
  exampleId: z.string().uuid()
})
