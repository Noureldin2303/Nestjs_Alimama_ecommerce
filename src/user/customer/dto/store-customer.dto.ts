import { Types } from 'mongoose';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

export class StoreCustomerDto extends CreateUserDto {
  readonly gender: string;
  readonly birthDate: string;
  readonly avatar?: string;
  readonly provaImg?: string;
  readonly role: string;
  readonly active: boolean;
  readonly address?: Types.ObjectId[];
  readonly sizes?: Types.ObjectId;
  readonly creditCard?: Types.ObjectId[];
  // readonly reviews: Types.ObjectId[];
  // readonly wisklist: CreateWishlistDto;
  // readonly cart: CreateCartDto;
  // readonly orders: CreateOrdersDto;
}
