import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UsersService } from '../users/users.service';
import { Ride, RideDocument } from './rides.schema';
import { CreateRideDto } from './dto/create-ride.dto';

@Injectable()
export class RidesService {
  constructor(
    @InjectModel(Ride.name) private RideModel: Model<RideDocument>,
    private usersService: UsersService,
  ) {}

  create(createRideDto: CreateRideDto) {
    return new this.RideModel(createRideDto).save();
  }

  findAll() {
    return this.RideModel.find();
  }

  /**
   * Get all rides that have not been rated by the user (not having a rating or a survey).
   * @param userId Id of the user to be queried
   * @returns Promise
   */
  async findAllUnrated(userId: string) {
    const user = await this.usersService.findOne(userId);
    return this.RideModel.find({ _id: { $nin: user.rated }, user: userId });
  }

  findOne(id: string) {
    return this.RideModel.findById(id);
  }

  remove(id: string) {
    return this.RideModel.deleteOne({ _id: id });
  }
}
