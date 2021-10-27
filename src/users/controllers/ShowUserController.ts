import { Controller, Get, Param } from '@nestjs/common';
import { User } from '../shared/User';
import { ShowUserService } from '../services/ShowUserService';

@Controller('users')
export class ShowUserController {
  constructor(private showUserService: ShowUserService) {
    //
  }

  @Get(':id')
  async handle(@Param('id') id: string): Promise<User> {
    return await this.showUserService.execute(id);
  }
}
