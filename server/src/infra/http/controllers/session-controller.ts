import { type Request, type Response } from 'express'

import { AuthenticateUser } from '@/application/use-cases/sessions/authenticate-user'
import { authenticateUserBody } from '@/infra/http/dtos/sessions/authenticate-user-body'

import { GetAuthenticatedUser } from '@/application/use-cases/sessions/get-authenticated-user'
import { authenticatedUserId } from '@/infra/http/dtos/sessions/authenticated-user-id'

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

  async me(request: Request, response: Response): Promise<any> {
    const userId = authenticatedUserId.parse(request.user.uid)

    const getAuthenticatedUser = new GetAuthenticatedUser()
    const { user } = await getAuthenticatedUser.execute({ userId })

    return response.status(200).json({ user: UserViewModel.toHTTP(user) })
  }
}
