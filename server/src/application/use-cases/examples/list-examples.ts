import { prisma } from '@/database/prisma'

import { type Example } from '@prisma/client'

interface GetExamplesResponse {
  examples: Example[]
}

export class GetExamples {
  async execute(): Promise<GetExamplesResponse> {
    const examples = await prisma.example.findMany()

    return { examples }
  }
}
