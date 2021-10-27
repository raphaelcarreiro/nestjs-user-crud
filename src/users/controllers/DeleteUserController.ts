import { Controller, Delete, Param } from '@nestjs/common';
import { DeleteUserService } from '../services/DeleteUserService';

@Controller('users')
export class DeleteUserController {
  constructor(private deleteUserService: DeleteUserService) {
    //
  }

  @Delete(':id')
  async handle(@Param('id') id: string): Promise<void> {
    return await this.deleteUserService.execute(id);
  }
}
