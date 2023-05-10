import { UserNotFound } from '@/application/errors/users/user-not-found'
import { UserProfileNotCompleted } from '@/application/errors/users/user-profile-not-completed'
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

    const user = await prisma.user.findUnique({ where: { id: userId } })

    if (!user) {
      throw new UserNotFound()
    }

    if (game === 'valorant') {
      if (!user.riotId || !user.riotTag) {
        throw new UserProfileNotCompleted()
      }
    } else {
      if (!user.steamId || !user.steamName) {
        throw new UserProfileNotCompleted()
      }
    }

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
