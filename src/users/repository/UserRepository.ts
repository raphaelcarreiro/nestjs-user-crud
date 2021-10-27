import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDTO } from '../dto/UserDTO';
import { User } from '../shared/User';
import { IUserRepository } from './IUserRepository';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {
    //
  }

  async all(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async findById(id: string): Promise<User> {
    const user = await this.userModel.findById(id).exec();
    return user;
  }

  async create(payload: UserDTO) {
    const user = await this.userModel.create(payload);
    return user;
  }

  async update(id: string, payload: UserDTO): Promise<User> {
    await this.userModel.updateOne({ _id: id }, payload);
    return this.findById(id);
  }

  async delete(id: string): Promise<void> {
    await this.userModel.deleteOne({ _id: id }).exec();
  }
}
