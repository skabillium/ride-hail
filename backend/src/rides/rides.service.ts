import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ride, RideDocument } from './rides.schema';

@Injectable()
export class RidesService {
  constructor(
    @InjectModel(Ride.name) private ProjectModel: Model<RideDocument>,
  ) {}
}
