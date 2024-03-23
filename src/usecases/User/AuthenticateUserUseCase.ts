import { UserRepository } from '../../repositories/UserRepository.js';
import { UseCase } from '../UseCase.js';

export interface AuthenticateUserUseCaseRequest {
  username: string;
  password: string;
}

export interface AuthenticateUserUseCaseResponse {
  success: boolean;
}

export class AuthenticateUserUseCaseImpl implements UseCase<AuthenticateUserUseCaseRequest, AuthenticateUserUseCaseResponse> {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  execute({ username, password }: AuthenticateUserUseCaseRequest): AuthenticateUserUseCaseResponse {
    try {
      const user = this.userRepository.getByUsername(username);
      if (!user.validatePassword(password)) {
        return {
          success: false
        };
      }

      return {
        success: true,
      };
    } catch (error) {
      return {
        success: false
      };
    }
  }
}
