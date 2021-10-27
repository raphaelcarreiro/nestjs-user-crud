import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { UserDTO } from '../dto/UserDTO';
import { IUserRepository } from '../repository/IUserRepository';
import { User } from '../shared/User';

@Injectable()
export class UpdateUserService {
  constructor(
    @Inject('IUserRepository') private readonly repository: IUserRepository,
  ) {
    //
  }

  async execute(id: string, payload: UserDTO): Promise<User> {
    const user = this.repository.findById(id);

    if (!user) throw new NotFoundException('Usuário não encontrado');

    return this.repository.update(id, payload);
  }
}
