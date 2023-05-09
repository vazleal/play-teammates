import { AppError } from '@/helpers/app-error'

export class MissingJwt extends AppError {
  constructor() {
    super(401, 'Missing Header', 'O token JWT não foi encontrado.')
  }
}
