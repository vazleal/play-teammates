import { z } from 'zod'

export const updateUserParams = z.object({
  userId: z.string().uuid()
})
