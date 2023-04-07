import { container } from 'tsyringe'

import { type ExamplesRepository } from '@/application/repositories/examples-repository'
import { PrismaExamplesRepository } from '@/infra/database/prisma/repositories/prisma-examples-repository'

container.registerSingleton<ExamplesRepository>(
  'ExamplesRepository',
  PrismaExamplesRepository
)
