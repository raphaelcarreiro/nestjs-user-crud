import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IUserRepository } from '../repository/IUserRepository';
import { User } from '../shared/User';

@Injectable()
export class ShowUserService {
  constructor(
    @Inject('IUserRepository') private readonly repository: IUserRepository,
  ) {
    //
  }

  async execute(id: string): Promise<User> {
    const user = await this.repository.findById(id);

    if (!user) throw new NotFoundException('Usuário não encontrado');

    return user;
  }
}
