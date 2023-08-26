import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Color } from 'src/product/color/schema/color.schema';
import { Product } from 'src/product/schema/product.schema';

export type SizeDocument = Size & Document;

@Schema({ collection: 'sizes' })
export class Size {
  @Prop({ type: Types.ObjectId, default: () => new Types.ObjectId() })
  _id: Types.ObjectId;

  @Prop()
  name: string;

  @Prop()
  quantity: number;

  @Prop({ type: Types.ObjectId, ref: 'colors' })
  color: Color;

  @Prop({ type: Types.ObjectId, ref: 'products' })
  product: Product;
}

export const SizeSchema = SchemaFactory.createForClass(Size);
