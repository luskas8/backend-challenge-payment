import { randomUUID as uuid } from 'node:crypto';

export class User {
  id: string;
  username: string;
  private password: string;

  private constructor(username: string, password: string) {
    this.id = uuid();
    this.username = username;
    this.password = password;
  }

  static create(username: string, password: string): User {
    // create user
    return new User(username, password);
  }

  validatePassword(password: string): boolean {
    return this.password === password;
  }

  changePassword(oldPassword: string, newPassword: string): boolean {
    if (this.validatePassword(oldPassword)) {
      this.password = newPassword;
      return true;
    }
    return false;
  }
}
