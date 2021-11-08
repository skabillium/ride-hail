import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UsersService } from '../users/users.service';
import { Rating, RatingDocument } from './ratings.schema';
import { CreateRatingDto } from './dto/create-rating.dto';

@Injectable()
export class RatingsService {
  constructor(
    @InjectModel(Rating.name) private RatingModel: Model<RatingDocument>,
    private usersService: UsersService,
  ) {}

  async create(createRatingDto: CreateRatingDto) {
    // Create rating
    const rating = await new this.RatingModel(createRatingDto).save();
    // Update user model
    await this.usersService.updateRated(rating.user, rating.ride);
    // Return rating
    return rating;
  }

  findOne(id: string) {
    return this.RatingModel.findById(id);
  }

  findAll() {
    return this.RatingModel.find();
  }

  async remove(id: string) {
    const rating = await this.findOne(id);

    // Delete rating
    await this.RatingModel.deleteOne({ _id: id });

    // Update rated field on User model
    await this.usersService.removeRated(rating.user, rating.ride);
  }
}
