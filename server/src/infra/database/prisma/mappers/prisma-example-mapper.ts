import { Example } from '@/domain/entities/example'

import { type Example as RawExample } from '@prisma/client'

export class PrismaExampleMapper {
  static toPrisma(example: Example): RawExample {
    return {
      id: example.id,
      message: example.message,
      createdAt: example.createdAt,
      updatedAt: example.updatedAt
    }
  }

  static toDomain(raw: RawExample): Example {
    return new Example(
      {
        message: raw.message,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt
      },
      raw.id
    )
  }
}
