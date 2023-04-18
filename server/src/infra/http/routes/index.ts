import { Router } from 'express'

import { exampleRoutes } from './example-routes'
import { userRoutes } from './user-routes'

const appRoutes = Router()

appRoutes.use('/examples', exampleRoutes)
appRoutes.use('/users', userRoutes)

export { appRoutes }
