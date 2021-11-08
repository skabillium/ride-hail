import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Survey, SurveyDocument } from './surveys.schema';

@Injectable()
export class SurveysService {
  constructor(
    @InjectModel(Survey.name) private SurveyModel: Model<SurveyDocument>,
  ) {}
}
