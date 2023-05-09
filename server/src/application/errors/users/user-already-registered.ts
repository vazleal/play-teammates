import { AppError } from '@/helpers/app-error'

export class UserAlreadyRegistered extends AppError {
  constructor() {
    super(
      409,
      'Already Registered',
      'Esse email/username já foi registrado previamente.'
    )
  }
}
