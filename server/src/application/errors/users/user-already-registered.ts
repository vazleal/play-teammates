import { AppError } from '@/helpers/app-error'

export class UserAlreadyRegistered extends AppError {
  constructor() {
    super(409, 'Already Registered', 'Email/username already registered.')
  }
}
