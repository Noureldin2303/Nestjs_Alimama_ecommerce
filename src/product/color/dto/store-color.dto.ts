import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { Types } from 'mongoose';

export class StoreColorDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  readonly hex: string;
  @IsNotEmpty()
  @IsNumber()
  readonly price: number;
  readonly images: string[];
  @IsString()
  @IsNotEmpty()
  readonly provaImg: string;
  readonly product: Types.ObjectId;
  readonly sizes: Types.ObjectId[];
}
