import { UserRepository } from '../repositories/UserRepository.js';
import { AuthenticateUserUseCaseRequest, AuthenticateUserUseCaseResponse, AuthenticateUserUseCase } from './AuthenticateUserUseCase.js';

export class AuthenticateUserUseCaseImpl implements AuthenticateUserUseCase {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  execute({ username, password }: AuthenticateUserUseCaseRequest): AuthenticateUserUseCaseResponse {
    const user = this.userRepository.getByUsername(username);
    if (!user.validatePassword(password)) {
      return {
        success: false
      };
    }

    return {
      success: true,
    };
  }
}
