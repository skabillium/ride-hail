import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Rating, RatingDocument } from './ratings.schema';
@Injectable()
export class RatingsService {
  constructor(
    @InjectModel(Rating.name) private RatingModel: Model<RatingDocument>,
  ) {}
}
