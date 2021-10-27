import { Controller, Get } from '@nestjs/common';
import { User } from '../shared/User';
import { GetUsersService } from '../services/GetUsersService';

@Controller('users')
export class GetUsersController {
  constructor(private getUsersService: GetUsersService) {
    //
  }

  @Get()
  async handle(): Promise<User[]> {
    return await this.getUsersService.execute();
  }
}
