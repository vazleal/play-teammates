import { type Example } from '@/domain/entities/example'
import { type ExamplesRepository } from '@/application/repositories/examples-repository'

import { prisma } from '../prisma'

import { PrismaExampleMapper } from '../mappers/prisma-example-mapper'

export class PrismaExamplesRepository implements ExamplesRepository {
  async findMany(): Promise<Example[]> {
    const examples = await prisma.example.findMany()

    return examples.map(example => PrismaExampleMapper.toDomain(example))
  }

  async findById(id: string): Promise<Example | null> {
    const example = await prisma.example.findUnique({
      where: { id }
    })

    if (!example) return null

    return PrismaExampleMapper.toDomain(example)
  }

  async create(example: Example): Promise<void> {
    const raw = PrismaExampleMapper.toPrisma(example)

    await prisma.example.create({
      data: raw
    })
  }

  async save(example: Example): Promise<void> {
    const raw = PrismaExampleMapper.toPrisma(example)

    await prisma.example.update({
      where: { id: raw.id },
      data: raw
    })
  }

  async delete(example: Example): Promise<void> {
    const raw = PrismaExampleMapper.toPrisma(example)

    await prisma.example.delete({
      where: { id: raw.id }
    })
  }
}
