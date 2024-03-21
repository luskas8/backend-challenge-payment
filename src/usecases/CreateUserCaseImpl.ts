import { User } from '../entities/User.js';
import { UserRepository } from '../repositories/UserRepository.js';
import { CreateUserRequest, CreateUserResponse, CreateUserUseCase } from './CreateUserUseCase.js';

export class CreateUserUseCaseImpl implements CreateUserUseCase {
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
