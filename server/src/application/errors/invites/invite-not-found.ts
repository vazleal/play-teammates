import { AppError } from '@/helpers/app-error'

export class InviteNotFound extends AppError {
  constructor() {
    super(404, 'Not Found', 'Convite não encontrado.')
  }
}
