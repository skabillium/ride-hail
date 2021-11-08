import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Question {
  @Prop({ required: true })
  text: string;

  @Prop({ required: true })
  type: 'SingleChoice' | 'MultipleChoice' | 'FreeText';

  @Prop({ required: false })
  options?: string[];
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
