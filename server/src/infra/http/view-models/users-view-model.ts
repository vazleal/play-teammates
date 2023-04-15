import { type User } from '@prisma/client'

interface HTTPUser {
  id: string
  username: string
  email: string
  avatar: string
  steamId: string | null
  riotId: string | null
  createdAt: Date
  updatedAt: Date
}

export class UserViewModel {
  static toHTTP(user: User): HTTPUser {
    return {
      id: user.id,
      username: user.username,
      email: user.email,
      avatar: user.avatarUrl,
      steamId: user.steamId,
      riotId: user.riotId,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    }
  }
}
