import { UserDTO } from '../dto/UserDTO';
import { User } from '../shared/User';

export interface IUserRepository {
  all(): Promise<User[]>;
  findById(id: string): Promise<User>;
  create(payload: UserDTO): Promise<User>;
  update(id: string, payload: UserDTO): Promise<User>;
  delete(id: string): Promise<void>;
}
