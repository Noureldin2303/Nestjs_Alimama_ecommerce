import { CreateColorDto } from '../color/dto/create-color.dto';

export class CreateProductDto {
  readonly name: string;
  readonly category: string;
  readonly subCategory: string;
  readonly description: string;
  readonly colors: CreateColorDto[];
}
