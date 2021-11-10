import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ _id: false })
export class Submission {
  @Prop({ required: true })
  question: string;

  @Prop({ required: true })
  answer: string[];
}

export const SubmissionSchema = SchemaFactory.createForClass(Submission);
