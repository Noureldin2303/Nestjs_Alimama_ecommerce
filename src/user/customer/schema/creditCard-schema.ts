import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

export type CreditCardDocument = CreditCard & Document;

@Schema({ collection: 'creditCards' })
export class CreditCard {
  @Prop({ type: Types.ObjectId, default: () => new Types.ObjectId() })
  _id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Customer' })
  customer: Types.ObjectId;

  @Prop()
  cardNumber: string;

  @Prop()
  cvv: number;

  @Prop()
  expiryDate: string;
}

export const CreditCardSchema = SchemaFactory.createForClass(CreditCard);
