import { type User } from '@prisma/client'

interface HTTPUser {
  id: string
  username: string
  email: string
  avatar: string
  steamId: string | null
  steamName: string | null
  riotId: string | null
  riotTag: string | null
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
      steamName: user.steamName,
      riotId: user.riotId,
      riotTag: user.riotTag,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    }
  }
}
