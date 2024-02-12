import { IsNotEmpty, IsString, Length } from 'class-validator';
import { Types } from 'mongoose';

export class StoreProductDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 20)
  readonly name: string;
  @IsString()
  @Length(5, 60)
  readonly description: string;
  readonly category: Types.ObjectId;
  readonly subCategory: Types.ObjectId;
  readonly colors: Types.ObjectId[];
}
