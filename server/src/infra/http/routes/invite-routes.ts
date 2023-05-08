import { Router } from 'express'

import { InviteController } from '@/infra/http/controllers/invite-controller'

import { ensureAuthenticated } from '../middlewares/ensure-authenticated'

const inviteRoutes = Router()
const inviteController = new InviteController()

inviteRoutes.post('/', ensureAuthenticated, inviteController.create)
inviteRoutes.get('/:id', inviteController.show)
inviteRoutes.get('/:game', inviteController.filter)

export { inviteRoutes }
