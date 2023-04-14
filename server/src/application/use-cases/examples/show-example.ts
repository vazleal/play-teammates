import { prisma } from '@/database/prisma'

import { type Example } from '@prisma/client'

import { ExampleNotFound } from '@/application/errors/examples/example-not-found'

interface ShowExampleRequest {
  exampleId: string
}

interface ShowExampleResponse {
  example: Example
}

export class ShowExample {
  async execute(request: ShowExampleRequest): Promise<ShowExampleResponse> {
    const { exampleId } = request

    const example = await prisma.example.findUnique({
      where: { id: exampleId }
    })

    if (!example) {
      throw new ExampleNotFound()
    }

    return { example }
  }
}
