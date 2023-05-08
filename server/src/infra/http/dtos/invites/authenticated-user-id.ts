import { z } from 'zod'

export const authenticatedUserId = z.string().uuid()
