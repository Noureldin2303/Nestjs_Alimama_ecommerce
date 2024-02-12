import { IsNotEmpty, IsString, Length } from 'class-validator';
import { CreateColorDto } from '../color/dto/create-color.dto';
export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 20)
  readonly name: string;
  readonly category: string;
  readonly subCategory: string;
  @IsString()
  @Length(5, 60)
  readonly description: string;
  readonly colors: CreateColorDto[];
}
