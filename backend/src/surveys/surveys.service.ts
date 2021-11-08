import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Survey, SurveyDocument } from './surveys.schema';
import { CreateSurveyDto } from './dto/create-survey.dto';

@Injectable()
export class SurveysService {
  constructor(
    @InjectModel(Survey.name) private SurveyModel: Model<SurveyDocument>,
  ) {}

  create(createSurveyDto: CreateSurveyDto) {
    return new this.SurveyModel(createSurveyDto).save();
  }

  findAll() {
    return this.SurveyModel.find();
  }

  findOne(id: string) {
    return this.SurveyModel.findById(id);
  }

  findLatestByUser(userId: string) {
    return this.SurveyModel.findOne({ users: userId }).sort({ createdAt: -1 });
  }

  remove(id: string) {
    return this.SurveyModel.deleteOne({ _id: id });
  }
}
