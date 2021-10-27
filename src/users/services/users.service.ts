import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDTO } from '../dto/UserDTO';
import { User } from '../shared/User';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {
    //
  }

  async all() {
    return await this.userModel.find().exec();
  }

  async getById(id: string): Promise<User> {
    const user = await this.userModel.findById(id).exec();
    return user;
  }

  async update(id: string, payload: UserDTO): Promise<User> {
    this.userModel.updateOne({ _id: id }, payload);
    return this.getById(id);
  }

  async delete(id: string): Promise<void> {
    this.userModel.deleteOne({ _id: id }).exec();
  }
}
