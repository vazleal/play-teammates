import { type Request, type Response } from 'express'

import { CreateUser } from '@/application/use-cases/users/create-user'

import { createUserBody } from '@/infra/http/dtos/users/create-user-body'

import { UpdateUser } from '@/application/use-cases/users/update-user'

import { updateUserBody } from '@/infra/http/dtos/users/update-user-body'

import { updateUserParams } from '@/infra/http/dtos/users/update-user-params'

import { UserViewModel } from '@/infra/http/view-models/users-view-model'

export class UserController {
  async create(request: Request, response: Response): Promise<any> {
    const { username, email, password } = createUserBody.parse(request.body)

    const createUser = new CreateUser()
    const { user } = await createUser.execute({ username, email, password })

    return response.status(201).json({ user: UserViewModel.toHTTP(user) })
  }

  async update(request: Request, response: Response): Promise<any> {
    const { userId } = updateUserParams.parse(request.params)
    const { username, email, password, steamId, steamName, riotId, riotTag } = updateUserBody.parse(request.body)

    const updateExample = new UpdateUser()
    const { newUser } = await updateExample.execute({ id: userId, username, email, password, steamId, steamName, riotId, riotTag })

    return response.status(200).json({ newUser: UserViewModel.toHTTP(newUser) })
  }
}
