import { z } from 'zod'

export const createInviteBody = z.object({
  userId: z.string().nonempty(),
  isRanked: z.boolean(),
  game: z.string().nonempty(),
  notes: z.string().nonempty(),
  numPlayers: z.number(),
  rankPlayers: z.array(z.string()),
  tags: z.array(z.string())
})