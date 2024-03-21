import { User } from '../entities/User.js';

export abstract class UserAdapter {
  abstract save(user: User): User;
  abstract update(data: User): boolean;
  abstract delete(id: string): void;
  abstract list(): User[];
  abstract getById(id: string): User;
  abstract getByUsername(username: string): User;
}
