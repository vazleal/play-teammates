import { Router } from 'express'

import { exampleRoutes } from './example-routes'
import { userRoutes } from './user-routes'
import { sessionRoutes } from './session-routes'

const appRoutes = Router()

appRoutes.use('/examples', exampleRoutes)
appRoutes.use('/users', userRoutes)
appRoutes.use('/sessions', sessionRoutes)

export { appRoutes }
