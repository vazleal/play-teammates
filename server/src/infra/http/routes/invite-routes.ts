import { Router } from 'express'

import { InviteController } from '@/infra/http/controllers/invite-controller'

const inviteRoutes = Router()
const inviteController = new InviteController()

inviteRoutes.post('/', inviteController.create)
// inviteRoutes.get('/:id', inviteController.get)
// inviteRoutes.get('/:game', inviteController.getInvitesByGame)

export { inviteRoutes }
