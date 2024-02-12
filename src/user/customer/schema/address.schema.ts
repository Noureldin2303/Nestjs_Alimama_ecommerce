import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

export type AddressDocument = Address & Document;

@Schema()
export class Address {
  @Prop({ type: Types.ObjectId, default: () => new Types.ObjectId() })
  _id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Customer' })
  customer: Types.ObjectId;

  @Prop()
  addressLine: string;

  @Prop()
  city: string;

  @Prop()
  country: string;
}

export const AddressSchema = SchemaFactory.createForClass(Address);
