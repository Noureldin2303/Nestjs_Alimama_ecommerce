import { CreateColorDto } from '../color/dto/create-color.dto';

export class UpdateProductDto {
  readonly name?: string;
  readonly description?: string;
  readonly category?: string;
  readonly subCategory?: string;
  readonly colors?: CreateColorDto[];
}
