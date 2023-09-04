import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Color } from '../color/schema/color.schema';
import { Category } from '../category/schema/category.schema';
import { SubCategory } from '../subcategory/schema/subcategory.schema';

export type ProductDocument = Product & Document;

@Schema({ collection: 'products' })
export class Product {
  @Prop({ type: Types.ObjectId, default: () => new Types.ObjectId() })
  _id: Types.ObjectId;

  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop({ type: Types.ObjectId, ref: 'Color' })
  colors: Color[];

  @Prop({ type: Types.ObjectId, ref: 'Category' })
  category: Category;

  @Prop({ type: Types.ObjectId, ref: 'SubCategory' })
  subCategory: SubCategory;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
