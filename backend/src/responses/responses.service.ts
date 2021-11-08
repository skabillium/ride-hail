import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Response, ResponseDocument } from './responses.schema';
import { CreateResponseDto } from './dto/create-response.dto';

@Injectable()
export class ResponsesService {
  constructor(
    @InjectModel(Response.name) private ResponseModel: Model<ResponseDocument>,
  ) {}

  create(createResponseDto: CreateResponseDto) {
    return new this.ResponseModel(createResponseDto).save();
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

  remove(id: string) {
    return this.ResponseModel.deleteOne({ _id: id });
  }
}
