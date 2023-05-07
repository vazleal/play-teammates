import { prisma } from '@/database/prisma'

import { type Invite } from '@prisma/client'

import { InviteNotFound } from '@/application/errors/invites/invite-not-found'

interface FilterInviteRequest {
    game: string
}

interface FilterInviteResponse {
  invites: Invite[]
}

export class FilterInvite {
  async execute(request: FilterInviteRequest): Promise<FilterInviteResponse> {
    const { game } = request

    const invites = await prisma.invite.findMany({
        where: { game }
    })

    if (!invites) {
        throw new InviteNotFound()
    }

    return { invites }
  }
}