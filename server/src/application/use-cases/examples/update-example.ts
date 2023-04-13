import { prisma } from '@/database/prisma'

import { type Example } from '@prisma/client'

import { ExampleNotFound } from '@/application/errors/examples/example-not-found'

interface UpdateExampleRequest {
  exampleId: string
  message: string
}

interface UpdateExampleResponse {
  example: Example
}

export class UpdateExample {
  async execute(request: UpdateExampleRequest): Promise<UpdateExampleResponse> {
    const { exampleId, message } = request

    const example = await prisma.example.findUnique({
      where: { id: exampleId }
    })

    if (!example) {
      throw new ExampleNotFound()
    }

    const newExample = await prisma.example.update({
      data: { message },
      where: { id: exampleId }
    })

    return { example: newExample }
  }
}
