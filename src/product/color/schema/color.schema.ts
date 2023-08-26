import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Product } from 'src/product/schema/product.schema';
import { Size } from '../../size/schema/size.schema';

export type ColorDocument = Color & Document;

@Schema({ collection: 'colors' })
export class Color {
  @Prop({ type: Types.ObjectId, default: () => new Types.ObjectId() })
  _id: Types.ObjectId;

  @Prop()
  name: string;

  @Prop()
  hex: string;

  @Prop()
  price: number;

  @Prop([String])
  images: string[];

  @Prop()
  provaImg: string;

  @Prop({ type: Types.ObjectId, ref: 'sizes' })
  sizes: Size[];

  @Prop({ type: Types.ObjectId, ref: 'products' })
  product: Product;
}

export const ColorSchema = SchemaFactory.createForClass(Color);
