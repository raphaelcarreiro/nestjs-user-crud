import { Body, Controller, Delete, Get, Param, Put } from '@nestjs/common';
import { User } from '../shared/User';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {
    //
  }

  @Get()
  async all(): Promise<User[]> {
    return this.userService.all();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<User> {
    return this.userService.getById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() user: User): Promise<User> {
    return this.userService.update(id, user);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    this.userService.delete(id);
  }
}
