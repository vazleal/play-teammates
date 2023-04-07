import { type Example } from '@/domain/entities/example'

interface HTTPExample {
  id: string
  message: string
  createdAt: Date
  updatedAt: Date
}

export class ExampleViewModel {
  static toHTTP(example: Example): HTTPExample {
    return {
      id: example.id,
      message: example.message,
      createdAt: example.createdAt,
      updatedAt: example.updatedAt
    }
  }
}
