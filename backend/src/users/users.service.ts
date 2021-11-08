import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './users.schema';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) {}

  create(createUserDto: CreateUserDto) {
    return new this.UserModel(createUserDto).save();
  }

  findAll() {
    return this.UserModel.find();
  }

  findOne(id: string) {
    return this.UserModel.findById(id);
  }

  findByEmail(email: string) {
    return this.UserModel.findOne({ email });
  }

  updateRated(userId: string, rideId: string) {
    return this.UserModel.updateOne(
      { _id: userId },
      { $push: { rated: rideId } },
    );
  }

  remove(id: string) {
    return this.UserModel.deleteOne({ _id: id });
  }
}
