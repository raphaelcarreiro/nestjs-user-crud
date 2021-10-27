import { Body, Controller, Param, Put } from '@nestjs/common';
import { UserDTO } from '../dto/UserDTO';
import { UpdateUserService } from '../services/UpdateUserService';
import { User } from '../shared/User';

@Controller('users')
export class UpdateUserController {
  constructor(private updateUserService: UpdateUserService) {
    //
  }

  @Put(':id')
  async handle(
    @Param('id') id: string,
    @Body() payload: UserDTO,
  ): Promise<User> {
    return await this.updateUserService.execute(id, payload);
  }
}
