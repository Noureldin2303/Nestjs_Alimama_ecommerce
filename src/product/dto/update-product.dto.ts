import { UpdateCategoryDto } from '../category/dto/update-category.dto';
import { UpdateColorDto } from '../color/dto/update-color.dto';
import { UpdateSubCategoryDto } from '../subcategory/dto/update-subcategory.dto';

export class UpdateProductDto {
  readonly createdBy?: string;
  readonly name?: string;
  readonly category?: UpdateCategoryDto;
  readonly subCategory?: UpdateSubCategoryDto;
  readonly description?: string;
  readonly colors?: UpdateColorDto[];
}
