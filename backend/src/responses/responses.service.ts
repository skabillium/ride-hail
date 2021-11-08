import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UsersService } from '../users/users.service';
import { Response, ResponseDocument } from './responses.schema';
import { CreateResponseDto } from './dto/create-response.dto';

@Injectable()
export class ResponsesService {
  constructor(
    @InjectModel(Response.name) private ResponseModel: Model<ResponseDocument>,
    private usersService: UsersService,
  ) {}

  // Create a response and update the rated rides array of the user.
  async create(createResponseDto: CreateResponseDto) {
    // Create response
    const response = await new this.ResponseModel(createResponseDto).save();
    // Update rated array of user
    await this.usersService.updateRated(response.user, response.ride);
    return response;
  }

  findAll() {
    return this.ResponseModel.find();
  }

  findOne(id: string) {
    return this.ResponseModel.findById(id);
  }

  findByUser(userId: string) {
    return this.ResponseModel.findOne({ user: userId });
  }

  // Remove a response and update the rated rides array of the user.
  async remove(id: string) {
    const response = await this.findOne(id);
    // Delete response
    await this.ResponseModel.deleteOne({ _id: id });
    // Update rated field on User model
    await this.usersService.removeRated(response.user, response.ride);
  }
}
