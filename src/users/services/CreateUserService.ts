import { Inject, Injectable } from '@nestjs/common';
import { UserDTO } from '../dto/UserDTO';
import { IUserRepository } from '../repository/IUserRepository';

@Injectable()
export class CreateUserService {
  constructor(
    @Inject('IUserRepository')
    private readonly repository: IUserRepository,
  ) {
    //
  }

  async execute(payload: UserDTO) {
    const user = this.repository.create(payload);
    return user;
  }
}
