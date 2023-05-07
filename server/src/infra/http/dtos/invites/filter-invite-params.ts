import { z } from 'zod'

export const filterInviteParams = z.object({
  game: z.string().nonempty()
})
