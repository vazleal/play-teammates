import { z } from 'zod'

export const deleteExampleParams = z.object({
  exampleId: z.string().uuid()
})
