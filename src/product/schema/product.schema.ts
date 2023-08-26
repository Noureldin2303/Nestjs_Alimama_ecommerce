import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Color } from '../color/schema/color.schema';
import { Category } from '../category/schema/category.schema';
import { SubCategory } from '../subcategory/schema/subcategory.schema';

export type ProductDocument = Product & Document;

@Schema({ collection: 'products' })
export class Product {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop({ type: Types.ObjectId, ref: 'categories' })
  category: Category;

  @Prop({ type: Types.ObjectId, ref: 'subcategories' })
  subCategory: SubCategory;

  @Prop({ type: Types.ObjectId, ref: 'colors' })
  colors: Color[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
