import { IsNotEmpty, IsString } from 'class-validator';
import { Types } from 'mongoose';

export class StoreSubCategoryDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  readonly description: string;
  @IsString()
  @IsNotEmpty()
  readonly image: string;
  readonly category: Types.ObjectId;
}
