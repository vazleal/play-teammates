import { z } from 'zod'

export const showExampleParams = z.object({
  exampleId: z.string().cuid()
})
