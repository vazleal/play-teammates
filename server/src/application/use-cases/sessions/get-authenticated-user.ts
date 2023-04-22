import { prisma } from '@/database/prisma'

import { type User } from '@prisma/client'

import { UserNotFound } from '@/application/errors/users/user-not-found'

interface GetAuthenticatedUserRequest {
  userId: string
}

interface GetAuthenticatedUserResponse {
  user: User
}

export class GetAuthenticatedUser {
  async execute(
    request: GetAuthenticatedUserRequest
  ): Promise<GetAuthenticatedUserResponse> {
    const { userId } = request

    const user = await prisma.user.findUnique({
      where: { id: userId }
    })

    if (!user) {
      throw new UserNotFound()
    }

    return { user }
  }
}
