import { User } from 'src/app/shared/user.interface';

export class Validator {
  isSuscriptor(user: User): boolean {
    return user.role === 'SUSCRIPTOR';
  }

  isEditor(user: User): boolean {
    return user.role === 'EDITOR';
  }

  isAdmin(user: User): boolean {
    return user.role === 'ADMIN';
  }
}
