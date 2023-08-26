import { CreateSizeDto } from '../../size/dto/create-size.dto';

export class CreateColorDto {
  name: string;
  hex: string;
  price: number;
  images: string[];
  provaImg: string;
  sizes: CreateSizeDto[];
}
