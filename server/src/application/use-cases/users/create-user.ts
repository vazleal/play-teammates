import { prisma } from '@/database/prisma'

import { type User } from '@prisma/client'

import { UserAlreadyRegistered } from '@/application/errors/users/user-already-registered'

import { hash } from 'bcrypt'

interface CreateUserRequest {
  username: string
  email: string
  password: string
}

interface CreateUserResponse {
  user: User
}

export class CreateUser {
  async execute(request: CreateUserRequest): Promise<CreateUserResponse> {
    const { username, email, password } = request

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

    const avatarUrl = `https://api.multiavatar.com/${username}`
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        avatarUrl
      }
    })

    return { user }
  }
}
