import { prisma } from '@/database/prisma'

import { type Invite } from '@prisma/client'

interface CreateInviteRequest {
  isRanked: boolean
  game: string
  notes: string
  numPlayers: number
  rankPlayers: string[]
  tags: string[]
  userId: string
}

interface CreateInviteResponse {
  invite: Invite
}

export class CreateInvite {
  async execute(request: CreateInviteRequest): Promise<CreateInviteResponse> {
    const { isRanked, game, notes, numPlayers, rankPlayers, tags, userId } = request

    const invite = await prisma.invite.create({
      data: {
        userId,
        isRanked, 
        game, 
        notes, 
        numPlayers, 
        rankPlayers: rankPlayers.toString(), 
        tags: tags.toString()
      }
    })

    return { invite }
  }
}
