import { inject as Inject, injectable as Injectable } from 'tsyringe'

import { Example } from '@/domain/entities/example'
import { ExamplesRepository } from '@/application/repositories/examples-repository'

interface CreateExampleRequest {
  message: string
}

interface CreateExampleResponse {
  example: Example
}

@Injectable()
export class CreateExample {
  constructor(
    @Inject('ExamplesRepository')
    private readonly examplesRepository: ExamplesRepository
  ) {}

  async execute(request: CreateExampleRequest): Promise<CreateExampleResponse> {
    const { message } = request

    const example = new Example({
      message
    })

    await this.examplesRepository.create(example)

    return { example }
  }
}
