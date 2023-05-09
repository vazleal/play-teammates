import { z } from 'zod'

export const updateUserBody = z.object({
  username: z.string().nonempty(),
  email: z.string().email(),
  steamId: z.string().nonempty(),
  steamName: z.string().nonempty(),
  riotId: z.string().nonempty(),
  riotTag: z.string().nonempty()
})
