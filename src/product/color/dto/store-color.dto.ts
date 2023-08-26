import { Types } from 'mongoose';

export class StoreColorDto {
  name: string;
  hex: string;
  price: number;
  images: string[];
  provaImg: string;
  product: Types.ObjectId;
  sizes: Types.ObjectId[];
}
