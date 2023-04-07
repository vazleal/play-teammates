import { container } from 'tsyringe'

import { type Request, type Response } from 'express'

import { GetExamples } from '@/application/services/examples/list-examples'
import { ShowExample } from '@/application/services/examples/show-example'
import { CreateExample } from '@/application/services/examples/create-example'

import { DeleteExample } from '@/application/services/examples/delete-example'
import { UpdateExample } from '@/application/services/examples/update-example'
import { showExampleParams } from '../dtos/examples/show-example-params'
import { createExampleBody } from '../dtos/examples/create-example-body'
import { updateExampleParams } from '../dtos/examples/update-example-params'
import { updateExampleBody } from '../dtos/examples/update-example-body'
import { deleteExampleParams } from '../dtos/examples/delete-example-params'

import { ExampleViewModel } from '../view-models/example-view-model'

export class ExampleController {
  async index(request: Request, response: Response): Promise<any> {
    const getExamples = container.resolve(GetExamples)
    const { examples } = await getExamples.execute()

    return response.status(200).json({
      examples: examples.map(example => ExampleViewModel.toHTTP(example))
    })
  }

  async show(request: Request, response: Response): Promise<any> {
    const { exampleId } = showExampleParams.parse(request.params)

    const showExample = container.resolve(ShowExample)
    const { example } = await showExample.execute({ exampleId })

    return response.status(200).json({
      example: ExampleViewModel.toHTTP(example)
    })
  }

  async create(request: Request, response: Response): Promise<any> {
    const { message } = createExampleBody.parse(request.body)

    const createExample = container.resolve(CreateExample)
    const { example } = await createExample.execute({ message })

    return response.status(201).json({
      example: ExampleViewModel.toHTTP(example)
    })
  }

  async update(request: Request, response: Response): Promise<any> {
    const { exampleId } = updateExampleParams.parse(request.params)
    const { message } = updateExampleBody.parse(request.body)

    const updateExample = container.resolve(UpdateExample)
    const { example } = await updateExample.execute({ exampleId, message })

    return response.status(200).json({
      example: ExampleViewModel.toHTTP(example)
    })
  }

  async delete(request: Request, response: Response): Promise<any> {
    const { exampleId } = deleteExampleParams.parse(request.params)

    const deleteExample = container.resolve(DeleteExample)
    const { example } = await deleteExample.execute({ exampleId })

    return response.status(200).json({
      example: ExampleViewModel.toHTTP(example)
    })
  }
}
