import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

export type WishlistDocument = Wishlist & Document;

@Schema()
export class Wishlist {
  @Prop({ type: Types.ObjectId, default: () => new Types.ObjectId() })
  _id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Customer' })
  customer: Types.ObjectId;

  // TODO: edit create product item and add the seller
  //   @Prop({ type: Types.ObjectId, ref: 'Product' })
  //   product: [Types.ObjectId];
}

export const WishlistSchema = SchemaFactory.createForClass(Wishlist);
