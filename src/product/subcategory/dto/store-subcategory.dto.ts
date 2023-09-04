import { Types } from 'mongoose';

export class StoreSubCategoryDto {
  readonly name: string;
  readonly description: string;
  readonly image: string;
  readonly category: Types.ObjectId;
}
