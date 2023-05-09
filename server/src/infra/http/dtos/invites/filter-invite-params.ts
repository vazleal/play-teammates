import { z } from 'zod'

export const filterInvitesParams = z.object({
  game: z.enum(['all', 'counter-strike', 'valorant'])
})
