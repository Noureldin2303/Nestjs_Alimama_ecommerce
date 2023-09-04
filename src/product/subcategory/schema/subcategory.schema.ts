import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Category } from '../../category/schema/category.schema';

export type SubCategoryDocument = SubCategory & Document;

@Schema({ collection: 'subcategories' })
export class SubCategory {
  @Prop({ type: Types.ObjectId, default: () => new Types.ObjectId() })
  _id: Types.ObjectId;

  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  image: string;

  @Prop({ type: Types.ObjectId, ref: 'Category' })
  category: Category;
}

export const SubCategorySchema = SchemaFactory.createForClass(SubCategory);
