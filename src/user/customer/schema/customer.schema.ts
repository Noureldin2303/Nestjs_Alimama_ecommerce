import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Address } from './address.schema';
import { Sizes } from './sizes.schema';
import { Types } from 'mongoose';
import { User } from 'src/user/schema/user.schema';
import { CreditCard } from './creditCard-schema';
import { Cart } from './cart.schema';
import { Wishlist } from './wishlist.schema';
import { Review } from './review.schema';

export type CustomerDocument = Customer & Document;

enum Gender {
  Male = 'male',
  Female = 'female',
}

@Schema({ collection: 'customers', timestamps: true })
export class Customer extends User {
  @Prop({ enum: Gender })
  gender: string;

  @Prop()
  birthDate: string;

  @Prop()
  avatar: string;

  @Prop()
  provaImg: string;

  @Prop()
  active: boolean;

  @Prop({ type: Types.ObjectId, ref: 'Address' })
  address: [Address];

  @Prop({ type: Types.ObjectId, ref: 'Sizes' })
  sizes: Sizes;

  @Prop({ type: Types.ObjectId, ref: 'CreditCard' })
  creditCard: [CreditCard];

  @Prop({ type: Types.ObjectId, ref: 'Wishlist' })
  wishlist: Wishlist;

  @Prop({ type: Types.ObjectId, ref: 'Cart' })
  cart: Cart;

  @Prop({ type: Types.ObjectId, ref: 'Review' })
  reviews: Review;

  //   @Prop({ type: Types.ObjectId, ref: 'Orders' })
  //   orders: Orders;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
