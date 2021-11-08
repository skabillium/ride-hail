import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Question, QuestionSchema } from './questions.schema';

@Schema({ timestamps: true })
export class Survey {
  @Prop({ required: true, ref: 'User' })
  users: string[];

  @Prop({ required: true, type: [QuestionSchema] })
  questions: Question[];
}

export type SurveyDocument = Survey & Document;
export const SurveySchema = SchemaFactory.createForClass(Survey);
