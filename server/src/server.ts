import 'express-async-errors'
import 'reflect-metadata'

import '@/config/env'

import express from 'express'

import cors from 'cors'

import { PORT } from '@/config/env/app'

async function bootstrap(): Promise<void> {
  const app = express()

  app.use(cors())
  app.use(express.json())

  app.listen(PORT, () => {
    console.log(`HTTP server running at port ${PORT}!`)
  })
}

bootstrap()
