import { inject as Inject, injectable as Injectable } from 'tsyringe'

import { type Example } from '@/domain/entities/example'
import { ExamplesRepository } from '@/application/repositories/examples-repository'

import { ExampleNotFound } from '@/application/errors/examples/example-not-found'

interface UpdateExampleRequest {
  exampleId: string
  message: string
}

interface UpdateExampleResponse {
  example: Example
}

@Injectable()
export class UpdateExample {
  constructor(
    @Inject('ExamplesRepository')
    private readonly examplesRepository: ExamplesRepository
  ) {}

  async execute(request: UpdateExampleRequest): Promise<UpdateExampleResponse> {
    const { exampleId, message } = request

    const example = await this.examplesRepository.findById(exampleId)

    if (!example) {
      throw new ExampleNotFound()
    }

    example.message = message

    await this.examplesRepository.save(example)

    return { example }
  }
}
