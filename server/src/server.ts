import 'express-async-errors'
import 'reflect-metadata'

import '@/config/env'

import express from 'express'

import cors from 'cors'

import { PORT } from '@/config/env/app'

import { appRoutes } from '@/infra/http/routes'
import { errorHandler } from '@/infra/http/middlewares/error-handler'

async function bootstrap(): Promise<void> {
  const app = express()

  app.use(cors())
  app.use(express.json())

  app.use('/api/v1', appRoutes)
  app.use(errorHandler)

  app.listen(PORT, () => {
    console.log(`HTTP server running at port ${PORT}!`)
  })
}

bootstrap()
