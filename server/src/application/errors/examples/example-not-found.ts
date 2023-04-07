import { AppError } from '@/helpers/app-error'

export class ExampleNotFound extends AppError {
  constructor() {
    super(404, 'Not Found', 'Example not found.')
  }
}
