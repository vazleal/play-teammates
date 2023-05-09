import { prisma } from '@/database/prisma'

import { type Invite } from '@prisma/client'

interface CreateInviteRequest {
  isRanked: boolean
  game: string
  notes: string
  numPlayers: number
  rankPlayers: string
  motivation: string
  communication: string
  userId: string
}

interface CreateInviteResponse {
  invite: Invite
}

export class CreateInvite {
  async execute(request: CreateInviteRequest): Promise<CreateInviteResponse> {
    const {
      userId,
      isRanked,
      game,
      notes,
      numPlayers,
      rankPlayers,
      motivation,
      communication
    } = request

    const invite = await prisma.invite.create({
      data: {
        userId,
        isRanked,
        game,
        notes,
        numPlayers,
        rankPlayers,
        motivation,
        communication
      }
    })

    return { invite }
  }
}
