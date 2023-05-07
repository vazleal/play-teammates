import { prisma } from '@/database/prisma'

import { type User } from '@prisma/client'

import { UserAlreadyRegistered } from '@/application/errors/users/user-already-registered'

import { hash } from 'bcrypt'
import { UserNotFound } from '@/application/errors/users/user-not-found'

interface UpdateUserRequest {
  id: string
  username: string
  email: string
  password: string
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
    const { id, username, email, password, steamId, steamName, riotId, riotTag } = request

    const user = await prisma.user.findUnique({
      where: { id: id}
    })

    if (!user){
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

    const hashedPassword = await hash(password, 10)

    const newUser = await prisma.user.update({
      data: {
        username,
        email,
        password: hashedPassword,
        steamId,
        steamName,
        riotId,
        riotTag
      },
      where: { id: id }
    })

    return { newUser }
  }
}
