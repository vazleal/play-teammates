import { prisma } from '@/database/prisma'

import { type Example } from '@prisma/client'

interface CreateExampleRequest {
  message: string
}

interface CreateExampleResponse {
  example: Example
}

export class CreateExample {
  async execute(request: CreateExampleRequest): Promise<CreateExampleResponse> {
    const { message } = request

    const example = await prisma.example.create({ data: { message } })

    return { example }
  }
}
