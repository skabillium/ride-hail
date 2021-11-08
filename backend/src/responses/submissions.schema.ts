import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Submission {
  // TODO: Decide if this is an id or the question string
  @Prop({ required: true })
  question: string;

  @Prop({ required: true })
  answer: string;
}

export const SubmissionSchema = SchemaFactory.createForClass(Submission);