import { Types } from 'mongoose';

export class StoreProductDto {
  readonly name: string;
  readonly description: string;
  readonly category: Types.ObjectId;
  readonly subCategory: Types.ObjectId;
  readonly colors: Types.ObjectId[];
}
