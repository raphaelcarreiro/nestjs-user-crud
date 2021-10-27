import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IUserRepository } from '../repository/IUserRepository';

@Injectable()
export class DeleteUserService {
  constructor(
    @Inject('IUserRepository') private readonly repository: IUserRepository,
  ) {
    //
  }

  async execute(id: string): Promise<void> {
    const user = await this.repository.findById(id);

    if (!user) throw new NotFoundException('Usuário não encontrado');

    await this.repository.delete(id);
  }
}
