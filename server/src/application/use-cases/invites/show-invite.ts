import { prisma } from '@/database/prisma'

import { type Invite } from '@prisma/client'

import { InviteNotFound } from '@/application/errors/invites/invite-not-found'

interface ShowInviteRequest {
  inviteId: string
}

interface ShowInviteResponse {
  invite: Invite
}

export class ShowInvite {
  async execute(request: ShowInviteRequest): Promise<ShowInviteResponse> {
    const { inviteId } = request

    const invite = await prisma.invite.findUnique({
      where: { id: inviteId }
    })

    if (!invite) {
      throw new InviteNotFound()
    }

    return { invite }
  }
}
