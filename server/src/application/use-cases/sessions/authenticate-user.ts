import { prisma } from '@/database/prisma'

import { type User } from '@prisma/client'

import { sign } from 'jsonwebtoken'
import { compare } from 'bcrypt'

import { UserNotFound } from '@/application/errors/users/user-not-found'
import { InvalidCredentials } from '@/application/errors/sessions/invalid-credentials'

import { SECRET } from '@/config/env/auth'

interface AuthenticateUserRequest {
  email: string
  password: string
}

interface AuthenticateUserResponse {
  token: string
  user: User
}

export class AuthenticateUser {
  async execute(
    request: AuthenticateUserRequest
  ): Promise<AuthenticateUserResponse> {
    const { email, password } = request

    const user = await prisma.user.findUnique({
      where: { email }
    })

    if (!user) {
      throw new UserNotFound()
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new InvalidCredentials()
    }

    const token = sign({ uid: user.id }, SECRET, {
      expiresIn: '7d'
    })

    return { token, user }
  }
}
