import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Ride {
  @Prop({ required: true, ref: 'User' })
  user: string;

  @Prop()
  vehicle: string[];
}

export type RideDocument = Ride & Document;
export const RideSchema = SchemaFactory.createForClass(Ride);
