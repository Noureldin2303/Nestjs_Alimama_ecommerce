import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { CreateSizeDto } from '../../size/dto/create-size.dto';

export class CreateColorDto {
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
  readonly sizes: CreateSizeDto[];
}
