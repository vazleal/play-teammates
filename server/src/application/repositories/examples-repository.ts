import { type Example } from '@/domain/entities/example'

export abstract class ExamplesRepository {
  abstract findMany(): Promise<Example[]>
  abstract findById(id: string): Promise<Example | null>
  abstract create(example: Example): Promise<void>
  abstract save(example: Example): Promise<void>
  abstract delete(example: Example): Promise<void>
}
