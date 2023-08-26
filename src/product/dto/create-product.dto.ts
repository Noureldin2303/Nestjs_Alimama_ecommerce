import { CreateCategoryDto } from '../category/dto/create-category.dto';
import { CreateColorDto } from '../color/dto/create-color.dto';
import { CreateSubCategoryDto } from '../subcategory/dto/create-subcategory.dto';

export class CreateProductDto {
  name: string;
  category: CreateCategoryDto;
  subCategory: CreateSubCategoryDto;
  description: string;
  colors: CreateColorDto[];
}
