import { prisma } from '@/database/prisma'

import { type User } from '@prisma/client'

import { UserAlreadyRegistered } from '@/application/errors/users/user-already-registered'

import { hash } from 'bcrypt'
import { UserNotFound } from '@/application/errors/users/user-not-found'

interface UpdateUserRequest {
  id: string
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
    const { id, username, email, steamId, steamName, riotId, riotTag } = request

    const user = await prisma.user.findUnique({
      where: { id }
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

    if (usernameRegistered || emailRegistered) {
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
      where: { id }
    })

    return { newUser }
  }
}
