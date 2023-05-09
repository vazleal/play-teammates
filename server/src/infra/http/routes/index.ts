import { Router } from 'express'

import { userRoutes } from './user-routes'
import { sessionRoutes } from './session-routes'
import { inviteRoutes } from './invite-routes'

const appRoutes = Router()

appRoutes.use('/users', userRoutes)
appRoutes.use('/sessions', sessionRoutes)
appRoutes.use('/invites', inviteRoutes)

export { appRoutes }
