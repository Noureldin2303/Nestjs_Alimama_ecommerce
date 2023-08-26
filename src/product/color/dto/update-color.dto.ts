import { UpdateSizeDto } from '../../size/dto/update-size.dto';

export class UpdateColorDto {
  readonly name: string;
  readonly hex: string;
  readonly price: number;
  readonly images: string[];
  readonly provaImg: string;
  readonly sizes: UpdateSizeDto[];
}
