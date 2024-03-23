import { AuthenticateUserUseCaseImpl } from "../../src/usecases/User/AuthenticateUserUseCase.js";
import { InMemoryUserRepository } from "../../src/repositories/InMemory/UserRepositoryImpl.js";
import { CreateUserUseCase } from "../../src/usecases/User/CreateUserCase.js";

describe('Create Use Cases', () => {
    it('should create a new user', () => {
        // Arrange
        const userRepository = new InMemoryUserRepository();
        const createUserUseCase = new CreateUserUseCase(userRepository);
        const authenticateUserUseCase = new AuthenticateUserUseCaseImpl(userRepository);
        const userRequest = {
            username: 'user1',
            password: 'password1'
        };
        // Act
        createUserUseCase.execute(userRequest);
        const authenticateUserResponse = authenticateUserUseCase.execute(userRequest);
        // Assert
        expect(authenticateUserResponse.success).toBe(true);
    });
});
