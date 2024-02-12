import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSubCategoryDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  readonly description: string;
  @IsString()
  @IsNotEmpty()
  readonly image: string;
  @IsString()
  @IsNotEmpty()
  readonly category: string;
}
