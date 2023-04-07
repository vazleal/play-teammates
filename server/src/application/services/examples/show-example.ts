import { inject as Inject, injectable as Injectable } from 'tsyringe'

import { type Example } from '@/domain/entities/example'
import { ExamplesRepository } from '@/application/repositories/examples-repository'

import { ExampleNotFound } from '@/application/errors/examples/example-not-found'

interface ShowExampleRequest {
  exampleId: string
}

interface ShowExampleResponse {
  example: Example
}

@Injectable()
export class ShowExample {
  constructor(
    @Inject('ExamplesRepository')
    private readonly examplesRepository: ExamplesRepository
  ) {}

  async execute(request: ShowExampleRequest): Promise<ShowExampleResponse> {
    const { exampleId } = request

    const example = await this.examplesRepository.findById(exampleId)

    if (!example) {
      throw new ExampleNotFound()
    }

    return { example }
  }
}
