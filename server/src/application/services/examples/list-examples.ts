import { inject as Inject, injectable as Injectable } from 'tsyringe'

import { type Example } from '@/domain/entities/example'
import { ExamplesRepository } from '@/application/repositories/examples-repository'

interface GetExamplesResponse {
  examples: Example[]
}

@Injectable()
export class GetExamples {
  constructor(
    @Inject('ExamplesRepository')
    private readonly examplesRepository: ExamplesRepository
  ) {}

  async execute(): Promise<GetExamplesResponse> {
    const examples = await this.examplesRepository.findMany()

    return { examples }
  }
}
