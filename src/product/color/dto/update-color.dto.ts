import { Types } from 'mongoose';
import { UpdateSizeDto } from '../../size/dto/update-size.dto';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class UpdateColorDto {
  @IsString()
  @IsNotEmpty()
  readonly name?: string;
  @IsString()
  @IsNotEmpty()
  readonly hex?: string;
  @IsNotEmpty()
  @IsNumber()
  readonly price?: number;
  readonly images?: string[];
  @IsString()
  @IsNotEmpty()
  readonly provaImg?: string;
  readonly product?: Types.ObjectId;
  readonly sizes?: UpdateSizeDto[];
}
