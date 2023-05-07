import { z } from 'zod'

export const showInviteParams = z.object({
  inviteId: z.string().uuid()
})
