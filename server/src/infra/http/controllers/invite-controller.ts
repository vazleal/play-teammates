import { type Request, type Response } from 'express'

import { CreateInvite } from '@/application/use-cases/invites/create-invite'

import { createInviteBody } from '@/infra/http/dtos/invites/create-invite-body'

import { InviteViewModel } from '@/infra/http/view-models/invites-view-model'

export class InviteController {
  async create(request: Request, response: Response): Promise<any> {
    const { userId, isRanked, game, notes, numPlayers, rankPlayers, tags } = createInviteBody.parse(request.body)

    const createInvite = new CreateInvite()
    
    const { invite } = await createInvite.execute({ userId, isRanked, game, notes, numPlayers, rankPlayers, tags })

    return response.status(201).json({ user: InviteViewModel.toHTTP(invite) })
  }
}
