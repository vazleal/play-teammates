import { AppError } from '@/helpers/app-error'

export class InvalidJwt extends AppError {
  constructor() {
    super(401, 'Invalid Token', 'O token JWT provido é inválido.')
  }
}
