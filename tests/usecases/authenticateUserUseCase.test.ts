import { AuthenticateUserUseCaseImpl } from "../../src/usecases/AuthenticateUserUseCaseImpl.js";
import { InMemoryUserRepository } from "../../src/repositories/InMemory/UserRepositoryImpl.js";
import { CreateUserUseCaseImpl } from "../../src/usecases/CreateUserCaseImpl.js";

describe('Create Use Cases', () => {
    it('should create a new user', () => {
        // Arrange
        const userRepository = new InMemoryUserRepository();
        const createUserUseCase = new CreateUserUseCaseImpl(userRepository);
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
