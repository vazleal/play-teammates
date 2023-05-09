import { z } from 'zod'

export const updateUserBody = z.object({
  username: z.string().nonempty(),
  email: z.string().email(),
  steamId: z.string(),
  steamName: z.string(),
  riotId: z.string(),
  riotTag: z.string()
})
