import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Response, ResponseDocument } from './responses.schema';

@Injectable()
export class ResponsesService {
  constructor(
    @InjectModel(Response.name) private RideModel: Model<ResponseDocument>,
  ) {}
}
