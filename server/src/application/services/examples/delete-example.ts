import { inject as Inject, injectable as Injectable } from 'tsyringe'

import { type Example } from '@/domain/entities/example'
import { ExamplesRepository } from '@/application/repositories/examples-repository'

import { ExampleNotFound } from '@/application/errors/examples/example-not-found'

interface DeleteExampleRequest {
  exampleId: string
}

interface DeleteExampleResponse {
  example: Example
}

@Injectable()
export class DeleteExample {
  constructor(
    @Inject('ExamplesRepository')
    private readonly examplesRepository: ExamplesRepository
  ) {}

  async execute(request: DeleteExampleRequest): Promise<DeleteExampleResponse> {
    const { exampleId } = request

    const example = await this.examplesRepository.findById(exampleId)

    if (!example) {
      throw new ExampleNotFound()
    }

    await this.examplesRepository.delete(example)

    return { example }
  }
}
