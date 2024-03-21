import { CreateUserUseCaseImpl } from "../../src/usecases/CreateUserCaseImpl.js";
import { InMemoryUserRepository } from "../../src/repositories/InMemory/UserRepositoryImpl.js";

describe('Create Use Cases', () => {
    it('should create a new user', () => {
        // Arrange
        const userRepository = new InMemoryUserRepository();
        const createUserUseCase = new CreateUserUseCaseImpl(userRepository);
        const createUserRequest = {
            username: 'user1',
            password: 'password1'
        };
        // Act
        const createUserResponse = createUserUseCase.execute(createUserRequest);
        // Assert
        expect(createUserResponse.success).toBe(true);
        expect(createUserResponse.message).toBe('User created successfully');
        expect(createUserResponse.user.username).toBe('user1');
    });
});
