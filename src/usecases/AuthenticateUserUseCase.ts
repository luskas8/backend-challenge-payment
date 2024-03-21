export interface AuthenticateUserUseCaseRequest {
  username: string;
  password: string;
}

export interface AuthenticateUserUseCaseResponse {
  success: boolean;
}

export abstract class AuthenticateUserUseCase {
  abstract execute(request: AuthenticateUserUseCaseRequest): AuthenticateUserUseCaseResponse;
}
