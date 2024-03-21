import { User } from '../entities/User.js';

export interface CreateUserRequest {
  username: string;
  password: string;
}

export interface CreateUserResponse {
  success: boolean;
  message: string;
  user: Omit<User, 'password'>;
}

export abstract class CreateUserUseCase {
  abstract execute(request: CreateUserRequest): CreateUserResponse;
}
