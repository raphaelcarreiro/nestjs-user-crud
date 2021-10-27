import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/UserSchema';
import { CreateUserService } from './services/CreateUserService';
import { CreateUserController } from './controllers/CreateUserController';
import { UserRepository } from './repository/UserRepository';
import { UpdateUserController } from './controllers/UpdateUserController';
import { DeleteUserController } from './controllers/DeleteUserController';
import { ShowUserController } from './controllers/ShowUserController';
import { GetUsersController } from './controllers/GetUsersController';
import { UpdateUserService } from './services/UpdateUserService';
import { DeleteUserService } from './services/DeleteUserService';
import { ShowUserService } from './services/ShowUserService';
import { GetUsersService } from './services/GetUsersService';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [
    CreateUserController,
    UpdateUserController,
    DeleteUserController,
    ShowUserController,
    GetUsersController,
  ],
  providers: [
    CreateUserService,
    UpdateUserService,
    DeleteUserService,
    ShowUserService,
    GetUsersService,
    {
      provide: 'IUserRepository',
      useClass: UserRepository,
    },
  ],
})
export class UsersModule {}
