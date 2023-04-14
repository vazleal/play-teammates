import { Router } from 'express'

import { ExampleController } from '@/infra/http/controllers/example-controller'

const exampleRoutes = Router()
const exampleController = new ExampleController()

exampleRoutes.get('', exampleController.index)
exampleRoutes.get('/:exampleId', exampleController.show)
exampleRoutes.post('/', exampleController.create)
exampleRoutes.put('/:exampleId', exampleController.update)
exampleRoutes.delete('/:exampleId', exampleController.delete)

export { exampleRoutes }
