import { Router } from 'express'

import { SessionController } from '@/infra/http/controllers/session-controller'

const sessionRoutes = Router()
const sessionController = new SessionController()

sessionRoutes.post('/', sessionController.authenticate)

export { sessionRoutes }
