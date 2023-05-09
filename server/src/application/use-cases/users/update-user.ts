import { prisma } from '@/database/prisma'

import { type User } from '@prisma/client'

import { UserAlreadyRegistered } from '@/application/errors/users/user-already-registered'

import { UserNotFound } from '@/application/errors/users/user-not-found'

interface UpdateUserRequest {
  userId: string
  username: string
  email: string
  steamId: string
  steamName: string
  riotId: string
  riotTag: string
}

interface UpdateUserResponse {
  newUser: User
}

export class UpdateUser {
  async execute(request: UpdateUserRequest): Promise<UpdateUserResponse> {
    const { userId, username, email, steamId, steamName, riotId, riotTag } =
      request

    const user = await prisma.user.findUnique({
      where: { id: userId }
    })

    if (!user) {
      throw new UserNotFound()
    }

    const usernameRegistered = await prisma.user.findUnique({
      where: { username }
    })

    const emailRegistered = await prisma.user.findUnique({
      where: { email }
    })

    if (
      (usernameRegistered && usernameRegistered.id !== userId) ||
      (emailRegistered && emailRegistered.id !== userId)
    ) {
      throw new UserAlreadyRegistered()
    }

    const avatarUrl = `https://api.dicebear.com/6.x/adventurer/svg?seed=${username}&scale=110&backgroundColor=c0aede,d1d4f9,ffd5dc,ffdfbf`

    const newUser = await prisma.user.update({
      data: {
        username,
        email,
        avatarUrl,
        steamId,
        steamName,
        riotId,
        riotTag
      },
      where: { id: userId }
    })

    return { newUser }
  }
}
