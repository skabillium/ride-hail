import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Question {
  @Prop({ required: true })
  text: string;

  @Prop({ required: false })
  options?: string[];
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
