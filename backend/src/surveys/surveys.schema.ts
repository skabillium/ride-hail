import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Question, QuestionSchema } from './questions.schema';

@Schema({ timestamps: true })
export class Survey {
  @Prop({ required: true, ref: 'User' })
  users: string[];

  @Prop({ required: true, ref: 'Ride' })
  ride: string;

  @Prop({ required: true, type: [QuestionSchema] })
  // TODO: Maybe change this to an interface
  questions: Question[];

  @Prop({ required: false })
  responses: string[];
}

export type SurveyDocument = Survey & Document;
export const SurveySchema = SchemaFactory.createForClass(Survey);
