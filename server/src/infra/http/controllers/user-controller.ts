import { type Request, type Response } from 'express'

import { CreateUser } from '@/application/use-cases/users/create-user'

import { createUserBody } from '@/infra/http/dtos/users/create-user-body'

import { UserViewModel } from '@/infra/http/view-models/users-view-model'

export class UserController {
  async create(request: Request, response: Response): Promise<any> {
    const { username, email, password } = createUserBody.parse(request.body)

    const createUser = new CreateUser()
    const { user } = await createUser.execute({ username, email, password })

    return response.status(201).json({ user: UserViewModel.toHTTP(user) })
  }
}
