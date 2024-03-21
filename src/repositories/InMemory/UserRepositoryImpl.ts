import { User } from "../../entities/User.js";
import { UserRepository } from "../UserRepository.js";

export class InMemoryUserRepository implements UserRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  save(user: User): User {
    this.users.push(user);
    return user;
  }

  update(data: User): boolean {
    const index = this.users.findIndex(user => user.id === data.id);
    if (index === -1) {
      return false;
    }
    this.users[index] = data;
    return true;
  }

  delete(id: string): void {
    const index = this.users.findIndex(user => user.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }

  list(): User[] {
    return this.users;
  }

  getById(id: string): User {
    return this.users.find(user => user.id === id);
  }

  getByUsername(username: string): User {
    return this.users.find(user => user.username === username);
  }
}
