import { type Request, type Response } from 'express'

import { GetExamples } from '@/application/use-cases/examples/list-examples'
import { ShowExample } from '@/application/use-cases/examples/show-example'
import { CreateExample } from '@/application/use-cases/examples/create-example'
import { UpdateExample } from '@/application/use-cases/examples/update-example'
import { DeleteExample } from '@/application/use-cases/examples/delete-example'

import { showExampleParams } from '@/validations/examples/show-example-params'
import { createExampleBody } from '@/validations/examples/create-example-body'
import { updateExampleParams } from '@/validations/examples/update-example-params'
import { updateExampleBody } from '@/validations/examples/update-example-body'
import { deleteExampleParams } from '@/validations/examples/delete-example-params'

export class ExampleController {
  async index(request: Request, response: Response): Promise<any> {
    const getExamples = new GetExamples()
    const { examples } = await getExamples.execute()

    return response.status(200).json({ examples })
  }

  async show(request: Request, response: Response): Promise<any> {
    const { exampleId } = showExampleParams.parse(request.params)

    const showExample = new ShowExample()
    const { example } = await showExample.execute({ exampleId })

    return response.status(200).json({ example })
  }

  async create(request: Request, response: Response): Promise<any> {
    const { message } = createExampleBody.parse(request.body)

    const createExample = new CreateExample()
    const { example } = await createExample.execute({ message })

    return response.status(201).json({ example })
  }

  async update(request: Request, response: Response): Promise<any> {
    const { exampleId } = updateExampleParams.parse(request.params)
    const { message } = updateExampleBody.parse(request.body)

    const updateExample = new UpdateExample()
    const { example } = await updateExample.execute({ exampleId, message })

    return response.status(200).json({ example })
  }

  async delete(request: Request, response: Response): Promise<any> {
    const { exampleId } = deleteExampleParams.parse(request.params)

    const deleteExample = new DeleteExample()
    const { example } = await deleteExample.execute({ exampleId })

    return response.status(200).json({ example })
  }
}
