import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Submission, SubmissionSchema } from './submissions.schema';

@Schema({ timestamps: true })
export class Response {
  @Prop({ required: true, ref: 'User' })
  user: string;

  @Prop({ required: true, ref: 'Survey' })
  survey: string;

  @Prop({ required: true, type: [SubmissionSchema] })
  // TODO: Maybe change this to an interface
  submissions: Submission[];
}

export type ResponseDocument = Response & Document;
export const ResponseSchema = SchemaFactory.createForClass(Response);
