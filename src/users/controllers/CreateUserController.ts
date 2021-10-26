import { Body, Controller, Post } from '@nestjs/common';
import { User } from '../shared/User';
import { CreateUserService } from '../services/CreateUserService';

@Controller('users')
export class CreateUserController {
  constructor(private createUserService: CreateUserService) {
    //
  }

  @Post()
  async create(@Body() user: User): Promise<User> {
    return this.createUserService.execute(user);
  }
}
