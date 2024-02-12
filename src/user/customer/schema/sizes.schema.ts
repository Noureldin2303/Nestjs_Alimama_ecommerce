import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

export type SizesDocument = Sizes & Document;

@Schema({ collection: 'customer-sizes' })
export class Sizes {
  @Prop({ type: Types.ObjectId, default: () => new Types.ObjectId() })
  _id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Customer' })
  customer: Types.ObjectId;

  @Prop()
  shoulders: number;

  @Prop()
  chest: number;

  @Prop()
  waist: number;

  @Prop()
  leftArm: number;

  @Prop()
  rightArm: number;

  @Prop()
  leftLeg: number;

  @Prop()
  rightLeg: number;

  @Prop()
  torse: number;

  @Prop()
  height: number;
}

export const SizesSchema = SchemaFactory.createForClass(Sizes);
