import { Types } from 'mongoose';

export class StoreProductDto {
  name: string;
  category: Types.ObjectId;
  subCategory: Types.ObjectId;
  description: string;
  colors: Types.ObjectId[];
}
