import { Types } from 'mongoose';
import { UpdateSizeDto } from '../../size/dto/update-size.dto';

export class UpdateColorDto {
  name?: string;
  hex?: string;
  price?: number;
  images?: string[];
  provaImg?: string;
  product?: Types.ObjectId;
  sizes?: UpdateSizeDto[];
}
