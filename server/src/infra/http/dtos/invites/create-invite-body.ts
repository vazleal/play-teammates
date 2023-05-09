import { z } from 'zod'

export const createInviteBody = z.object({
  isRanked: z.boolean(),
  game: z.enum(['counter-strike', 'valorant']),
  notes: z.string().nonempty(),
  numPlayers: z.number(),
  rankPlayers: z.string().nonempty(),
  motivation: z.string().nonempty(),
  communication: z.string().nonempty()
})
