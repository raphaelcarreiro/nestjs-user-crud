import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from '../repository/IUserRepository';
import { User } from '../shared/User';

@Injectable()
export class GetUsersService {
  constructor(
    @Inject('IUserRepository') private readonly repository: IUserRepository,
  ) {}

  async execute(): Promise<User[]> {
    return await this.repository.all();
  }
}
