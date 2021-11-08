import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Rating {
  @Prop({ required: true, ref: 'User' })
  user: string;

  @Prop({ required: true, ref: 'Ride' })
  ride: string;

  @Prop({ required: true })
  stars: number;
}

export type RatingDocument = Rating & Document;
export const RatingSchema = SchemaFactory.createForClass(Rating);
