import { type Request, type Response } from 'express'

import { CreateUser } from '@/application/use-cases/users/create-user'
import { createUserBody } from '@/infra/http/dtos/users/create-user-body'

import { UpdateUser } from '@/application/use-cases/users/update-user'
import { authenticatedUserId } from '../dtos/invites/authenticated-user-id'
import { updateUserBody } from '@/infra/http/dtos/users/update-user-body'

import { UserViewModel } from '@/infra/http/view-models/users-view-model'

export class UserController {
  async create(request: Request, response: Response): Promise<any> {
    const { username, email, password } = createUserBody.parse(request.body)

    const createUser = new CreateUser()
    const { user } = await createUser.execute({ username, email, password })

    return response.status(201).json({ user: UserViewModel.toHTTP(user) })
  }

  async update(request: Request, response: Response): Promise<any> {
    const userId = authenticatedUserId.parse(request.user.uid)

    const { username, email, steamId, steamName, riotId, riotTag } =
      updateUserBody.parse(request.body)

    const updateUser = new UpdateUser()

    const { newUser } = await updateUser.execute({
      id: userId,
      username,
      email,
      steamId,
      steamName,
      riotId,
      riotTag
    })

    return response.status(200).json({ newUser: UserViewModel.toHTTP(newUser) })
  }
}
