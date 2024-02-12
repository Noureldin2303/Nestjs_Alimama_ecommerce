import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { Types } from 'mongoose';

export class CreateSizeDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsNumber()
  @IsNotEmpty()
  readonly quantity: number;
  readonly color: Types.ObjectId;
  readonly product: Types.ObjectId;
}
