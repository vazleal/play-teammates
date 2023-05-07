import { type Invite } from '@prisma/client'

interface HTTPInvite {
  id: string
  isRanked: boolean
  game: string
  notes: string
  numPlayers: number
  rankPlayers: string[]
  tags: string[]
  userId: string
  createdAt: Date
  updatedAt: Date
}

export class InviteViewModel {
  static toHTTP(invite: Invite): HTTPInvite {
    return {
      id: invite.id,
      isRanked: invite.isRanked,
      game: invite.game,
      notes: invite.notes,
      numPlayers: invite.numPlayers,
      rankPlayers: invite.rankPlayers.split(','),
      tags: invite.tags.split(','),
      userId: invite.userId,
      createdAt: invite.createdAt,
      updatedAt: invite.updatedAt
    }
  }
}
