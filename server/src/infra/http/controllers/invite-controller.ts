import { type Request, type Response } from 'express'

import { CreateInvite } from '@/application/use-cases/invites/create-invite'
import { authenticatedUserId } from '../dtos/invites/authenticated-user-id'
import { createInviteBody } from '@/infra/http/dtos/invites/create-invite-body'

import { ShowInvite } from '@/application/use-cases/invites/show-invite'
import { showInviteParams } from '@/infra/http/dtos/invites/show-invite-params'

import { FilterInvites } from '@/application/use-cases/invites/filter-invite'
import { filterInvitesParams } from '@/infra/http/dtos/invites/filter-invite-params'

import { InviteViewModel } from '@/infra/http/view-models/invites-view-model'

export class InviteController {
  async create(request: Request, response: Response): Promise<any> {
    const userId = authenticatedUserId.parse(request.user.uid)

    const {
      isRanked,
      game,
      notes,
      numPlayers,
      rankPlayers,
      motivation,
      communication
    } = createInviteBody.parse(request.body)

    const createInvite = new CreateInvite()

    const { invite } = await createInvite.execute({
      userId,
      isRanked,
      game,
      notes,
      numPlayers,
      rankPlayers,
      motivation,
      communication
    })

    return response.status(201).json({ invite: InviteViewModel.toHTTP(invite) })
  }

  async show(request: Request, response: Response): Promise<any> {
    const { inviteId } = showInviteParams.parse(request.params)

    const showInvite = new ShowInvite()
    const { invite } = await showInvite.execute({ inviteId })

    return response.status(200).json({ invite })
  }

  async filter(request: Request, response: Response): Promise<any> {
    const { game } = filterInvitesParams.parse(request.params)

    const filterInvites = new FilterInvites()
    const { invites } = await filterInvites.execute({ game })

    return response.status(200).json({ invites })
  }
}
