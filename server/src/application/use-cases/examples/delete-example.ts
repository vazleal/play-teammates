import { prisma } from '@/database/prisma'

import { type Example } from '@prisma/client'

import { ExampleNotFound } from '@/application/errors/examples/example-not-found'

interface DeleteExampleRequest {
  exampleId: string
}

interface DeleteExampleResponse {
  example: Example
}

export class DeleteExample {
  async execute(request: DeleteExampleRequest): Promise<DeleteExampleResponse> {
    const { exampleId } = request

    const example = await prisma.example.findUnique({
      where: { id: exampleId }
    })

    if (!example) {
      throw new ExampleNotFound()
    }

    await prisma.example.delete({ where: { id: exampleId } })

    return { example }
  }
}
