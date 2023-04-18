import { type Request, type Response } from 'express'

import { AuthenticateUser } from '@/application/use-cases/sessions/authenticate-user'

import { authenticateUserBody } from '@/infra/http/dtos/sessions/authenticate-user-body'

import { UserViewModel } from '@/infra/http/view-models/users-view-model'

export class SessionController {
  async authenticate(request: Request, response: Response): Promise<any> {
    const { email, password } = authenticateUserBody.parse(request.body)

    const authenticateUser = new AuthenticateUser()
    const { token, user } = await authenticateUser.execute({ email, password })

    return response
      .status(200)
      .json({ token, user: UserViewModel.toHTTP(user) })
  }
}
