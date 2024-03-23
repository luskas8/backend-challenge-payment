import { User } from '../../entities/User.js';
import { UserRepository } from '../../repositories/UserRepository.js';
import { UseCase } from '../UseCase.js';

export interface CreateUserRequest {
  username: string;
  password: string;
}

export interface CreateUserResponse {
  success: boolean;
  message: string;
  user: Omit<User, 'password'>;
}

export class CreateUserUseCase implements UseCase<CreateUserRequest, CreateUserResponse> {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  execute({ username, password }: CreateUserRequest): CreateUserResponse {
    const user = User.create(username, password);
      this.userRepository.save(user);
      return {
        success: true,
        message: 'User created successfully',
        user
      };
  }
}
