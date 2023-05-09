import { prisma } from '@/database/prisma'

import { type Invite } from '@prisma/client'

interface FilterInvitesRequest {
  game: string
}

interface FilterInvitesResponse {
  invites: Invite[]
}

export class FilterInvites {
  async execute(request: FilterInvitesRequest): Promise<FilterInvitesResponse> {
    const { game } = request

    if (game === 'all') {
      const invites = await prisma.invite.findMany()

      return { invites }
    }

    const invites = await prisma.invite.findMany({
      where: { game }
    })

    return { invites }
  }
}
