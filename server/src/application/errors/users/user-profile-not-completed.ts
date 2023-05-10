import { AppError } from '@/helpers/app-error'

export class UserProfileNotCompleted extends AppError {
  constructor() {
    super(
      400,
      'Profile Not Completed',
      'Atualize seu perfil com os dados relacionados ao jogo escolhido para poder criar convites.'
    )
  }
}
